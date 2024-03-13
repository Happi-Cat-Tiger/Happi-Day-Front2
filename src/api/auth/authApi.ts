import apiInstance from '@/api/api';
import { AuthSigninPayload, AuthSignupPayload } from './type';

export const postSigninApi = async ({ username, password }: AuthSigninPayload) =>
  await apiInstance.post('/auth/login', { username, password });

export const getSignoutApi = async () => await apiInstance.get('/auth/logout');

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
