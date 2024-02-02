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
  orderedProducts: object;
  price: number;
  orderStatus: string;
  orderAt: string;
};
