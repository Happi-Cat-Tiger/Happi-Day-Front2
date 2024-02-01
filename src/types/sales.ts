import { orderedProducts } from '@/types/order';

export type SalesPostList = {
  id: number;
  salesCategory: string;
  title: string;
  orderCount: number;
  createdAt: string;
};

export type SalesProductList = {
  id: number;
  username: string;
  orderedProducts: orderedProducts;
  price: number;
  orderStatus: string;
  orderAt: string;
};
