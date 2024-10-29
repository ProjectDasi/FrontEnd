import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FAQbutton from '../Components/FAQbutton'
import Fund from '../Components/Fund'

export default function FundPage() {
  return (
<div className='h-full w-full'>
    <div className='shadow-md'>
    <Header/>
    </div>
    <div className='h-auto w-full flex flex-col justify-start items-center my-5'>
      <Fund />
    </div>
    <div className='quickbt'>
    <FAQbutton />
    </div>
  <Footer/>
</div>
  )
}
