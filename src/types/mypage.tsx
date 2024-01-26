export type MenuListItem = {
  id: number;
  title: string;
  path: string;
  urlForHighlight: string;
};

export type ResultSalesGoods = {
  id: number;
  salesId: number;
  category: string;
  title: string;
  orderCount: number;
  createdAt: string;
};

export type ResultOrdersGoods = {
  id: number;
  salesId: number;
  price: number;
  orderedProducts: object;
  title: string;
  status: string;
  createdAt: string;
};
