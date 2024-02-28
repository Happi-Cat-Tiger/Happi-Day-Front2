import apiInstance from '@/api/api';
import { postSigninApi, postSignupApi } from '@/api/auth/authApi';
import { LoginState } from '@/atom/LoginState';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

export const postSigninService = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      postSigninApi({
        username,
        password,
      }),
    onSuccess: (res) => {
      console.log('success', res);
      const { token } = res.data;

      localStorage.setItem('token', token);

      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setIsLoggedIn(true);
      // localStorage.setItem('log', JSON.stringify({ state: true }));
      const setTime = 60 * 1000 * 60;

      setTimeout(() => {
        setIsLoggedIn(false);
      }, setTime);

      router.push('/');
    },
  });
  return mutation;
};

export const hostSigninService = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ['signIn'],
    mutationFn: () =>
      postSigninApi({
        username: 'qwer@email.com',
        password: 'qwer',
      }),
    onSuccess: (res) => {
      console.log('success', res);
      const { token } = res.data;
      localStorage.setItem('token', token);

      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsLoggedIn(true);
      const setTime = 60 * 1000 * 60;
      setTimeout(() => {
        setIsLoggedIn(false);
      }, setTime);
      router.push('/');
    },
  });
  return mutation;
};

export const postSignupService = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: ({
      username,
      password,
      nickname,
      realname,
      phone,
      termsPrivacy,
      termsService,
    }: {
      username: string;
      password: string;
      nickname: string;
      realname: string;
      phone: string;
      termsPrivacy: boolean;
      termsService: boolean;
    }) => postSignupApi({ username, password, nickname, realname, phone, termsPrivacy, termsService }),
    onSuccess: () => {
      router.push('/auth/sign-in');
      alert('회원가입이 완료되었습니다.');
    },
  });

  return mutation;
};
