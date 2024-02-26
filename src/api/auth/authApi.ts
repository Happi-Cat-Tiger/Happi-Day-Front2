import apiInstance from '@/api/api';

export const postSigninApi = async ({ username, password }: { username: string; password: string }) =>
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
}: {
  username: string;
  password: string;
  nickname: string;
  realname: string;
  phone: string;
  termsPrivacy: boolean;
  termsService: boolean;
}) =>
  await apiInstance.post('auth/signup', {
    username,
    password,
    nickname,
    realname,
    phone,
    termsPrivacy,
    termsService,
  });
