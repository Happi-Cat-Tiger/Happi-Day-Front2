import apiInstance from '@/api/api';

export const postSigninApi = async ({ username, password }: { username: string; password: string }) =>
  await apiInstance.post('/auth/login', [, { username, password }]);

export const getSignoutApi = async () => await apiInstance.get('/auth/logout');
