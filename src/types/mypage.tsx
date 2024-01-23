export type MenuListItem = {
  id: number;
  title: string;
  path: string;
  urlForHighlight: string;
};

export type ResultSalesGoods = {
  id: number;
  category: string;
  title: string;
  orderCount: number;
  createdAt: string;
};

export type ResultOrdersGoods = {
  id: number;
  price: string;
  orderedProducts: string;
  title: string;
  status: string;
  createdAt: string;
};
