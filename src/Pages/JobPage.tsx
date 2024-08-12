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
    <div className='w-full flex justify-center'>
      <div className='h-screen w-5/6 flex flex-col justify-start'>
        <FavorJob/>
        <JobList/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
