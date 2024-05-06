'use client';
// localStorage의 accessToken이용

import { useEffect, useState, ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { LoginState } from '@/atom/LoginState';
import { isValidToken, setSession } from '@/utils/auth';
import { useGetProfileInfoService } from '@/hooks/queries/user/userService';

function AuthProvider({ children }: { children: ReactNode }) {
  const [, setIsLoggedIn] = useRecoilState(LoginState);
  const [isValid, setIsValid] = useState(false);
  useGetProfileInfoService({ isLoggedIn: isValid }); // 유저 정보 가져오기

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('token');

        if (accessToken && isValidToken(accessToken)) {
          setIsValid(true);
          setSession(accessToken);

          setIsLoggedIn(true);
        } else {
          setIsValid(false);
          setIsLoggedIn(false);
        }
      } catch (err) {
        console.error(err);
        setIsValid(false);
        setIsLoggedIn(false);
      }
    };

    initialize();
  }, []);

  return <>{children}</>;
}

export { AuthProvider };
