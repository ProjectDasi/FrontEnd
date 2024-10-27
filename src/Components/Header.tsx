import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react';
import logo from '../Images/icon7.png'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../recoil/atoms';
import axios from 'axios';
import icon from '../Images/user.png'
import '../styles/header.css'

interface Region {
  id: number;
  subregion: string;
}

interface Work {
  id: number;
  source: string;
  company: string;
  title: string;
  signupDate: string;
  dueDate: string;
  regionName: string;
  preferenceType: string;
  region: Region;
}

interface Item {
  id: number;
  work: Work;
  savedTime: string;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  //const isLoggedIn = useRecoilValue(isLoggedInState);
  const isLoggedIn = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'job' | 'education'>('job');
  const [items, setItems] = useState<Item[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = (event: React.MouseEvent) => {

    setIsOpen(!isOpen);

  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const fetchItems = async (type: 'job' | 'education') => {
    // 예시로 가상의 API 요청
    try {
      let response;
      const id = localStorage.getItem('id');
      if (type === 'job') {
        response = await axios.get(`http://localhost:8080/like/work/${id}`);
      } else {
        response = await axios.get(`http://localhost:8080/like/learning/${id}`);
      }
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(()=>{
    fetchItems(activeTab);
  },[activeTab])

  
  const handleTabClick = (tab: 'job' | 'education') => {
    setActiveTab(tab);
    fetchItems(tab); // 탭 변경 시 데이터 가져오기
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
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
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 GamtanBold font-bold">
          <Link to="/job" className="nav-item text-4xl leading-6 text-gray-900">일자리</Link>
          <Link to="/education" className="nav-item text-4xl leading-6 text-gray-900">교육</Link>
          <Link to="/recommendations" className="nav-item text-4xl leading-6 text-gray-900">AI매칭</Link>
          {/* <Link to="/compass" className="nav-item text-4xl leading-6 text-gray-900">이정표</Link> */}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          {isLoggedIn ?
            (
              <>
                <button onClick={togglePopup} className="icon-button leading-6 mr-4">
                  <span role="img" aria-label="icon">📁</span> {/* 여기에 아이콘을 추가 */}
                </button>
                <Link to="/mypage"
                  className="text-2xl leading-6 text-[#6C72C6] GamtanBold mr-4 border-r-2 border-[#A7ABDD] pr-4 hover:text-[#A7ABDD]"
                >
                  내 정보
                  {/* <img className="h-8 w-8 rounded-full mr-4" src={icon} alt="User image" /> */}
                </Link>

                <button onClick={handleLogout} className="text-2xl leading-6 text-[#6C72C6] GamtanBold hover:text-[#A7ABDD]">로그아웃</button>
              </>
            )
            :
            (<Link to="/login" className="text-2xl font-bold leading-6 text-[#6C72C6] GamtanBold hover:text-[#A7ABDD]">로그인 <span aria-hidden="true">&rarr;</span></Link>)
          }

        </div>
        {isOpen && (
          <div ref={popupRef} className="popup-layer">
            <h3 className="popup-title">내 저장</h3>
            <div className="popup-tabs">
              <button
                onClick={() => handleTabClick('job')}
                className={activeTab === 'job' ? 'active-tab' : ''}
              >
                관심일자리
              </button>
              <button
                onClick={() => handleTabClick('education')}
                className={activeTab === 'education' ? 'active-tab' : ''}
              >
                관심교육
              </button>
            </div>
            <div className="popup-content">
              {items.length > 0 ? (
                items.map((item) => <div key={item.id} className="job-card">
                {/* savedTime 표시 */}
                <p className="saved-time">{formatDate(item.savedTime)}</p>
      
                {/* Job Details */}
                <div className="job-details">
                  <p className="company-name">({item.work.company})</p>
                  <h3 className="job-title">{item.work.title}</h3>
                  <p className="job-meta">
                    {item.work.regionName} · D-{Math.floor((new Date(item.work.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                  </p>
                </div>
      
                {/* Apply Button */}
                <a href={`/job/${item.work.id}`} className="apply-button">입사지원</a>
              </div>)
              ) : (
                <p>{activeTab === 'job' ? '관심 등록한 일자리가 없습니다.' : '관심 등록한 교육이 없습니다.'}</p>
              )}
              
            </div>
            <div className='flex justify-center items-center'>
              {activeTab === 'job'?<a href="/job" className="mt-5">스크랩하러 가기 &gt;</a>:<a href="/education" className="mt-5">스크랩하러 가기 &gt;</a>}
            </div>
          </div>
        )}
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
                  <Link to="/recommendations" className="nav-item -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">AI매칭</Link>
                  {/* <Link to="/compass" className="nav-item -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">이정표</Link> */}
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