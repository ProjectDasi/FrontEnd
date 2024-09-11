import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import RecomIntro from '../Components/RecomIntro'

export default function RecomPage() {
  return (
  <div className='h-full w-full'>
        <div className='shadow-md'>
      <Header/>
      </div>
      <div className='w-full flex justify-center flex-col items-center'>
        <RecomIntro/>
      </div>
  </div>
  )
}
