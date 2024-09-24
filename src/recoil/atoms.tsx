import { atom } from 'recoil';
import { useEffect } from 'react';


// Define the isLoggedInState atom to manage user login status
export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('IS_LOGGED_IN') || 'false') : false, // Ensure window is available for SSR
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('IS_LOGGED_IN', JSON.stringify(newValue)); // Sync with localStorage on change
      });
    },
  ],
});

export const userState = atom({
  key: 'userState',
  default: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('id')|| 'false') : false, // 새로고침 시 로컬 스토리지에서 사용자 정보 가져오기
  effects_UNSTABLE: [
    ({ onSet }) => { //atom의 상태가 변경될 때 로컬 스토리지에 해당값을 동기화
      onSet(newValue => { //변경될 때 호출된다.
        if (newValue) {
          localStorage.setItem('id', JSON.stringify(newValue));
        } else {
          localStorage.removeItem('id');
        }
      });
    },
  ],
});
