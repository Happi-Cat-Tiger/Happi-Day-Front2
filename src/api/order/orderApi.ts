import apiInstance from '@/api/api';
import { OrderData } from '@/hooks/queries/order/orderService';

export const getOrderedDetailApi = async ({ salesId, orderId }: { salesId: number; orderId: number }) =>
  await apiInstance.get<OrderData[]>(`/sales/${salesId}/order/${orderId}`).then(({ data }) => data);
