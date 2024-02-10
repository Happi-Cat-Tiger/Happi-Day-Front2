'use client';

import React, { useState } from 'react';
import Table from '@/containers/mypage/Table';
import { MY_SALES_PRODUCTS_TABLE_HEAD } from '@/constants/mypage';
import { SalesProductList } from '@/types/sales';
import { OrderDetailLink } from '@/containers/mypage/mygoods/OrderdetailLink';
import { getSalesProductListService } from '@/hooks/queries/sales/salesService';

const Page = ({ params }: { params: { salesId: string } }) => {
  const salesId: number = parseInt(params.salesId, 10);

  const { data: data } = getSalesProductListService({ salesId });

  const [salesProductList, setSalesProductList] = useState([]);

  const modifiedData = modifyDataForOrderTable(salesPostListMockData, salesId);

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="prose prose-h4">판매 내역</div>
      <Table TABLE_HEAD={MY_SALES_PRODUCTS_TABLE_HEAD} TABLE_ROWS={modifiedData} />
    </div>
  );
};

export default Page;

const modifyDataForOrderTable = (data: SalesProductList[], salesId: number) => {
  return data?.map((item) => {
    const orderedProductsName = Object.keys(item.orderedProducts);
    const orderedProductsCount = orderedProductsName.length;

    return {
      ...item,
      orderedProducts:
        orderedProductsCount === 1
          ? `${orderedProductsName[0]}`
          : `${orderedProductsName[0]} 외 ${orderedProductsCount - 1}건`,
      orderDetailLink: salesId !== null && (
        <OrderDetailLink
          orderId={item.id}
          salesId={salesId}
          label="주문 상세보기 >"
          href="/mypage/order-detail"
          type="sales"
        />
      ),
    };
  });
};

const salesPostListMockData = [
  {
    id: 31,
    username: '유재석',
    orderedProducts: {
      '지민 키링': 1,
      '정국 폰케이스': 2,
      '방탕 포토카드': 1,
    },
    price: 23000,
    orderStatus: '입금확인중',
    orderAt: '2024-01-23 20:52',
  },
  {
    id: 33,
    username: '유재석',
    orderedProducts: {
      '스트레이키즈 포카': 3,
    },
    price: 23000,
    orderStatus: '배송준비중',
    orderAt: '2024-01-23 20:52',
  },
  {
    id: 35,
    username: '최우식',
    orderedProducts: {
      '호시 포카': 1,
      '세븐틴 키링': 1,
      '세븐틴 스티커': 4,
    },
    price: 33800,
    orderStatus: '배송준비중',
    orderAt: '2024-01-23 20:52',
  },
  {
    id: 23,
    username: '박보영',
    orderedProducts: {
      '장원영 인형': 1,
      '아이브 응원봉': 2,
      '아이브 포카': 2,
      '아이브 dvd': 2,
    },
    price: 10000,
    orderStatus: '배송완료',
    orderAt: '2024-01-23 20:52',
  },
  {
    id: 13,
    username: '신세경',
    orderedProducts: {
      '아이들 응원봉': 1,
    },
    price: 32100,
    orderStatus: '배송중',
    orderAt: '2024-01-23 20:52',
  },
];
