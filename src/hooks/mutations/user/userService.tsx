import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { patchProfileInfoApi, patchProfileImageApi, patchBasicProfileImageApi } from '../../../api/user/userApi';

export const usePatchProfileInfoService = ({
  nickname,
  phone,
  password,
}: {
  nickname?: string;
  phone?: string;
  password?: string;
}) => {
  const mutation = useMutation({
    mutationFn: () => patchProfileInfoApi({ nickname, phone, password }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
  return mutation;
};

export const usePatchProfileImageService = ({ formData }: { formData: FormData }) => {
  const mutation = useMutation<FormData>({
    mutationFn: () => patchProfileImageApi({ formData }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['profile', 'image'] });
    },
  });
  return mutation;
};

export const usePatchBasicProfileImageService = () => {
  const mutation = useMutation({
    mutationFn: () => patchBasicProfileImageApi(),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['profile', 'image'] });
    },
  });
  return mutation;
};
