import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { updateProfileInfoApi } from '../../../api/user/userApi';

export const updateProfileInfoService = () => {
  const mutation = useMutation({
    mutationFn: updateProfileInfoApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
  return { mutation };
};
