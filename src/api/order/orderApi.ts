import apiInstance from '@/api/api';
import { OrderData } from '@/hooks/queries/order/orderService';

export const getOrderedDetailApi = async ({ salesId, orderId }: { salesId: number; orderId: number }) =>
  await apiInstance.get<OrderData[]>(`/sales/${salesId}/order/${orderId}`).then(({ data }) => data);

export const updateOrderStatusApi = async ({
  salesId,
  orderId,
  orderStatus,
}: {
  salesId: number;
  orderId: number;
  orderStatus: object;
}) => await apiInstance.put(`/sales/${salesId}/order/${orderId}/changeStatus`, { orderStatus });

export const updateOrderCancleApi = async ({ salesId, orderId }: { salesId: number; orderId: number }) =>
  await apiInstance.put(`/sales/${salesId}/order/${orderId}/cancel`);

export const deleteOrderApi = async ({ salesId, orderId }: { salesId: number; orderId: number }) =>
  await apiInstance.delete(`/sales/${salesId}/order/${orderId}`);
