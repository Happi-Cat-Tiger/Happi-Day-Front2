import apiInstance from '@/api/api';
import { Profile } from '@/hooks/queries/user/userService';

export type UpdateProfileInfo = {
  nickName?: string;
  phone?: string;
  profileImage?: string;
};

export const updateProfileInfoApi = async ({ nickName, phone, profileImage }: UpdateProfileInfo) => {
  return await apiInstance.patch('/user/info', { nickName, phone, profileImage });
};

export const getProfileInfoApi = async () => {
  try {
    const response = await apiInstance.get('/user/info');
    return response.data;
  } catch (error) {
    console.error('Error while fetching profile info:', error);
    throw error;
  }
};
