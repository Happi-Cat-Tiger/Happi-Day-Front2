import { useQuery } from '@tanstack/react-query';
import { getProfileInfoApi } from '@/api/user/userApi';
<<<<<<< HEAD
import { ProfileResponse } from '@/api/user/type';

export const useGetProfileInfoService = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const skipToken = !!isLoggedIn;
  return useQuery<boolean | ProfileResponse>({
    queryKey: ['profile', isLoggedIn],
    queryFn: () => (isLoggedIn ? getProfileInfoApi() : skipToken),
    // enabled: !!isLoggedIn,
=======

export interface Profile {
  id: number;
  realname: string;
  role: 'USER' | 'ADMIN';
  username: string;
  phone: string;
  imageUrl: string;
  nickname: string;
}

export const useGetProfileInfoService = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfileInfoApi(),
    // enabled: !!isLoggedIn,
    enabled: true,
>>>>>>> f681639 (Feat : 프로필 수정 api 연결)
  });
};
