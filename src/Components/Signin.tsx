import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

interface SignInFormState {
  email: string;
  password: string;
}

function SignInForm() {
  const [state, setState] = useState<SignInFormState>({
    email: "",
    password: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = state;
    alert(`You are logging in with email: ${email} and password: ${password}`);

    // Clear the form fields
    setState({
      email: "",
      password: ""
    });
  };

  return (
    <div className="form-container sign-in-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <h1 className="h1">로그인</h1>
        
        
        <input
          type="email"
          placeholder="아이디"
          name="email"
          value={state.email}
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
