import { useQuery, useMutation, useQueryClient, UseMutationResult } from '@tanstack/react-query';
import apiInstance from '@/api/api';
import { AxiosError } from 'axios';

export interface Profile {
  realName?: string;
  userType?: 'user' | 'admin';
  userName?: string;
  phone?: string;
  profileImage?: string;
}

type PatchUserProfileInfo = {
  nickName?: string;
  phone?: string;
  profileImage?: string;
};

type UsePatchUserProfileInfo = {
  onSuccessCb: () => void;
  onErrorCb: () => void;
};

const patchUserProfileInfo = async ({ nickName, phone, profileImage }: PatchUserProfileInfo) => {
  return await apiInstance.patch('/user/info', { nickName, phone, profileImage });
};

export const usePatchComment = ({ onSuccessCb, onErrorCb }: UsePatchUserProfileInfo) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(patchUserProfileInfo, {
    onSuccess: () => {
      onSuccessCb();
      queryClient.invalidateQueries(['profile'], { exact: true });
    },
    onError: () => {
      onErrorCb();
    },
  });

  return { mutation };
};

export const getUserProfileService = () => {
  const { data } = useQuery<Profile[], AxiosError>(['profile'], () =>
    apiInstance.get('/user/info').then(({ data }) => data),
  );
};

// export const updateUserProfileService = (successCallback: () => void) => {
//   const { mutate, data } = useMutation((suggest) => apiInstance.patch('/user/info', { ...suggest }), {
//     onSuccess: () => {

//       successCallback();
//     },
//   });
//   return { mutate, data };
// };

// export const updateUserProfileService = (): UseMutationResult<Profile, AxiosError> => {
//   return useMutation((suggest) => apiInstance.patch('/user/info', { ...suggest }), {
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
//       // mutation을 성공하면 userProfileInfo를 불러오는 useQuery를 무효화 시킨다.
//     },
//     onError: (error) => {
//       console.error(error);
//     },
//   });
// };
