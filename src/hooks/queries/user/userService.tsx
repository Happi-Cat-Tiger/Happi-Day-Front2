import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getProfileInfoApi } from '@/api/user/userApi';
import { useRecoilValue } from 'recoil';
import { LoginState } from '@/atom/LoginState';

export interface Profile {
  id: number;
  realName: string;
  userType: 'USER' | 'ADMIN';
  userName: string;
  phone: string;
  profileImage: string;
  nickname: string;
}

export const getProfileInfoService = () => {
  const isLoggedIn = useRecoilValue(LoginState);

  const query = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfileInfoApi(),
    enabled: isLoggedIn,
  });
  return query;
};
