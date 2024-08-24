import React from 'react'
import EduDetail from '../Components/EduDetail'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function EduDetailPage() {
  return (
    <div className='h-full w-full'>
        <div className='shadow-md'>
        <Header/>
        </div>
        <div className='h-auto w-full flex flex-col justify-start items-center my-5'>
        <EduDetail/>
        </div>
    <Footer/>
    </div>
  )
}
