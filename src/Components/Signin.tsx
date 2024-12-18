import React, { useState } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../recoil/atoms';


interface SignInFormState {
  loginId: string;
  password: string;
}

function SignInForm() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();
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
      const response = await axios.post(process.env.REACT_APP_API_URL+"/login", {
        loginId,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const token = response.headers['authorization'];

      // 토큰을 localStorage에 저장
      localStorage.setItem("token", token);
      localStorage.setItem("id",response.data.id)
      setIsLoggedIn(true);
      // 폼 필드를 초기화
      setState({
        loginId: "",
        password: ""
      });

      // 로그인 성공 메시지 또는 UI 업데이트
      console.log("로그인 정보",response.data);
      alert("로그인 성공!");
      navigate("/");
    } catch (error) {
      setError("로그인에 실패했습니다. 자격 증명을 확인하고 다시 시도하세요.");
    }
  }

  return (
    <div className="form-container sign-in-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <Link to='/'>
        <h1 className="h1"><span className="text-4xl text-[#52949a] GamtanBold tracking-[4px]">다시 시작해</span></h1>
        </Link>
        
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

        <span className="mt-3 text-[#52949a] GamtanBold">소셜 계정 로그인</span>
        <div className="social-container">
          <a href="#" className="social a p-[10px]">
          <SiNaver />
          </a>
          <a href="#" className="social a">
            <RiKakaoTalkFill />
          </a>
        </div>
        
        <button className="button GamtanBold" type="submit"><span className="text-lg">로그인</span></button>
        
      </form>

    </div>
  );
}

export default SignInForm;
