import { API_BASE_URL } from '../constants/api';
import axios from 'axios';
//OAuth 프레임워크에서 Bearer 사용. OAuth는 프레임워크 사용하는지 백엔드에 확인필요
//TODO 저장된 토큰 가져오는 getToken() 함수 구현 해야함

export const apiInstance = axios.create({
  baseURL: `${API_BASE_URL}/`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },

  // 서버와 클라이언트가 다른 도메인일 경우 필수
  withCredentials: true,
});

apiInstance.interceptors.request.use(
  (config) => {
    //요청을 보내기 전에 수행할 로직

    return config;
  },
  (error) => {
    //요청 에러가 발생했을 때 수행할 로직
    console.log(error);
    return Promise.reject(error);
  },
);

apiInstance.interceptors.response.use(
  (response) => {
    //응답에 대한 로직

    return response;
  },
  async (error) => {
    //응답 에러가 발생했을 때 수행할 로직
    console.log(error);
    return Promise.reject(error);
  },
);

export default apiInstance;
