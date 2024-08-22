import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import sampleJob from '../Data/finalSample.json';
import './FavorCss.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function FavorJob() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const totalSlides = sampleJob.length;

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1300) {
        setSlidesToShow(5); // lg 화면일 때 5개
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3); // md 화면일 때 3개
      } else {
        setSlidesToShow(3); // sm 화면일 때 1개
      }
      setCurrentSlide(3);// 화면 크기 변경 시 첫 슬라이드로 초기화
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
            {sampleJob.map((job, index) => (
              <div className="slider" key={index}>
                <div className="w-[220px] p-6 bg-white border border-gray-200 rounded-lg shadow h-[300px]">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                    {job.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-500">{job.subtitle}</p>
                  <p className="mb-3 font-normal text-gray-500">{job.location}</p>
                  <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                    {job.regidate}
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
