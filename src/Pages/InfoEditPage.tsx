import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Editmyinfo from '../Components/Editmyinfo'

export default function InfoEditPage() {
  return (
    <div className='h-screen w-full'>
      <div className='shadow-md'>
    <Header/>
    </div>
    <div className='w-full flex justify-center flex-col items-center'>
      <div className='h-auto  min-h-[77vh] w-2/3 flex flex-col justify-start items-center my-5'>
        <Editmyinfo/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
