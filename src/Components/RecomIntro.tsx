import React from 'react'
import bg from '../Images/IntroBG.jpg'

export default function RecomIntro() {
  return (
    <div className='w-full Gamtan overflow-auto'>
        {/* 배경 최하위 컴포넌트 */}
        <img src={bg} className='brightness-50 absolute min-w-[100vw]'/>
            {/* 글자 최상위 컴포넌트 지정 */}
            <div className='relative'>
                <div className='text-white GamtanBold text-5xl mt-24 ml-14'>개인 맞춤 일자리 및 교육 추천 서비스</div>
            </div>
    </div>
  )
}
