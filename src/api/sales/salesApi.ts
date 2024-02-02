import apiInstance from '@/api/api';
import { SalesProductList, SalesPostList } from '@/types/sales';

export const getSalesPostListApi = async () =>
  await apiInstance.get<SalesPostList[]>('/user/sales').then(({ data }) => data);

export const getSalesProductListApi = async (salesId: number) =>
  await apiInstance.get<SalesProductList[]>(`/sales/${salesId}/order`).then(({ data }) => data);
