import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import scroll from '../Images/scroll4.png'

export default function MainPage() {
  useEffect(() => {
    // 비디오의 재생 속도를 0.5배로 설정
    const video = document.getElementById('mainVideo') as HTMLVideoElement;
    if (video) {
      video.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className='h-full'>
      <Header />
      <div className='w-full flex items-start justify-center my-3'>
        <div className='text-center relative'>
          <video
            id='mainVideo'
            src='/videos/senior.mp4'
            autoPlay
            loop
            muted
            className='opacity-80'
          />
          <div className='absolute md:top-24 md:right-40 lg:top-36 lg:right-20 Blueroad text-green-900 text-5xl font-extrabold animate-pulse'>&nbsp;&nbsp;당신의 새로운 시작을 응원합니다&nbsp;&nbsp;</div>
          <div className='absolute md:top-28 md:right-48 lg:top-80 lg:right-72'><img src={scroll} className='buttonPosition h-10'/></div>
        </div>
      </div>
        <div className='h-[100vh] w-full bg-red-300 relative'>
          <div className='bg-purple-400'></div>
          <div className='bg-lime-400'></div>
          <div className='bg-yellow-400'></div>
          <div className='bg-orange-400'></div>
        </div>
      <Footer />
    </div>
  );
}
