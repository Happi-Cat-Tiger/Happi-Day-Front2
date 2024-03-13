import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getProfileInfoApi } from '@/api/user/userApi';

export interface Profile {
  id: number;
  realName: string;
  userType: 'USER' | 'ADMIN';
  userName: string;
  phone: string;
  profileImage: string;
  nickname: string;
}

export const useGetProfileInfoService = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfileInfoApi(),
    // enabled: !!isLoggedIn,
    enabled: false,
  });
};
