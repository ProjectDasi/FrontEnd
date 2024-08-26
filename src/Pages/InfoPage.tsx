import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Myinfo from '../Components/Myinfo'

export default function InfoPage() {
  return (
    <div className='h-full w-full'>
      <div className='shadow-md'>
    <Header/>
    </div>
    <div className='w-full flex justify-center flex-col items-center'>
      <div className='h-auto w-2/3 flex flex-col justify-start items-center my-5'>
        <Myinfo/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
