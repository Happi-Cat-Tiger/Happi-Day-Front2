import apiInstance from '@/api/api';
import { ProfileResponse, UpdateProfilePayload } from './type';

<<<<<<< HEAD
export const updateProfileInfoApi = async ({ nickName, phone, profileImage }: UpdateProfilePayload) => {
  return await apiInstance.patch('/user/info', { nickName, phone, profileImage });
};

export const getProfileInfoApi = async (): Promise<ProfileResponse> =>
  apiInstance.get('/user/info').then((response) => response.data);
=======
export type UpdateProfileInfo = {
  nickname?: string;
  phone?: string;
  password?: string;
};

export const patchProfileInfoApi = async (values: UpdateProfileInfo) => {
  return await apiInstance.patch('/user/info', values);
};

export const patchProfileImageApi = async ({ formData }: { formData: FormData }) => {
  return await apiInstance
    .patch('/user/info/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    })
    .then((response) => response.data);
};

export const patchBasicProfileImageApi = async () => {
  return await apiInstance.patch('/user/info/default');
};

export const getProfileInfoApi = async () => {
  const response = await apiInstance.get<Profile>('/user/info');
  return response.data;
};
>>>>>>> f681639 (Feat : 프로필 수정 api 연결)
