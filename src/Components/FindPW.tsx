import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/icon7.png'

export default function FindPW() {
  
    return (
      <div className='Gamtan flex flex-col justify-center items-center'>
        <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Dasi</span>
              <img className="h-24 w-auto" src={logo} alt="" />
            </Link>
            <Link to="/">
            <div className='ml-3 Gamtan text-[30px]'>
              <p className='-mb-2'><span className='GamtanBold text-[#52949a]'>다 </span>시</p>
              <p><span className='GamtanBold text-[#52949a]'>시 </span>작해</p>
              <p className='text-[13px] -mt-1 GamtanBold text-[#1d658f]'>Dreaming Age SenIor</p>
            </div>
            </Link>
          </div>
          <div className='text-2xl mt-14 GamtanBold w-[480px] text-center'>비밀번호를 찾고자하는 아이디를 입력해 주세요.</div>
          <input type="text" placeholder="아이디를 입력하세요." className="border-2 border-gray-300 rounded-lg p-2 w-full mt-10 text-xl" />
          <button className='mt-5 text-2xl bg-[#52949a] w-full rounded-lg text-white GamtanBold p-2'>다음</button>
      </div>
    )
  }
