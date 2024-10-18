import React from 'react'
import FavorJob from '../Components/FavorJob'
import JobList from '../Components/JobList'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FAQbutton from '../Components/FAQbutton'
import '../styles/text.css';

export default function JobPage() {
  return (
    <div className='h-full w-full'>
      <div className='shadow-md'>
    <Header/>
    </div>
    <div className='w-full flex justify-center flex-col items-center'>
    <div className='pt-4 w-[95%] text-right text-2xl text-gray-500 GamtanBold'>
      <div className='content'>
      <p className='pb-1 letter text-[#7DB0B5]'>직무 선호도와 지역정보를 이용한</p>
      </div>
      <div className='content'>
      <p className='letter text-[#1C919C]'><span className='text-3xl'>장, 노년층</span> 개인맞춤</p>
      </div>
      {/* <p>추천 교육과정</p> */}
      </div>
      <div className='h-full w-5/6 flex flex-col justify-start mb-5'>
        <FavorJob/>
      </div>
      <div className=' bg-[#9bdce243] w-full flex justify-center items-center'>
      <div className='h-full w-5/6 flex flex-col items-center mb-10'>
        <JobList/>
      </div>
      </div>
    </div>
    <div className='quickbt'>
        <FAQbutton />
      </div>
    <Footer/>
    </div>
  )
}
