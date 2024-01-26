'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { getOrderDetailService } from '@/hooks/queries/order/orderService';

const page = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const orderId = params.get('orderId');
  const salesId = params.get('salesId');

  const userType = pathname === '/mypage/my-orders/detail' ? 'orderUser' : 'salesUser';

  const [orderDetailData, setOrderDetailData] = useState(orderDetailMockData);

  useEffect(() => {
    //주문 상세 내역 fetch 함수
    // const {data : orderDetailFetchData} = getOrderDetailService({ salesId: item.salesId, orderId: item.id })
  }, []);

  return <div></div>;
};

export default page;

const orderDetailMockData = {
  id: 3,
  username: '홍길동',
  salesId: 4,
  orderedProducts: {
    '2번인형': 1,
    '1번인형': 2,
  },
  price: 39000,
  orderStatus: 'ORDER_COMPLETED',
  address: '서울특별시 강동구 둔촌동',
  orderAt: '2024-01-233 20:52',
  delivery: '표준 배송',
  trackingNum: '등록되지 않음.',
  depositor: '저팔계',
  refundAccount: '국민은행 650043-340-2342 저팔계',
  sellerAccount: '농협 12303-546345-23',
};
