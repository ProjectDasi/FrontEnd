import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import logo from '../Images/icon7.png'

export default function FindPW() {
  const [userId, setUserId] = useState(''); 
  // const [code, setCode] = useState('');//서버의 코드
  const [inputCode, setInputCode] = useState('');//사용자가 입력한 코드
  const [codeSent, setCodeSent] = useState(false);//코드발송 여부
  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
  };

  const handleSendCode = async () => {
    try{
      const response = await axios.post(process.env.REACT_APP_API_URL+`/find-password/send-code`, {userId});
      console.log(response.data);//발송여부 응답
      setCodeSent(true);
    } catch(err) {
      console.error("인증번호 요청 중 요류가 발생했습니다.", err);
      setCodeSent(false);
    }
  }

    const handleVerifyCode = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_API_URL + `/find-password/verify-code`, { verificationCode: inputCode });
        if(response.status === 200){ //인증성공
          navigate('/'); //비밀번호 리셋페이지 만들기
        } else {
          alert("인증번호가 올바르지 않습니다.")
        }
      } catch (err) {
        console.error("인증번호 오류발생",err);
        alert("인증번호 확인 중 오류가 발생했습니다.")
      }
    }

  
    return (
      <div className='Gamtan flex flex-col justify-center items-center'>
        <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Dasi</span>
              <img className="h-24 w-auto" src={logo} alt="" />
            </Link>
            <Link to="/">
            <div className='ml-3 Gamtan text-[30px]'>
              <p className='-mb-2'><span className='GamtanBold text-[#52949a]'>다 </span>시</p>
              <p><span className='GamtanBold text-[#52949a]'>시 </span>작해</p>
              <p className='text-[13px] -mt-1 GamtanBold text-[#1d658f]'>Dreaming Age SenIor</p>
            </div>
            </Link>
          </div>
          <div className='text-2xl mt-14 GamtanBold w-[480px] text-center'>
            {codeSent ? '휴대전화로 전송된 인증번호를 입력해 주세요.' : '비밀번호를 찾고자하는 아이디를 입력해 주세요.'}
          </div>
          {/* <input type="text" placeholder="아이디를 입력하세요." className="border-2 border-gray-300 rounded-lg p-2 w-full mt-10 text-xl" 
          value={userId}
          onChange={handleIdChange}
          disabled={!!codeSent}
          /> */}
            <input
              type="text"
              placeholder={codeSent ? "인증번호를 입력하세요." : "아이디를 입력하세요."}
              className="border-2 border-gray-300 rounded-lg p-2 text-xl w-full mt-10"
              value={codeSent ? inputCode : userId}
              onChange={codeSent ? handleCodeChange : handleIdChange}
              // disabled={!codeSent ? false : true} // 인증번호 입력 시에는 아이디 입력 비활성화
            />
          <button className='mt-5 text-2xl bg-[#52949a] w-full rounded-lg text-white GamtanBold p-2'
          onClick={codeSent ? handleVerifyCode : handleSendCode}>
            {codeSent ? '확인':'다음'}
            </button>
      </div>
    )
  }