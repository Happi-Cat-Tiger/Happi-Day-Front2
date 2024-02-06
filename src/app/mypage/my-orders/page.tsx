'use client';

import React from 'react';
import Table from '@/containers/mypage/Table';
import { MY_ORDERS_TABLE_HEAD } from '@/constants/mypage';
import { OrderedProductItem } from '@/types/order';
import { OrderDetailLink } from '@/containers/mypage/mygoods/OrderdetailLink';
import { getOrderedProductListService } from '@/hooks/queries/order/orderService';

const Page = () => {
  const { data: orderedProductList } = getOrderedProductListService();
  const modifiedData = orderedProductList && modifyDataForOrderTable(orderedProductList);
  if (!orderedProductList) {
    return <div>구매 내역 없음</div>;
  }
  return (
    modifiedData && (
      <div className="flex w-full flex-col gap-5">
        <div className="prose prose-h4">주문 내역</div>
        <Table TABLE_HEAD={MY_ORDERS_TABLE_HEAD} TABLE_ROWS={modifiedData} />
      </div>
    )
  );
};

export default Page;

const modifyDataForOrderTable = (data: OrderedProductItem[]) => {
  return data?.map((item) => {
    const orderedProductsName = Object.keys(item.orderedProducts);
    const orderedProductsCount = orderedProductsName.length;

    return {
      ...item,
      orderedProducts:
        orderedProductsCount === 1
          ? `${orderedProductsName[0]}`
          : `${orderedProductsName[0]} 외 ${orderedProductsCount - 1}건`,
      orderDetailLink: (
        <OrderDetailLink
          orderId={item.id}
          salesId={item.salesId}
          label="주문 상세보기 >"
          type="order"
          href="/mypage/order-detail"
        />
      ),
    };
  });
};

// const MyOrdersMockData = [
//   {
//     id: 31,
//     salesId: 2,
//     title: '방탄 굿즈 이것저것 팔아요',
//     orderedProducts: {
//       '지민 키링': 1,
//       '정국 폰케이스': 2,
//       '방탕 포토카드': 1,
//     },
//     price: 23000,
//     status: '입금확인중',
//     createdAt: '2023-08-12',
//   },
//   {
//     id: 33,
//     salesId: 2,
//     title: '스트레이키즈 굿즈 총 모음집',
//     orderedProducts: {
//       '스트레이키즈 포카': 3,
//     },
//     price: 23000,
//     status: '배송준비중',
//     createdAt: '2023-06-24',
//   },
//   {
//     id: 35,
//     salesId: 2,
//     title: '세븐틴 떡메 모음',
//     orderedProducts: {
//       '호시 포카': 1,
//       '세븐틴 키링': 1,
//       '세븐틴 스티커': 4,
//     },
//     price: 33800,
//     status: '배송준비중',
//     createdAt: '2023-06-01',
//   },
//   {
//     id: 23,
//     salesId: 2,
//     title: '아이브(IVE) 슬로건 - 15종',
//     orderedProducts: {
//       '장원영 인형': 1,
//       '아이브 응원봉': 2,
//       '아이브 포카': 2,
//       '아이브 dvd': 2,
//     },
//     price: 10000,
//     status: '배송완료',
//     createdAt: '2023-03-20',
//   },
//   {
//     id: 13,
//     salesId: 2,
//     title: '아이들 IDLE 폰케이스 2종 Pink/Green',
//     orderedProducts: {
//       '아이들 응원봉': 1,
//     },
//     price: 32100,
//     status: '배송중',
//     createdAt: '2023-01-14',
//   },
// ];
