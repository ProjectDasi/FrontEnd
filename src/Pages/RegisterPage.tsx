import React, { useState } from 'react';
import '../styles/register.css';
import data from '../Data/preference.json';
import Header from '../Components/Header';

export default function RegisterPage() {
  // JSON 파일로부터 데이터 가져오기
  const descriptions = data;

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
                  <option value={1}>금정구</option>
                  <option value={2}>기장군</option>
                  <option value={3}>동래구</option>
                  <option value={4}>사상구</option>
                  <option value={5}>수영구</option>
                  <option value={6}>중구</option>
                  <option value={7}>강서구</option>
                  <option value={8}>남구</option>
                  <option value={9}>부산진구</option>
                  <option value={10}>사하구</option>
                  <option value={11}>연제구</option>
                  <option value={12}>해운대구</option>
                  <option value={13}>금정구</option>
                  <option value={14}>동구</option>
                  <option value={15}>북구</option>
                  <option value={16}>서구</option>
                  <option value={17}>영도구</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <ul>
              {descriptions.map((item: { ID: number; 설명: string }) => (
                <li
                  key={item.ID}
                  onClick={() => handleItemClick(item.ID)}
                  style={{
                    cursor: 'pointer',
                    padding: '5px 10px',
                    border:'2px solid #7be388',
                    marginTop:'15px',
                    borderRadius:'15px',
                    backgroundColor: selectedItems.includes(item.ID) ? '#d3f9d8' : '#fff'
                  }}
                >
                  {item.설명}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '20px' }}>
              <h3>Selected Descriptions:</h3>
              <ul>
                {selectedItems.map((id, index) => {
                  const selectedItem = descriptions.find(item => item.ID === id);
                  return selectedItem ? <li key={index}>{selectedItem.ID}</li> : null;
                })}
              </ul>
            </div>
          </div>

          <button type='button' id='btn_submit' className='Btn'>회원가입 완료</button>
        </form>
      </div>
    </div>
  );
}
