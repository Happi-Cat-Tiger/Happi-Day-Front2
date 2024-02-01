import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { getSalesProductsListApi } from '@/api/sales/salesApi';
import { SalesProductList } from '@/types/sales';

export const getsalesProductsListService = () => {
  return useQuery<SalesProductList, AxiosError>({
    queryKey: ['sales'],
    queryFn: () => getSalesProductsListApi(),
  });
};
