import { QueryClient } from '@tanstack/react-query';
import { REACT_QUERY_FETCH_OPTIONS, REACT_QUERY_MUTATE_OPTIONS } from '../constants/reactQuery';

//hd = happi_day
export const hdQueryClient = new QueryClient({
  defaultOptions: {
    queries: REACT_QUERY_FETCH_OPTIONS,
    mutations: REACT_QUERY_MUTATE_OPTIONS,
  },
});
