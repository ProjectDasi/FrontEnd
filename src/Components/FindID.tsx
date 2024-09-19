import { Link } from 'react-router-dom'
import logo from '../Images/icon7.png'

export default function FindID() {
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
        <div className='text-2xl mt-14 GamtanBold w-[450px] text-center'>회원정보에 등록한 휴대전화로 인증하기</div>
        <input type="text" placeholder="'-'를 제외한 번호만 입력해 주세요." className="border-2 border-gray-300 rounded-lg p-2 w-full mt-10 text-xl" />
        <button className='mt-5 text-2xl bg-[#52949a] w-full rounded-lg text-white GamtanBold p-2'>다음</button>
    </div>
  )
}
