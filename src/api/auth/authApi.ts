import apiInstance from '@/api/api';
import { AuthSigninPayload, AuthSignupPayload } from './type';

export const postSigninApi = async ({ username, password }: AuthSigninPayload) =>
  await apiInstance.post('/auth/login', { username, password });

export const getSignoutApi = async (): Promise<string> => {
  try {
    const response = await apiInstance.get('/auth/logout');
    return response.data;
  } catch (error) {
    console.error('Error while fetching profile info:', error);
    throw error;
  }
};

// 회원가입
export const postSignupApi = async ({
  username,
  password,
  nickname,
  realname,
  phone,
  termsPrivacy,
  termsService,
}: AuthSignupPayload) =>
  await apiInstance.post('auth/signup', {
    username,
    password,
    nickname,
    realname,
    phone,
    termsPrivacy,
    termsService,
  });
