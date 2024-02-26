import { getSignoutApi } from '@/api/auth/authApi';
import { getProfileInfoApi } from '@/api/user/userApi';
import { LoginState } from '@/atom/LoginState';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

export const getSignoutService = () => {
  const [, setIsLoggedIn] = useRecoilState(LoginState);

  const query = useQuery({
    queryKey: ['logout'],
    queryFn: () => getSignoutApi(),
    enabled: false,
  });

  if (query.isSuccess) setIsLoggedIn(false);

  return query;
};
