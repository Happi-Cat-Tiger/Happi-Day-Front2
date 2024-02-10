'use client';

import React, { useState } from 'react';
import { OrderDetail } from '@/containers/mypage/mygoods/OrderDetail';
import { getOrderDetailService } from '@/hooks/queries/order/orderService';

const page = ({ params }: { params: { salesId: string; orderId: string; type: string } }) => {
  const orderId = parseInt(params.orderId, 10);
  const salesId = parseInt(params.salesId, 10);
  const detailType = params.type;

  const [orderDetailData, setOrderDetailData] = useState();

  const { data: data } = getOrderDetailService({ salesId, orderId });

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="prose prose-h4">주문 상세</div>
      <OrderDetail orderDetailMockData={orderDetailMockData} detailType={detailType} />
    </div>
  );
};

export default page;

const orderDetailMockData = {
  id: 3,
  username: '홍길동',
  salesId: 4,
  orderedProducts: [
    { productName: '지민 키링 (Pink)', count: 1, individualProductPrice: 12000 },
    { productName: '방탄 폰케이스 (iPhone 14)', count: 2, individualProductPrice: 10000 },
  ],
  productPrice: 32000,
  totalPrice: 33800,
  orderStatus: 'DELIVERING',
  address: '서울특별시 강동구 둔촌동',
  orderAt: '2024-01-23 20:52',
  delivery: {
    deliveryWay: '준등기',
    price: 1800,
  },
  trackingNum: '30293574938',
  depositor: '저팔계',
  refundAccount: '국민은행 650043-340-2342 저팔계',
  sellerAccount: '농협 12303-546345-23',
};
