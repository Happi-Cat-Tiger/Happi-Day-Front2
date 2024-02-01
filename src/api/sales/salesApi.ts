import apiInstance from '@/api/api';
import { SalesProductList } from '@/types/order';

export const getSalesProductsListApi = async () =>
  await apiInstance.get<SalesProductList>('/user/sales').then(({ data }) => data);
