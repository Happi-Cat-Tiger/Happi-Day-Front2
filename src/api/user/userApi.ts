import apiInstance from '@/api/api';
import { ProfileResponse, UpdateProfilePayload } from './type';

export const updateProfileInfoApi = async ({ nickName, phone, profileImage }: UpdateProfilePayload) => {
  return await apiInstance.patch('/user/info', { nickName, phone, profileImage });
};

export const getProfileInfoApi = async (): Promise<ProfileResponse> =>
  apiInstance.get('/user/info').then((response) => response.data);
