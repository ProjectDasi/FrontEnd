import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import RecomIntro from '../Components/RecomIntro'
import Recommed from '../Components/Recommed'
import FAQbutton from '../Components/FAQbutton'
import '../styles/button.css'

export default function RecomPage() {
  const [recommendStart, setRecommendStart] = useState(false);
  // 컴포넌트 변경을 위함
  
  const handleStartClick = () => {
    setRecommendStart(true);
  }

  return (
  <div className='h-full w-full'>
        <div className='shadow-md'>
      <Header/>
      </div>
      <div className='w-full flex justify-center flex-col items-center'>
        {recommendStart ? (
          <Recommed/>
        ) : (
          <RecomIntro onStartClick={handleStartClick}/>
        )}
      </div>
      <div className='quickbt'>
        <FAQbutton />
      </div>
  </div>
  )
}
