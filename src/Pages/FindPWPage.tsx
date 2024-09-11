import React from 'react'
import Header from '../Components/Header'
import FindPW from '../Components/FindPW'

export default function FindPWPage() {
  return (
    <div className='h-screen w-full'>
    <div className='shadow-md'>
    <Header/>
    </div>
    <div className='w-full flex justify-center flex-col items-center'>
        <div className='h-auto  min-h-[77vh] w-2/3 flex flex-col justify-start items-center my-5'>
        <FindPW/>
        </div>
    </div>
  </div>
  )
}
