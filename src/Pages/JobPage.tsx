import React from 'react'
import FavorJob from '../Components/FavorJob'
import JobList from '../Components/JobList'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function JobPage() {
  return (
    <div className='h-full w-full'>
    <Header/>
    <div className='w-full flex justify-center'>
      <div className='h-screen w-5/6 bg-lime-300 flex flex-col justify-start'>
        job
        <FavorJob/>
        <JobList/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
