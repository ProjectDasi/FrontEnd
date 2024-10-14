import React from 'react'
import { Link } from 'react-router-dom'
import faq from '../Images/question.png'
import { motion } from 'framer-motion'

export default function FAQbutton() {
  return (
    <Link to='/faq'>
    <motion.div className='bg-[#2a74dc] rounded-full p-4'
    animate={{ scale: [1,1.05,1] }}
    transition={{ repeat: Infinity, repeatDelay: 0.7}}
    >
      <img src={faq} className='h-10'/>
    </motion.div>
    </Link>
  )
}
