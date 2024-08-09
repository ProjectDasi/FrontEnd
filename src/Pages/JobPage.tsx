import React from 'react'
import FavorJob from '../Components/FavorJob'
import JobList from '../Components/JobList'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function JobPage() {
  return (
    <>
    <Header/>
    <div className='h-screen'>
      job
    <FavorJob/>
    <JobList/>
    </div>
    <Footer/>
    </>
  )
}
