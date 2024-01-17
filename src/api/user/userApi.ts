import apiInstance from '@/api/api';

export type UpdateProfileInfo = {
  nickName?: string;
  phone?: string;
  profileImage?: string;
};

export const updateProfileInfoApi = async ({ nickName, phone, profileImage }: UpdateProfileInfo) => {
  return await apiInstance.patch('/user/info', { nickName, phone, profileImage });
};

export const getProfileInfoApi = async () => await apiInstance.get('/user/info').then(({ data }) => data.data);
