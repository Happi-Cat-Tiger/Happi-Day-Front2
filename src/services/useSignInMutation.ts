import { LoginState } from '@/atom/LoginState';
import { API_BASE_URL } from '@/constants/api';
import { hdQueryClient } from '@/shared/hdQueryClient';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';

const signInApi = async ({ username, password }: { username: string; password: string }) =>
  await axios({
    baseURL: API_BASE_URL,
    method: 'post',
    url: '/auth/login',
    timeout: 1000,
    data: {
      //   username,
      //   password,
      username: 'qwer@email.com',
      password: 'qwer',
    },
    withCredentials: true,
  });

const useSignInMutation = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ username, password }: { username: string; password: string }) => signInApi({ username, password }),
    onSuccess: (res) => {
      console.log('success', res);
      const { token } = res.data;

      // API 요청하는 콜마다 헤더에 token 담아 보내도록 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //   hdQueryClient.invalidateQueries({ queryKey: ['signIn'] });

      // localStorage에 token 저장
      if (token) localStorage.setItem('jwt', token);
      if (localStorage.getItem('jwt')) setIsLoggedIn(true);

      router.push('/');
    },
  });
  return mutation;
};

export default useSignInMutation;
