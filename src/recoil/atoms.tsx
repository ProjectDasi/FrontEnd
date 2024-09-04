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
