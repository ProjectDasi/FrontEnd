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
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
