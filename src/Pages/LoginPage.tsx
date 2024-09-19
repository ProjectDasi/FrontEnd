import React from 'react'
import SignInForm from '../Components/Signin';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/login.css"
import Header from '../Components/Header';
import bg from '../Images/6583.jpg'
import Footer from '../Components/Footer';

export default function LoginPage() {
  const [type, setType] = useState<"signIn" | "signUp">("signIn");
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/register")
  };


  return (
    <div className="Gamtan h-full w-full">
      {/* <div className='shadow-md'>
    <Header/>
    </div> */}
    <div className='w-full h-[88vh] flex justify-center flex-col items-center'>
      <div className="container -mb-10" id="container">
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            
            <div className="overlay-panel overlay-right">
              <h1 className='h1'>다시 꿈꾸는 나이</h1>
              <p className='p'>당신의 새로운 시작을 저희가 함께 합니다.</p>
              <button
                className="ghost button"
                id="signUp"
                onClick={() => handleOnClick()}
              >
                회원가입
              </button>
              <div className="flex mt-3">
            <Link to="/findpw" className="a"><span className='text-white'>비밀번호 찾기</span></Link>
            <p className="between"> / </p>
            <Link to="/findid" className="a"><span className='text-white'>아이디 찾기</span></Link>
        </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-36 mt-20 opacity-70">
      <img src={bg}/>
      </div>
      </div>
    </div>
  );
}