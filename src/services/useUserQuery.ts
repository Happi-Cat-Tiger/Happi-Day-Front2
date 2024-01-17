import axios from 'axios';
import { useQuery } from 'react-query';
import { UserType } from '../types/user';

export const QUERY_KEY = '/user/Info';

const fetcher = () => axios.get<UserType[]>('/user/Info').then(({ data }) => data);

const useUserQuery = () => {
  return useQuery(QUERY_KEY, fetcher);
};
