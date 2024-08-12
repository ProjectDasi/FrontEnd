import Header from '../Components/Header';
import Footer from '../Components/Footer';
import scroll from '../Images/scroll4.png'
import React, { useState, useEffect, useRef } from 'react';

const sections = ['section1', 'section2', 'section3'];
export default function MainPage() {
  const [currentSection, setCurrentSection] = useState(0);
  // const [isScrolling, setIsScrolling] = useState(false);
  // const scrollTimeoutRef = useRef<number | null>(null);

  // const handleScroll = (event: React.WheelEvent) => {
  //   if (event.deltaY > 0) {
  //     // 스크롤을 내릴 때
  //     setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
  //   } else {
  //     // 스크롤을 올릴 때
  //     setCurrentSection((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  // useEffect(() => {
  //   document.getElementById(sections[currentSection])?.scrollIntoView({ behavior: 'smooth' });

  //   scrollTimeoutRef.current = window.setTimeout(() => {
  //     setIsScrolling(false);
  //   }, 1000); // 1초 동안 스크롤 불가

  //   return () => {
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }
  //   };
  // }, [currentSection]);
  useEffect(() => {
    // 비디오의 재생 속도를 0.7배로 설정
    const video = document.getElementById('mainVideo') as HTMLVideoElement;
    if (video) {
      video.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className='h-screen w-full'>
      <div className='fixed top-0 left-0 right-0 bg-white z-50'>
      <Header />
      </div>
      <div className='w-full flex items-start justify-center pt-16'>
        <div className='text-center relative'>

          <video
            id="mainVideo"
            src="/videos/senior.mp4"
            autoPlay
            loop
            muted
            className="opacity-80"
          />
          <div className="absolute md:top-24 md:right-40 lg:top-36 lg:right-20 Blueroad text-green-900 text-5xl font-extrabold animate-pulse">
            &nbsp;&nbsp;당신의 새로운 시작을 응원합니다&nbsp;&nbsp;
          </div>
          <div className="absolute md:top-28 md:right-48 lg:top-80 lg:right-72">
            <img src={scroll} className="buttonPosition h-10" />
          </div>
        </div>
      </div>
        <div  className='h-[86vh] w-full flex items-center justify-center'>
          <div className='grid grid-cols-2 w-2/3 p-20 gap-y-16 gap-x-32 h-full'>
            <div className='bg-purple-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼1</div>
            <div className='bg-lime-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼2
              &nbsp;sdsd
            </div>
            <div className='bg-yellow-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼3</div>
            <div className='bg-orange-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼4</div>
          </div>
        </div>
        <div  className='h-[100vh] w-full bg-blue-300 flex items-center justify-center'>
          <div className='grid grid-cols-2 w-2/3 p-20 gap-y-16 gap-x-32 h-full'>
            <div className='bg-purple-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼1</div>
            <div className='bg-lime-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼2</div>
            <div className='bg-yellow-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼3</div>
            <div className='bg-orange-400 h-44 w-96 flex items-center justify-center rounded-2xl'>버튼4</div>
          </div>
        </div>
        
        <Footer />

    </div>
  );
}
