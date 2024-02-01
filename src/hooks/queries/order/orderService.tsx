import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { getOrderedDetailApi, getOrderedProductsListApi } from '@/api/order/orderApi';
import { orderDetail, OrderedProductList } from '@/types/order';

export const getOrderDetailService = ({ salesId, orderId }: { salesId: number; orderId: number }) => {
  return useQuery<orderDetail[], AxiosError>({
    queryKey: ['orderDetail'],
    queryFn: () => getOrderedDetailApi({ salesId, orderId }),
  });
};

export const getOrderedProductsListService = () => {
  return useQuery<OrderedProductList>({
    queryKey: ['order'],
    queryFn: () => getOrderedProductsListApi(),
  });
};
