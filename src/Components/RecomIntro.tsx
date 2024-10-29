import React from 'react'
import '../styles/text.css';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { isLoggedInState } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';

interface RecomIntroProps {
  onStartClick: () => void;
}
export default function RecomIntro({ onStartClick }: RecomIntroProps) {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return (
    <div className="w-full h-screen Gamtan bg-[url('./assets/images/IntroBG.jpg')] bg-cover">
      <div className='bg-black bg-opacity-60 h-screen'>
            {/* 글자 최상위 컴포넌트 지정 */}
            <div className='content'>
              <div className='text-white GamtanBold text-6xl pt-24 ml-14 letter'>장·노년층을 위한</div>
            </div>
            <div className='content'>
              <div className='text-white GamtanBold text-6xl mt-2 ml-14 letter'>맞춤형 일자리와 교육 추천 서비스</div>
            </div>
            <Fade damping={0.1}>
                <div className='text-white Gamtan text-3xl mt-14 ml-14'><span className='text-[34px] GamtanBold'>이력서</span>와 <span className='text-[34px] GamtanBold'>성향 검사</span>를 바탕으로 당신에게<br/>가장 적합한 일자리와 교육 과정을 제공합니다. <br/>장·노년층의 경제적 독립을 돕기 위해 설계되었으며 일상 속에서<br/>적절한 일자리를 찾는 과정을 더욱 쉽고 효율적으로 만들어줍니다.</div>
            </Fade>
                {isLoggedIn ? (
                <div className='flex mt-40 ml-[410px]'>
                  <Link to='/resume'>
                  <button type="button" className='rounded-3xl py-2 px-5 text-white GamtanBold text-2xl border-4 border-white border-solid flex items-center hover:bg-white hover:bg-opacity-20 transition duration-200'>이력서 등록하기</button></Link>
  
                  <button type="button" className='ml-10 rounded-3xl py-2 px-5 text-white GamtanBold text-2xl border-4 border-white border-solid flex items-center hover:bg-white hover:bg-opacity-20 transition duration-200'
                  onClick={onStartClick}>지금 시작하기<svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                </div>                  
                ):(
                  <div className='mt-40 ml-[410px]'>
                    <span className='text-yellow-300 text-3xl GamtanBold'>로그인 후 AI매칭 서비스를 사용할 수 있습니다.</span>
                  <div className='flex ml-24 mt-5'>
                  <Link to='/login'>
                  <button type="button" className='rounded-3xl py-2 px-5 text-white GamtanBold text-2xl border-4 border-white border-solid flex items-center hover:bg-white hover:bg-opacity-20 transition duration-200'>
                    로그인 하기</button></Link>
                  <Link to='/register'>
                  <button type="button" className='ml-7 rounded-3xl py-2 px-5 text-white GamtanBold text-2xl border-4 border-white border-solid flex items-center hover:bg-white hover:bg-opacity-20 transition duration-200'>
                    회원가입 하기</button></Link>
                </div>
                  </div>
                )}
           
            </div>
    </div>
  )
}
