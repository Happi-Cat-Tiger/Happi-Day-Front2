import apiInstance from '@/api/api';
import { Profile } from '@/hooks/queries/user/userService';

export type UpdateProfileInfo = {
  nickname?: string;
  phone?: string;
  password?: string;
};

export type DeleteAccount = {
  password: string;
};

export const patchProfileInfoApi = async ({ values }: { values: UpdateProfileInfo }) => {
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

export const deleteAccountApi = async ({ password }: { password: DeleteAccount }) => {
  return await apiInstance.delete('/user/withdrawal', password);
};
