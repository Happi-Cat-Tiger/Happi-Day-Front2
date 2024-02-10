import apiInstance from '@/api/api';
import { postSigninApi } from '@/api/auth/authApi';
import { LoginState } from '@/atom/LoginState';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';

export const postSigninService = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      postSigninApi({
        //   username,
        //   password,
        username: 'qwer@email.com',
        password: 'qwer',
      }),
    onSuccess: (res) => {
      console.log('success', res);
      const { token } = res.data;

      apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // localStorage에 token 저장
      if (token) localStorage.setItem('jwt', token);
      if (localStorage.getItem('jwt')) setIsLoggedIn(true);

      router.push('/');
    },
  });
  return mutation;
};
