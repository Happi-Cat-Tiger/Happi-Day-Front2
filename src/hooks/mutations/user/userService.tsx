import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import {
  patchProfileInfoApi,
  patchProfileImageApi,
  patchBasicProfileImageApi,
  deleteAccountApi,
} from '../../../api/user/userApi';

export const usePatchProfileInfoService = () => {
  const mutation = useMutation({
    mutationFn: (values) => patchProfileInfoApi(values),
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
      hdQueryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
  return mutation;
};

export const usePatchBasicProfileImageService = () => {
  const mutation = useMutation({
    mutationFn: () => patchBasicProfileImageApi(),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
  return mutation;
};

export const useDeleteAccountService = () => {
  const mutation = useMutation({
    mutationFn: (password) => deleteAccountApi(password),
    onSuccess: () => {
      confirm('정말 탈퇴하시겠습니까?');
      hdQueryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
  return mutation;
};
