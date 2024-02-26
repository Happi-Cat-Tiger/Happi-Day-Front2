import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getOrderedDetailApi, getOrderedProductListApi } from '@/api/order/orderApi';
import { OrderDetailType, OrderedProductItem } from '@/types/order';

export const getOrderDetailService = ({ salesId, orderId }: { salesId: number; orderId: number }) => {
  return useQuery<OrderDetailType, AxiosError>({
    queryKey: ['orderDetail'],
    queryFn: () => getOrderedDetailApi({ salesId, orderId }),
  });
};

export const getOrderedProductListService = () => {
  return useQuery<OrderedProductItem[], AxiosError>({
    queryKey: ['order'],
    queryFn: () => getOrderedProductListApi(),
  });
};
