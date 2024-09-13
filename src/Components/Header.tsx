import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import logo from '../Images/icon7.png'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../recoil/atoms';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  //const isLoggedIn = useRecoilValue(isLoggedInState);
  const isLoggedIn = localStorage.getItem("token");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  };
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between p-3 mt-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dasi</span>
            <img className="h-20 w-auto" src={logo} alt="" />
          </Link>
          <Link to="/">
          <div className='ml-3 Gamtan text-[25px]'>
            <p className='-mb-2'><span className='GamtanBold text-[#52949a]'>다 </span>시</p>
            <p><span className='GamtanBold text-[#52949a]'>시 </span>작해</p>
            <p className='text-[10px] -mt-1 GamtanBold text-[#1d658f]'>Dreaming Age SenIor</p>
          </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 GamtanBold font-bold">
          <Link to="/job" className="nav-item text-4xl leading-6 text-gray-900">일자리</Link>
          <Link to="/education" className="nav-item text-4xl leading-6 text-gray-900">교육</Link>
          <Link to="/recommendations" className="nav-item text-4xl leading-6 text-gray-900">맞춤</Link>
          <Link to="/compass" className="nav-item text-4xl leading-6 text-gray-900">이정표</Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          {isLoggedIn ?
            (
              <>
                <Link to="/mypage" className="text-2xl font-bold leading-6 text-gray-900 GamtanBold">나의 정보</Link>
                <button onClick={handleLogout} className="text-2xl font-bold leading-6 text-gray-900 GamtanBold">로그아웃 <span aria-hidden="true">&rarr;</span></button>
              </>
            )
            :
            (<Link to="/login" className="text-2xl font-bold leading-6 text-gray-900 GamtanBold">로그인 <span aria-hidden="true">&rarr;</span></Link>)
          }

        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[200]" role="dialog" aria-modal="true">
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-16 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 GamtanBold">
                  <Link to="/job" className="nav-item -mx-3 rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">일자리</Link>
                  <Link to="/education" className="nav-item -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">교육</Link>
                  <Link to="/recommendations" className="nav-item -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">맞춤</Link>
                  <Link to="/compass" className="nav-item -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">이정표</Link>
                </div>
                <div className="py-6">
                  {isLoggedIn ?
                    (<Link to="/mypage" className="nav-item -mx-3 block rounded-lg px-3 py-2.5 text-2xl font-semibold leading-7 text-gray-900 GamtanBold hover:bg-gray-50">나의 정보</Link>)
                    :
                    (<Link to="/login" className="nav-item -mx-3 block rounded-lg px-3 py-2.5 text-2xl font-semibold leading-7 text-gray-900 GamtanBold hover:bg-gray-50">로그인</Link>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;