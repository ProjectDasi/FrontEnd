import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ComPage from './Pages/ComPage';
import LoginPage from './Pages/LoginPage';
import JobPage from './Pages/JobPage';
import EduPage from './Pages/EduPage';
import RecomPage from './Pages/RecomPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
    <BrowserRouter>
    <Header />
    <div className='h-full w-full'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/community" element={<ComPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/job" element={<JobPage />} />
        <Route path="/education" element={<EduPage />} />
        <Route path="/recommendations" element={<RecomPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
