import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import sampleJob from '../Data/finalSample.json';
import './FavorCss.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/text.css';
import { isLoggedInState } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1300) {
        setSlidesToShow(5); 
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(3);
      }
      setCurrentSlide(0);
    };

    updateSlidesToShow(); 
    window.addEventListener('resize', updateSlidesToShow);

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
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

  useEffect(() => {
    fetchJobs(activePage);
  }, [activePage]);

  const fetchJobs = async (pageNumber: number) => {
    setLoading(true);
    const id = localStorage.getItem('id');
    if (!id) {
      setError('사용자의 id를 확인할 수 없습니다.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/work/recommend?id=${id}`);
      setFavJobs(response.data || []);
      setError(null); 
    } catch (error) {
      console.error('Failed to fetch jobs', error);
      setError('데이터를 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className='flex justify-center flex-col w-full items-center Haeparang'>
      {/* This part will always be visible */}
      <div className='bg-gray-400 mb-12 p-1 w-2/5 text-center text-3xl rounded-xl text-white shadow'>추천 일자리</div>
      
      {/* Conditional rendering based on login state */}
      {isLoggedIn ? (
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
      ) : (
        <div className='content text-center m-8 pb-12'>
        <div className='text-4xl text-[#e279a5] GamtanBold letter'>
            로그인 후 추천 일자리를 확인하실 수 있습니다.
          </div>
        </div>
      )}
    </div>
  );
}
