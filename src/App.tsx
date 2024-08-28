import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ComPage from './Pages/ComPage';
import LoginPage from './Pages/LoginPage';
import JobPage from './Pages/JobPage';
import EduPage from './Pages/EduPage';
import RecomPage from './Pages/RecomPage';
import RegisterPage from './Pages/RegisterPage';
import FundPage from './Pages/FundPage';
import JobDetailPage from './Pages/JobDetailPage';
import EduDetailPage from './Pages/EduDetailPage';
import InfoPage from './Pages/InfoPage';
import InfoEditPage from './Pages/InfoEditPage';
import ResumePage from './Pages/ResumePage';

function App() {
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center min-w-[1000px]'>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fund" element={<FundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/education" element={<EduPage />} />
        <Route path="/recommendations" element={<RecomPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobdetail" element={<JobDetailPage />} />
        <Route path="/edudetail" element={<EduDetailPage />} />
        <Route path="/mypage" element={<InfoPage />} />
        <Route path="/editmypage" element={<InfoEditPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
