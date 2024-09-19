import React from 'react'
import { Link } from 'react-router-dom'
import faq from '../Images/information.png'

export default function FAQbutton() {
  return (
    <Link to='/'>
    <div className='bg-[#2A9BDC] rounded-full p-3'>
      <img src={faq} className='h-10'/>
    </div>
    </Link>
  )
}
