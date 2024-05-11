import { useQuery } from '@tanstack/react-query';
import { getProfileInfoApi } from '@/api/user/userApi';
import { ProfileResponse } from '@/api/user/type';

export const useGetProfileInfoService = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const skipToken = !!isLoggedIn;
  return useQuery<boolean | ProfileResponse>({
    queryKey: ['profile', isLoggedIn],
    queryFn: () => (isLoggedIn ? getProfileInfoApi() : skipToken),
    // enabled: !!isLoggedIn,
  });
};
