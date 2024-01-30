export type orderDetail = {
  id: number;
  username: string;
  salesId: number;
  orderedProducts: orderedProducts[];
  totalPrice: number;
  productPrice: number;
  orderStatus: string;
  address: string;
  orderAt: string;
  delivery: delivery;
  trackingNum: string;
  depositor: string;
  refundAccount: string;
  sellerAccount: string;
};

export type delivery = {
  deliveryWay: string;
  price: number;
};

export type orderedProducts = {
  productName: string;
  count: number;
  individualProductPrice: number;
};
