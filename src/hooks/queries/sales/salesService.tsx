import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSalesPostListApi, getSalesProductListApi } from '@/api/sales/salesApi';
import { SalesProductList, SalesPostList } from '@/types/sales';

export const getSalesPostListService = () => {
  const query = useQuery<SalesPostList[], AxiosError>({
    queryKey: ['sales'],
    queryFn: () => getSalesPostListApi(),
  });
  return query;
};

export const getSalesProductListService = ({ salesId }: { salesId: number }) => {
  return useQuery<SalesProductList[], AxiosError>({
    queryKey: ['sales'],
    queryFn: () => getSalesProductListApi(salesId),
  });
};
