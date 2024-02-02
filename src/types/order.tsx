export type orderDetail = {
  id: number;
  username: string;
  salesId: number;
  orderedProducts: OrderedProduct[];
  totalPrice: number;
  productPrice: number;
  orderStatus: string;
  address: string;
  orderAt: string;
  delivery: DeliveryData;
  trackingNum: string;
  depositor: string;
  refundAccount: string;
  sellerAccount: string;
};

export type OrderedProductList = {
  id: number;
  salesId: number;
  price: number;
  orderedProducts: object;
  status: string;
  createdAt: string;
};

export type DeliveryData = {
  deliveryWay: string;
  price: number;
};

export type OrderedProduct = {
  productName: string;
  count: number;
  individualProductPrice: number;
};
