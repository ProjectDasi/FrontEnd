import React from 'react'
import img1 from '../Images/001.jpg'
import img2 from '../Images/002.jpg'
import img3 from '../Images/003.jpg'
import img4 from '../Images/4.png'
import img5 from '../Images/5.png'
import img6 from '../Images/006.jpg'
import img7 from '../Images/007.jpg'
import img8 from '../Images/8.png'
import FundData from '../Data/FundData.json'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from'react-router-dom';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
export default function Fund() {
    const navigate = useNavigate();
  return (
    <div className='w-[85%] my-10 Gamtan'>
      <div className='text-left GamtanBold text-4xl mb-10'>지원금 제도 소개</div>
      <div className='grid lg:grid-cols-4 gap-5 sm:grid-cols-2'>
        {FundData.map((item, index) => (
          <motion.div
            key={item.id}
            className='border-2 rounded-lg cursor-pointer w-full h-[330px] p-2 flex flex-col justify-start items-center'
            layoutId={`fund${index + 1}`}
            whileHover={{ scale: 1.08 }}
            onClick={() => window.open(item.link, '_blank')}
          > 
            <img src={images[index]} className='w-30 h-4/5 rounded-t-lg'></img>
            <div className='GamtanBold text-xl text-center pt-3'>{item.title}</div>
          </motion.div>
        ))}
      </div>
      </div>
  )
}
