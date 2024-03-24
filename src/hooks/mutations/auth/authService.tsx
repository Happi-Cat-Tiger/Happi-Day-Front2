import apiInstance from '@/api/api';
import { postSigninApi, postSignupApi } from '@/api/auth/authApi';
import { LoginState } from '@/atom/LoginState';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { AuthSignupPayload } from '@/api/auth/type';
import { toast } from 'react-toastify';

export const usePostSigninService = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);
  const router = useRouter();

  return useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ username, password }: AuthSignupPayload) =>
      postSigninApi({
        username,
        password,
      }),
    onSuccess: (res) => {
      const { token } = res.data;

      localStorage.setItem('token', token);

      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setIsLoggedIn(true);
      const setTime = 60 * 1000 * 60;

      setTimeout(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
      }, setTime);

      router.push('/');
      toast('로그인에 성공했습니다.');
    },
  });
};

export const useHostSigninService = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);
  const router = useRouter();

  return useMutation({
    mutationKey: ['signIn'],
    mutationFn: () =>
      postSigninApi({
        username: 'qwer@email.com',
        password: 'qwer',
      }),
    onSuccess: (res) => {
      const { token } = res.data;
      localStorage.setItem('token', token);

      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsLoggedIn(true);
      const setTime = 60 * 1000 * 60;

      setTimeout(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
      }, setTime);
      router.push('/');
      toast('로그인에 성공했습니다.');
    },
  });
};

export const usePostSignupService = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ username, password, nickname, realname, phone, termsPrivacy, termsService }: AuthSignupPayload) =>
      postSignupApi({ username, password, nickname, realname, phone, termsPrivacy, termsService }),
    onSuccess: () => {
      router.push('/auth/sign-in');
      toast('회원가입이 완료되었습니다.');
    },
  });
};
