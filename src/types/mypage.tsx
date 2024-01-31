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

export type orderedTable = [
  { title: string },
  { orderedProducts: string },
  { price: string },
  { createdAt: string },
  { status: string },
  { orderDetailLink: string },
];

export type salesTable = [
  { category: string },
  { title: string },
  { createdAt: string },
  { orderCount: string },
  { orderDetailLink: string },
];
