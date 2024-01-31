import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { getOrderedDetailApi } from '@/api/order/orderApi';

export interface OrderData {
  id: number;
  username: string;
  salesId: number;
  orderedProducts: object;
  price: number;
  orderStatus: string;
  address: string;
  orderAt: string;
  delivery: string;
  trackingNum: string | number;
  depositor: string;
  refundAccount: string;
  sellerAccount: string;
}

export const getOrderDetailService = ({ salesId, orderId }: { salesId: number; orderId: number }) => {
  return useQuery<OrderData[], AxiosError>({
    queryKey: ['orderDetail'],
    queryFn: () => getOrderedDetailApi({ salesId, orderId }),
  });
};
