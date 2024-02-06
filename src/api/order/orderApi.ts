import apiInstance from '@/api/api';
import { OrderDetailType, OrderedProductItem } from '@/types/order';

export const getOrderedDetailApi = async ({ salesId, orderId }: { salesId: number; orderId: number }) =>
  await apiInstance.get<OrderDetailType>(`/sales/${salesId}/order/${orderId}`).then(({ data }) => data);

export const putOrderStatusApi = async ({
  salesId,
  orderId,
  orderStatus,
}: {
  salesId: number;
  orderId: number;
  orderStatus: object;
}) => await apiInstance.put(`/sales/${salesId}/order/${orderId}/changeStatus`, { orderStatus });

export const putOrderCancleApi = async ({ salesId, orderId }: { salesId: number; orderId: number }) =>
  await apiInstance.put(`/sales/${salesId}/order/${orderId}/cancel`);

export const deleteOrderApi = async ({ salesId, orderId }: { salesId: number; orderId: number }) =>
  await apiInstance.delete(`/sales/${salesId}/order/${orderId}`);

export const getOrderedProductListApi = async () =>
  await apiInstance.get<OrderedProductItem[]>('/user/orders').then(({ data }) => data);
