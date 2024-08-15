import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import JobDetail from '../Components/JobDetail'

export default function JobDetailPage() {
  return (
    <div className='h-full w-full'>
        <div className='shadow-md'>
        <Header/>
        </div>
        <div className='h-full w-full flex flex-col justify-start items-center mt-5'>
        <JobDetail/>
        </div>
    <Footer/>
    </div>
  )
}
