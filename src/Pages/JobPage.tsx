import React from 'react'
import FavorJob from '../Components/FavorJob'
import JobList from '../Components/JobList'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function JobPage() {
  return (
    <div className='h-full w-full'>
      <div className='shadow-md'>
    <Header/>
    </div>
    <div className='w-full flex justify-center flex-col items-center'>
      <div className='h-full w-5/6 flex flex-col justify-start mb-5'>
        <FavorJob/>
      </div>
      <div className=' bg-green-50 w-full flex justify-center items-center'>
      <div className='h-full w-5/6 flex flex-col items-center mb-10'>
        <JobList/>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
