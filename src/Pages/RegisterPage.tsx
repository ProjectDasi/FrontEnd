import React, { useState } from 'react';
import '../styles/register.css';
import data from '../Data/preference.json';
import Header from '../Components/Header';
import MultipleSelectCheckmarks from '../Components/select';
import axios from 'axios';
import DialogRegister from '../Components/DialogRegister';
import FAQbutton from '../Components/FAQbutton';
import { Navigate, useNavigate } from 'react-router-dom';

// 데이터 타입 정의
interface Option {
  ID: number;
  type: string;
  word: string;
  description: string;
}

// 그룹핑 함수 정의
function groupOptions(data: Option[]): Option[][] {
  const groupedOptions: Option[][] = [[], [], [], [], []];

  data.forEach((item, index) => {
    const groupIndex = index % 5; // 0 ~ 4의 인덱스를 생성
    groupedOptions[groupIndex].push(item);
  });

  return groupedOptions;
}

export default function RegisterPage() {
  // JSON 파일로부터 데이터 가져오기
  const groupedOptions = groupOptions(data);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [passwordValid, setPasswordValid] = useState(true);
  const [idValid, setIdValid] = useState(true);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [computerAbility, setComputerAbility] = useState<number | null>(null);
  const [workAbility, setWorkAbility] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    loginId: '',
    password: '',
    birth_year: '',
    birth_month: '',
    birth_day: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if(name === 'password'){
      checkPw(value);
    }
    if(name === 'loginId'){
      checkId(value);
    }
  };

  const generateYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1924; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  };

  const generateMonths = () => {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  };

  const generateDays = () => {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  };

  const handleSelectionChange = (items: number[]) => {
    setSelectedItems(items);
  };

  const handleSubmit = async () => {
    const birthDate = `${formData.birth_year.padStart(4, '0')}${formData.birth_month.padStart(2, '0')}${formData.birth_day.padStart(2, '0')}`;
   

    // 유형과 숫자를 매핑하는 객체
    const typeMapping: { [key: string]: number } = {
      "현실형": 1,
      "탐구형": 2,
      "예술형": 3,
      "사회형": 4,
      "진취형": 5,
      "관습형": 6,
    };

    // 1. ID로 유형을 찾기
    const selectedTypes = selectedItems.map(id => {
      const item = data.find(d => d.ID === id);
      return item ? typeMapping[item.type] : null; // 유형을 숫자로 변환
    }).filter(type => type !== null);

    // 2. 유형의 빈도 계산
    const typeCount = selectedTypes.reduce((count, type) => {
      if (type !== null) {
        count[type] = (count[type] || 0) + 1;
      }
      return count;
    }, {} as { [key: number]: number }); // 숫자로 된 유형을 키로 사용

    // 3. 가장 많이 선택된 유형 2개 찾기
    const sortedTypes = Object.entries(typeCount).sort((a, b) => b[1] - a[1]);
    const topTwoTypes = sortedTypes.slice(0, 2).map(([type]) => parseInt(type));

    const payload = {
      name: formData.name,
      phone: formData.phone, // 포맷팅된 전화번호
      region: formData.region,
      loginId: formData.loginId,
      password: formData.password,
      birth: parseInt(birthDate), // 형식: YYYYMMDD
      preferenceId: topTwoTypes,
      workAbility,
      computerAbility,
    };
    console.log(payload)
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signUp`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('회원가입 성공:', response.data);
      alert("회원가입이 완료되었습니다.")
      navigate('/login');
      // 성공 처리 로직 추가
    } catch (error: any) {
      console.error('회원가입 실패:', error.response ? error.response.data : error.message);
      // 실패 처리 로직 추가
      alert("회원가입에 실패했습니다.")
      navigate('/login');
    }
  };

  const checkPw = (password:string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    setPasswordValid(regex.test(password));
  }
  const checkId = async (loginId:string) => {
    const regex = /^[a-z0-9]{8,}$/;
    setIdValid(regex.test(loginId));
  }

  const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ]
  
  const handleComputerAbilityChange = (ability: number) => {
    setComputerAbility(ability);
  };

  const handleWorkAbilityChange = (ability: boolean) => {
    setWorkAbility(ability);
  };

  return (
    <div className='h-screen w-full'>
      <div className='mb-14 bg-white border-b-slate-300 border'>
        <Header />
      </div>
      <div className='wrapper GamtanBold'>
        <form name='frm' id='frm' method='post' action=''>
          <div>

            <div className='item'>
              <label htmlFor="loginId" className='pr-5' >
                <strong>아이디</strong>
              </label>
              <div className='flex flex-col w-full'>
                <div className='TypoBox'>
                  <input
                    type='text'
                    name='loginId'
                    id='loginId'
                    placeholder='영어 소문자와 숫자를 입력해 주세요.'
                    className='Typo'
                    value={formData.loginId}
                    onChange={handleChange}
                  />
                </div>
                {!idValid && 
                <div className="text-red-800 text-sm mt-1">영어 소문자와 숫자로 8자 이상 입력해 주세요.</div>}
                {idValid && isDuplicate && (
                <div className="text-red-800 text-sm mt-1">
                  이미 사용 중인 아이디입니다.
                </div>
                )}
                {idValid && !isDuplicate && formData.loginId && (
                <div className="text-green-800 text-sm mt-1">
                  사용 가능한 아이디입니다.
                </div>
                )}
              </div>
            </div>

            <div className='item mt-5'>
              <label htmlFor="password" className='pr-5'>
                <strong>비밀번호</strong>
              </label>
              <div className='flex flex-col w-full'>
              <div className='TypoBox'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='영어 대소문자와 숫자를 하나 이상 포함해 주세요.'
                  className='Typo'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
                {!passwordValid && <div className="text-red-800 text-sm mt-1">대소문자와 숫자를 각각 하나 이상 포함해야 합니다.</div>}
            </div>
            </div>

            <div className='item mt-5'>
              <label htmlFor="name" className='pr-5'>
                <strong>이름</strong>
              </label>
              <div className='TypoBox'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='이름을 입력해 주세요.'
                  className='Typo'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='item mt-5'>
              <label htmlFor="birth_date" className='pr-5'>
                <strong>생년월일</strong>
              </label>
              <div className='birthdate-box'>
                <select
                  name='birth_year'
                  id='birth_year'
                  className='Typo birthdate-input'
                  value={formData.birth_year}
                  onChange={handleChange}
                >
                  <option value="" disabled selected hidden>연도</option>
                  {generateYears().map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <select
                  name='birth_month'
                  id='birth_month'
                  className='Typo birthdate-input'
                  value={formData.birth_month}
                  onChange={handleChange}
                >
                  <option value="" disabled selected hidden>월</option>
                  {generateMonths().map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  name='birth_day'
                  id='birth_day'
                  className='Typo birthdate-input'
                  value={formData.birth_day}
                  onChange={handleChange}
                >
                  <option value="" disabled selected hidden>일</option>
                  {generateDays().map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='item mt-5'>
              <label htmlFor="phone" className='pr-5'>
                <strong>휴대폰</strong>
              </label>
              <div className='TypoBox'>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder="'-' 빼고 숫자만 입력해 주세요."
                  className='Typo'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='item mt-5'>
              <label htmlFor="region" className='pr-3'>
                <strong>구/군 선택</strong>
              </label>
              <div className='TypoBox'>
                <select
                  name='region'
                  id='region'
                  className='Typo'
                  value={formData.region}
                  onChange={handleChange}
                >
                  <option value="" selected disabled hidden>지역 선택</option>
                  <option value="금정구">금정구</option>
                  <option value="기장군">기장군</option>
                  <option value="동래구">동래구</option>
                  <option value="사상구">사상구</option>
                  <option value="수영구">수영구</option>
                  <option value="중구">중구</option>
                  <option value="강서구">강서구</option>
                  <option value="남구">남구</option>
                  <option value="부산진구">부산진구</option>
                  <option value="사하구">사하구</option>
                  <option value="연제구">연제구</option>
                  <option value="해운대구">해운대구</option>
                  <option value="동구">동구</option>
                  <option value="북구">북구</option>
                  <option value="서구">서구</option>
                  <option value="영도구">영도구</option>
                </select>
              </div>
            </div>
          <div className='item mt-5'>
            <label htmlFor="favor" className='pr-5 text-center'>
              <strong>선호도<br/>검사</strong>
            </label>            
            <div className='TypoBox px-4'>
              <DialogRegister onSelectionChange={handleSelectionChange}/>
            </div>
          </div>

          <div className='item mt-5'>
            <label htmlFor="computer" className='pr-5 text-center'>
              <strong>컴퓨터<br/>활용 능력</strong>
            </label>            
            <div className="TypoBox w-full">          
            <div className="flex items-center py-3 pl-3">
            <input
                  type="radio"
                  name="computerAbility"
                  onChange={() => handleComputerAbilityChange(1)}
                  checked={computerAbility === 1}
                  className="custom-input border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              <label className="ml-3 block text-lg font-medium leading-6 text-gray-900">
                컴퓨터를 이용한 문서작성, 은행업무에 어려움이 없다.
              </label>
              </div>
              <div className="flex items-center pl-3">
              <input
                  type="radio"
                  name="computerAbility"
                  onChange={() => handleComputerAbilityChange(2)}
                  checked={computerAbility === 2}
                  className="custom-input border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              <label className="ml-3 block text-lg font-medium leading-6 text-gray-900">
                유튜브 시청, 웹 검색에 어려움이 없다.
              </label>
              </div>
              <div className="flex items-center py-3 pl-3">
              <input
                  type="radio"
                  name="computerAbility"
                  onChange={() => handleComputerAbilityChange(3)}
                  checked={computerAbility === 3}
                  className="custom-input border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              <label className="ml-3 block text-lg font-medium leading-6 text-gray-900">
                컴퓨터를 이용하는데 타인의 도움이 필요하다.
              </label>
              </div>   
            </div>
          </div>

          <div className='item mt-5'>
            <label htmlFor="physical" className='pr-5 text-center'>
              <strong>신체<br/>활동 정도</strong>
            </label>            
            <div className="TypoBox w-full">          
            <div className="flex items-center py-3 pl-3">
            <input
                  type="radio"
                  name="workAbility"
                  onChange={() => handleWorkAbilityChange(true)}
                  checked={workAbility === true}
                  className="custom-input border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              <label className="ml-3 block text-lg font-medium leading-6 text-gray-900">
                등산, 달리기, 헬스 등 고강도 운동을 즐겨한다.
              </label>
              </div>
              <div className="flex items-center pb-3 pl-3">
              <input
                  type="radio"
                  name="workAbility"
                  onChange={() => handleWorkAbilityChange(false)}
                  checked={workAbility === false}
                  className="custom-input border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              <label className="ml-3 block text-lg font-medium leading-6 text-gray-900">
                가벼운 산책, 요가, 무리하지 않는 운동을 즐겨한다.
              </label>
              </div>    
            </div>
          </div>
        </div>
          <div className='flex flex-col justify-center items-end'>
          <button type='button' id='btn_submit' className='Btn' onClick={handleSubmit}>회원가입 완료</button>
          </div>
        </form>
      </div>
      <div className='quickbt'>
        <FAQbutton />
      </div>
    </div>
  );
}
