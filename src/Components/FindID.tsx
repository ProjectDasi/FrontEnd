import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Images/icon7.png';

export default function FindID() {
  const [phone, setPhone] = useState(''); 
  const [loginId, setLoginId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null); 

    try {
      const response = await axios.post(process.env.REACT_APP_API_URL+'/find/id', { phone });
      const { loginId } = response.data;

      if (loginId) {
        setLoginId(loginId);
      } else {
        setError('아이디를 찾을 수 없습니다.');
      }
    } catch (err) {
      setError('서버 요청 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    if (loginId) {
      navigate('/login');
    }
  };

  return (
    <div className='Gamtan flex flex-col justify-center items-center'>
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Dasi</span>
          <img className="h-24 w-auto" src={logo} alt="Logo" />
        </Link>
        <Link to="/">
          <div className='ml-3 Gamtan text-[30px]'>
            <p className='-mb-2'><span className='GamtanBold text-[#52949a]'>다 </span>시</p>
            <p><span className='GamtanBold text-[#52949a]'>시 </span>작해</p>
            <p className='text-[13px] -mt-1 GamtanBold text-[#1d658f]'>Dreaming Age SenIor</p>
          </div>
        </Link>
      </div>

      <div className='text-2xl mt-14 GamtanBold w-[450px] text-center'>
        회원정보에 등록한 휴대전화로 인증하기
      </div>

      <input
        type="text"
        placeholder="'-'를 제외한 번호만 입력해 주세요."
        className="border-2 border-gray-300 rounded-lg p-2 w-full mt-10 text-xl"
        value={phone}
        onChange={handlePhoneChange}
        disabled={!!loginId}
      />

      {loginId && (
        <div className="mt-5 text-2xl text-[#52949a] GamtanBold">
          찾으신 아이디는 <span className='text-red-500'>{loginId}</span> 입니다.
        </div>
      )}

      {error && (
        <div className="mt-5 text-2xl text-red-500 GamtanBold">
          {error}
        </div>
      )}

      <button
        onClick={loginId ? handleLoginRedirect : handleSubmit}
        className='mt-5 text-2xl bg-[#52949a] w-full rounded-lg text-white GamtanBold p-2'
        disabled={loading}
      >
        {loading ? '확인 중...' : loginId ? '로그인' : '다음'}
      </button>
    </div>
  );
}
