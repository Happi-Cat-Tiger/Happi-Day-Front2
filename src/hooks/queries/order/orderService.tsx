import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { getOrderedDetailApi, getOrderedProductListApi } from '@/api/order/orderApi';
import { orderDetail, OrderedProductList } from '@/types/order';

export const getOrderDetailService = ({ salesId, orderId }: { salesId: number; orderId: number }) => {
  return useQuery<orderDetail[], AxiosError>({
    queryKey: ['orderDetail'],
    queryFn: () => getOrderedDetailApi({ salesId, orderId }),
  });
};

export const getOrderedProductListService = () => {
  return useQuery<OrderedProductList[], AxiosError>({
    queryKey: ['order'],
    queryFn: () => getOrderedProductListApi(),
  });
};
