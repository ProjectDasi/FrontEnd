import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import axios from "axios";

interface SignInFormState {
  loginId: string;
  password: string;
}

function SignInForm() {
  const [state, setState] = useState<SignInFormState>({
    loginId: "",
    password: ""
  });
  const [error, setError] = useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { loginId, password } = state;

    try {
      const response = await axios.post("https://8f9f-115-22-210-176.ngrok-free.app/login", {
        loginId,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const token = response.headers['Authorization']; // API 응답에 토큰이 포함되어 있다고 가정합니다.

      // 토큰을 localStorage 또는 sessionStorage에 저장합니다.
      localStorage.setItem("token", token);

      // 폼 필드를 초기화합니다.
      setState({
        loginId: "",
        password: ""
      });

      // 로그인 성공 메시지 또는 UI 업데이트
      alert("로그인 성공!");
    } catch (error) {
      setError("로그인에 실패했습니다. 자격 증명을 확인하고 다시 시도하세요.");
    }
  }

  return (
    <div className="form-container sign-in-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <h1 className="h1">로그인</h1>
        
        
        <input
          type="text"
          placeholder="아이디"
          name="loginId"
          value={state.loginId}
          onChange={handleChange}
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={state.password}
          onChange={handleChange}
          className="input"
        />
        <div className="flex">
            <a className="a" href="#">비밀번호 찾기</a>
            <p className="between"> / </p>
            <a className="a" href="#">아이디 찾기</a>
        </div>

        <span>소셜 계정 로그인</span>
        <div className="social-container">
          <a href="#" className="social a">
            <FaFacebookF />
          </a>
          <a href="#" className="social a">
            <FaGooglePlusG />
          </a>
          <a href="#" className="social a">
            <RiKakaoTalkFill />
          </a>
        </div>
        
        <button className="button" type="submit">로그인</button>
      </form>
    </div>
  );
}

export default SignInForm;
