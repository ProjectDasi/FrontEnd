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
  default: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')|| 'false') : false, // 새로고침 시 로컬 스토리지에서 사용자 정보 가져오기
  effects_UNSTABLE: [
    ({ onSet }) => { //atom의 상태가 변경될 때 로컬 스토리지에 해당값을 동기화
      onSet(newValue => { //변경될 때 호출된다.
        if (newValue) {
          localStorage.setItem('user', JSON.stringify(newValue));
        } else {
          localStorage.removeItem('user');
        }
      });
    },
  ],
});

// import { atom } from 'recoil';

// // Define the type for user state (e.g., user info such as ID or token)
// interface UserState {
//   id: string | null;
// }

// // 로그인 상태를 관리하는 atom
// export const isLoggedInState = atom<boolean>({
//   key: 'isLoggedInState',
//   default: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('IS_LOGGED_IN') || 'false') : false,
//   effects_UNSTABLE: [
//     ({ onSet }) => {
//       onSet((newValue) => {
//         localStorage.setItem('IS_LOGGED_IN', JSON.stringify(newValue)); // 로그인 상태를 localStorage에 저장
//       });
//     },
//   ],
// });

// // 사용자 정보를 관리하는 atom
// export const userState = atom<UserState>({
//   key: 'userState',
//   default: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{"id": null}') : { id: null },
//   effects_UNSTABLE: [
//     ({ onSet }) => {
//       onSet((newValue) => {
//         if (newValue.id) {
//           localStorage.setItem('user', JSON.stringify(newValue)); // 사용자 정보를 localStorage에 저장
//         } else {
//           localStorage.removeItem('user'); // 사용자가 없을 경우 localStorage에서 삭제
//         }
//       });
//     },
//   ],
// });
