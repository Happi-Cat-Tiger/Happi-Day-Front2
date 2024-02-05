import { LoginState } from '@/atom/LoginState';
import { API_BASE_URL } from '@/constants/api';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

const logoutApi = async () => {
  await axios({
    baseURL: API_BASE_URL,
    method: 'get',
    url: '/auth/logout',
    timeout: 1000,
    withCredentials: true,
  });
};

const useLogoutQuery = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);

  const logoutQuery = useQuery({
    queryKey: ['logout'],
    queryFn: () => logoutApi(),
    enabled: false,
  });

  if (logoutQuery.isSuccess) setIsLoggedIn(false);

  return logoutQuery;
};

export default useLogoutQuery;
