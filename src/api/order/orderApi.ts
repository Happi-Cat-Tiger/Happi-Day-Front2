import apiInstance from '@/api/api';
import { orderDetail, OrderedProductList } from '@/types/order';

export const getOrderedDetailApi = async ({ salesId, orderId }: { salesId: number; orderId: number }) =>
  await apiInstance.get<orderDetail[]>(`/sales/${salesId}/order/${orderId}`).then(({ data }) => data);

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

export const getOrderedProductListApi = async () =>
  await apiInstance.get<OrderedProductList[]>('/user/orders').then(({ data }) => data);
