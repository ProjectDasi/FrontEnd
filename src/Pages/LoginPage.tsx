import React from 'react'
import SignInForm from '../Components/Signin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css"
export default function LoginPage() {
  const [type, setType] = useState<"signIn" | "signUp">("signIn");
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/register")
  };


  return (
    <div className="Gamtan">
      
      <div className="container" id="container">
        
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}