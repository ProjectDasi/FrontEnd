import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import LoginPage from './Pages/LoginPage';
import JobPage from './Pages/JobPage';
import EduPage from './Pages/EduPage';
import RecomPage from './Pages/RecomPage';
import RegisterPage from './Pages/RegisterPage';
import JobDetailPage from './Pages/JobDetailPage';
import EduDetailPage from './Pages/EduDetailPage';
import InfoPage from './Pages/InfoPage';
import InfoEditPage from './Pages/InfoEditPage';
import ResumePage from './Pages/ResumePage';
import FindIDPage from './Pages/FindIDPage';
import FindPWPage from './Pages/FindPWPage';
import FAQPage from './Pages/FAQPage';
import FundPage from './Pages/FundPage';
import ConfirmRePage from './Pages/ConfirmRePage';

import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center min-w-[1000px]'>
      <RecoilRoot>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/job" element={<JobPage />} />
            <Route path="/education" element={<EduPage />} />
            <Route path="/recommendations" element={<RecomPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/job/:id" element={<JobDetailPage />} />
            <Route path="/education/:id" element={<EduDetailPage />} />
            <Route path="/mypage" element={<InfoPage />} />
            <Route path="/editmypage" element={<InfoEditPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path='/findid' element={<FindIDPage />} />
            <Route path='/findpw' element={<FindPWPage />} />
            <Route path='/faq' element={<FAQPage />} />
            <Route path='/fund' element={<FundPage />} />
            <Route path='/confirm' element={<ConfirmRePage />} />
          </Routes>

        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
