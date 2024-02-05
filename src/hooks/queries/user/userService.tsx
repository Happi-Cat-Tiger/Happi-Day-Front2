import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getProfileInfoApi } from '@/api/user/userApi';

export interface Profile {
  realName: string;
  userType: 'user' | 'admin';
  userName: string;
  phone: string;
  profileImage: string;
}

export const getProfileInfoService = () => {
  return useQuery<Profile[], AxiosError>({
    queryKey: ['profile'],
    queryFn: getProfileInfoApi,
  });
};
