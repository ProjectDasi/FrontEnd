import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FavorEdu from '../Components/FavorEdu'
import EduList from '../Components/EduList'

export default function EduPage() {
  return (
<div className='h-full w-full'>
      <div className='shadow-md'>
    <Header/>
    </div>
    <div className='w-full flex justify-center flex-col items-center'>
      <div className='h-full w-5/6 flex flex-col justify-start mb-5'>
        <FavorEdu/>
      </div>
      <div className=' bg-blue-50 w-full flex justify-center items-center'>
      <div className='h-full w-5/6 flex flex-col items-center mb-10'>
        <EduList/>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
