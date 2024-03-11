import { getSignoutApi } from '@/api/auth/authApi';
import { useQuery } from '@tanstack/react-query';

export const useGetSignoutService = ({ isClick }: { isClick: boolean }) => {
  const skipToken = isClick;
  return useQuery<any>({
    queryKey: ['logout'],
    queryFn: () => (isClick ? getSignoutApi() : skipToken),
    enabled: false,
  });
};
