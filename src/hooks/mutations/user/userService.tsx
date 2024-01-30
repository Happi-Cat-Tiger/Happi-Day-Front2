import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { updateProfileInfoApi } from '../../../api/user/userApi';

export const updateProfileInfoService = ({
  nickName,
  phone,
  profileImage,
}: {
  nickName?: string;
  phone?: string;
  profileImage?: string;
}) => {
  const mutation = useMutation({
    mutationFn: () => updateProfileInfoApi({ nickName, phone, profileImage }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
  return { mutation };
};
