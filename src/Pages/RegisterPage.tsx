import React, { useState } from 'react';
import '../styles/register.css';
import data from '../Data/preference.json';
import Header from '../Components/Header';
import MultipleSelectCheckmarks from '../Components/select';

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
  const descriptions = data;
  const groupedOptions = groupOptions(data);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setSelectedItems(prevState =>
      prevState.includes(id)
        ? prevState.filter(i => i !== id)
        : [...prevState, id]
    );
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

  return (
    <div className='h-screen w-full'>
      <div className='mb-20 bg-white border-b-slate-300 border'>
        <Header />
      </div>
      <div className='wrapper'>
        <form name='frm' id='frm' method='post' action=''>
          <h3 className='title font-'>회원가입</h3>
          <div>

            <div className='item'>
              <label htmlFor="id" >
                <strong>아이디</strong>
              </label>
              <div className='TypoBox'>
                <input type='text' name='id' id='id' placeholder='ID 규칙~~' className='Typo'>
                </input>
              </div>
            </div>

            <div className='item'>
              <label htmlFor="pass" >
                <strong>비밀번호</strong>
              </label>
              <div className='TypoBox'>
                <input type='password' name='pass' id='pass' placeholder='비밀번호규칙~~' className='Typo'>
                </input>
              </div>
            </div>

            <div className='item'>
              <label htmlFor="user_name" >
                <strong>이름</strong>
              </label>
              <div className='TypoBox'>
                <input type='text' name='user_name' id='user_name' placeholder='이름 입력' className='Typo'>
                </input>
              </div>
            </div>

            <div className='item'>
              <label htmlFor="birth_date" >
                <strong>생년월일</strong>
              </label>
              <div className='birthdate-box'>
                <select name='birth_year' id='birth_year' className='Typo birthdate-input'>
                  <option value="" disabled selected hidden>연도</option>
                  {generateYears().map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <select name='birth_month' id='birth_month' className='Typo birthdate-input'>
                  <option value="" disabled selected hidden>월</option>
                  {generateMonths().map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select name='birth_day' id='birth_day' className='Typo birthdate-input'>
                  <option value="" disabled selected hidden>일</option>
                  {generateDays().map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='item'>
              <label htmlFor="phone" >
                <strong>휴대폰</strong>
              </label>
              <div className='TypoBox'>
                <input type='text' name='phone' id='phone' placeholder="'-' 빼고 숫자만 입력" className='Typo'>
                </input>
              </div>
            </div>

            <div className='item'>
              <label htmlFor="region" >
                <strong>구/군 선택</strong>
              </label>
              <div className='TypoBox'>
                <select name='region' id='region' className='Typo'>
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
                  <option value="금정구">금정구</option>
                  <option value="동구">동구</option>
                  <option value="북구">북구</option>
                  <option value="서구">서구</option>
                  <option value="영도구">영도구</option>
                </select>
              </div>
            </div>
          </div>



          {groupedOptions.map((group, index) => (
            <div className='item'>
              <div className=''>
                <MultipleSelectCheckmarks key={index} options={group} tag={`선택 ${(index + 1).toString()}`} 
                setSelectedOptionsAll={setSelectedItems}/>
              </div>
            </div>

          ))}



          <button type='button' id='btn_submit' className='Btn'>회원가입 완료</button>
        </form>
      </div>
    </div>
  );
}
