import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { useRouter } from 'next/navigation';
import { LoginState } from '@/atom/LoginState';
import { useRecoilState } from 'recoil';
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
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (password) => deleteAccountApi(password),
    onSuccess: () => {
      const [, setIsLoggedIn] = useRecoilState(LoginState);
      const callConfirm = () => {
        if (confirm('정말 탈퇴하시겠습니까?')) {
          return true;
        }
      };
      const answer = callConfirm();
      if (answer == true) {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        router.push('/');
      }
      hdQueryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
  return mutation;
};
