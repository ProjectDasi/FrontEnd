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
    <div className="App">
      
      <div className="container" id="container">
        
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            
            <div className="overlay-panel overlay-right">
              <h1 className='h1'>Hello, Friend!</h1>
              <p className='p'>Enter your personal details and start journey with us</p>
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