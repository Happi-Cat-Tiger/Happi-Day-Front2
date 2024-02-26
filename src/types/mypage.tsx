export type MenuListItem = {
  id: number;
  title: string;
  path: string;
  urlForHighlight: string;
};

export type OrderedTable = [
  { title: string },
  { orderedProducts: string },
  { price: string },
  { createdAt: string },
  { status: string },
  { orderDetailLink: string },
];

export type SalesPostTable = [
  { salesCategory: string },
  { title: string },
  { createdAt: string },
  { orderCount: string },
  { orderDetailLink: string },
];

export type SalesProductsTable = [
  { orderAt: string },
  { orderedProducts: string },
  { username: string },
  { price: string },
  { orderStatus: string },
  { orderDetailLink: string },
];
