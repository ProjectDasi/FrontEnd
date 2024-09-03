import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import sampleJob from '../Data/finalSample.json';
import './FavorCss.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FavorJob {
  id: number;
  title: string;
  region: string;
  company: string | null;
  workCategory: string | null;
  dueDate: string;
}

export default function FavorJob() {
  const [FavJobs, setFavJobs] = useState<FavorJob[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(0);
  const totalSlides = sampleJob.length;
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1300) {
        setSlidesToShow(5); // lg 화면일 때 5개
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3); // md 화면일 때 3개
      } else {
        setSlidesToShow(3); // sm 화면일 때 1개
      }
      setCurrentSlide(0);// 화면 크기 변경 시 첫 슬라이드로 초기화
    };

    updateSlidesToShow(); // 컴포넌트가 마운트될 때 초기 설정
    window.addEventListener('resize', updateSlidesToShow); // 화면 크기 변경 감지

    return () => {
      window.removeEventListener('resize', updateSlidesToShow); // 정리 작업
    };
  }, []);

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - slidesToShow) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

    // axios 인스턴스 생성
    const client = axios.create({
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Credentials': true,
        'ngrok-skip-browser-warning': true,
      },
    });

    useEffect(() => {
      fetchJobs(activePage);
    }, [activePage]);
  
    const fetchJobs = async (pageNumber: number) => {
      setLoading(true); // 로딩 상태를 true로 설정
      try {
        const response = await client.get(`https://cc7a-115-22-210-176.ngrok-free.app/work/recommend?id=1`);
        setFavJobs(response.data || []); // content가 undefined일 경우 빈 배열로 초기화
        console.log('response',response);
      } catch (error) {
        console.error('Failed to fetch jobs', error);
        setError('데이터를 불러오는 데 실패했습니다.'); // 에러 메시지 설정
      } finally {
        setLoading(false); // 로딩 상태를 false로 설정
      }
    };

    if (loading) {
      return <div>로딩 중...</div>; // 로딩 중 표시
    }
  
    if (error) {
      return <div>{error}</div>; // 에러 메시지 표시
    }

  return (
    <div className='flex justify-center flex-col w-full items-center Haeparang'>
      <div className='bg-gray-300 mt-8 mb-5 p-1 w-2/5 text-center text-3xl rounded-xl text-white shadow'>추천 일자리</div>
      <div className="slider__wrap w-[1140px]">
        <div className="slider__btn">
          <button onClick={goToPrevSlide} className="prev rounded-md bg-white px-2 py-1.5 text-3xl font-bold text-gray-500 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-100" title="이전이미지">
            <IoIosArrowBack />
          </button>
        </div>
        <div className="slider__img">
          <motion.div
            className="slider__inner"
            style={{ display: 'flex', gap: '10px', position: 'relative' }}
            animate={{ x: `-${currentSlide * 230}px` }}
            transition={{ duration: 0 }}
          >
            {FavJobs.map((job, index) => (
              <div className="slider" key={index}>
                <div className="w-[220px] p-6 bg-white border border-gray-200 rounded-lg shadow h-[300px]">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                    {job.company}
                  </h5>
                  <p className="mb-3 font-normal text-gray-500">{job.title}</p>
                  <p className="mb-3 font-normal text-gray-500">{job.region}</p>
                  <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                    {job.dueDate}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="slider__btn">
          <button onClick={goToNextSlide} className="next rounded-md bg-white px-3 py-1.5 text-3xl font-bold text-gray-500 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-100" title="다음이미지">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
