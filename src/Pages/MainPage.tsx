import Header from '../Components/Header';
import Footer from '../Components/Footer';
import scroll from '../Images/scroll4.png';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './main.css';
import edu from '../Images/school.png'
import job from '../Images/job.png'
import resume from '../Images/resume.png'

export default function MainPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const video = document.getElementById('mainVideo') as HTMLVideoElement;

    if (video) {
      video.playbackRate = 0.7;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) { // You can adjust the scroll value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-screen w-full'>
      <div className='fixed top-0 left-0 right-0 bg-white z-50'>
        <Header />
      </div>

      <div className={`w-full flex items-start justify-center pt-16 ${isScrolled ? 'transition-all duration-500 ease-in-out' : ''}`}>
        <div className='text-center relative flex items-center justify-center'>
          <video
            id="mainVideo"
            src="/videos/senior.mp4"
            autoPlay
            loop
            muted
            className={`opacity-80 ${isScrolled ? 'w-[87.5%] rounded-3xl' : 'w-full'} transition-all duration-500 ease-in-out`}
          />
          <div className="absolute md:top-24 md:right-40 lg:top-36 lg:right-20 Blueroad text-green-900 text-5xl font-extrabold animate-pulse">
            &nbsp;&nbsp;당신의 새로운 시작을 응원합니다&nbsp;&nbsp;
          </div>
          <div className="absolute md:top-28 md:right-48 lg:top-80 lg:right-72">
            <img src={scroll} className="buttonPosition h-10" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div className='h-full w-full flex items-center justify-center mt-24 mb-24'>
          <div className='grid grid-cols-1 xl:grid-cols-2 w-4/5 p-20 gap-x-10 h-full gap-y-10'>
            <Link to="/job">
              <div className="bg-green-500 w-full h-3/5 min-h-40 p-6 flex items-center justify-between rounded-xl shadow-lg hover:cursor-pointer">
                <div className='flex flex-col pr-4'>
                  <h2 className="text-white text-2xl font-bold">일자리검색</h2>
                  <p className="text-white mt-2">누구나 어쩌구 저쩌구 지금 신청하세요.</p>
                </div>
                <div>
                  <div className="bg-green-300 p-4 rounded-full">
                    <img
                      src={job}
                      className="h-12 w-12 text-white"
                    />

                  </div>
                </div>
              </div>
            </Link>
            <Link to="/education">
              <div className="bg-purple-500 w-full h-3/5 min-h-40 p-6 flex items-center justify-between rounded-xl shadow-lg hover:cursor-pointer">
                <div className='flex flex-col'>
                  <h2 className="text-white text-2xl font-bold">교육검색</h2>
                  <p className="text-white mt-2">누구나 어쩌구 저쩌구 지금 신청하세요.</p>
                </div>
                <div>
                  <div className="bg-purple-300 p-4 rounded-full">
                    <img
                      src={edu}
                      className="h-12 w-12 text-white"
                    />

                  </div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="bg-yellow-500 w-full h-3/5 min-h-40 p-6 flex items-center justify-between rounded-xl shadow-lg hover:cursor-pointer">
                <div className='flex flex-col'>
                  <h2 className="text-white text-2xl font-bold">이력서 작성</h2>
                  <p className="text-white mt-2">누구나 어쩌구 저쩌구 지금 작성하세요.</p>
                </div>
                <div>
                  <div className="bg-yellow-300 p-4 rounded-full">
                    <img
                      src={resume}
                      className="h-12 w-12 text-white"
                    />

                  </div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className="bg-orange-500 w-full h-3/5 min-h-40 p-6 flex items-center justify-between rounded-xl shadow-lg hover:cursor-pointer">
                <div className='flex flex-col'>
                  <h2 className="text-white text-2xl font-bold">일자리검색</h2>
                  <p className="text-white mt-2">누구나 어쩌구 저쩌구 지금 신청하세요.</p>
                </div>
                <div>
                  <div className="bg-orange-300 p-4 rounded-full">
                    <img
                      src={job}
                      className="h-12 w-12 text-white"
                    />

                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div className='h-[100vh] w-full bg-blue-300 flex items-center justify-center'>
          <div className='grid grid-cols-2 w-2/3 p-20 gap-y-16 gap-x-32 h-full'>
            <div className='bg-purple-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼1</div>
            <div className='bg-lime-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼2</div>
            <div className='bg-yellow-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼3</div>
            <div className='bg-orange-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼4</div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
