'use client ';
import React from 'react';
import Link from 'next/link';
import Table from '@/containers/mypage/Table';
import { MY_SALES_TABLE_HEAD } from '@/constants/mypage';
import { ResultSalesGoods } from '@/types/mypage';

const SalesDetailLink = ({
  orderId,
  salesId,
  label,
  href,
}: {
  orderId: number;
  salesId: number;
  label: string;
  href: string;
}) => (
  <Link href={`${href}/detail?orderId=${orderId}&salesId=${salesId}`} passHref>
    {label}
  </Link>
);

//API 호출
//path : /user/sales
//data : id, salesCategory, name, user, likeNum, orderCount, thubnailImage

//주문 내역 데이터(판매) 호출 -> 성공 -> 주문 내역으로 이동

const MySalesMockData = [
  {
    id: 31,
    salesId: 2,
    category: '굿즈',
    title: '방탄 굿즈 이것저것 팔아요',
    orderCount: 11,
    createdAt: '2023-08-12',
  },
  {
    id: 33,
    salesId: 3,
    category: '굿즈',
    title: '스트레이키즈 굿즈 총 모음집',
    orderCount: 4,
    createdAt: '2023-06-24',
  },
  {
    id: 35,
    salesId: 4,
    category: '굿즈',
    title: '세븐틴 떡메 모음',
    orderCount: 42,
    createdAt: '2023-06-01',
  },
  {
    id: 23,
    salesId: 5,
    category: '굿즈',
    title: '아이브(IVE) 슬로건 - 15종',
    orderCount: 2,
    createdAt: '2023-03-20',
  },
  {
    id: 13,
    salesId: 6,
    category: '굿즈',
    title: '아이들 IDLE 폰케이스 2종 Pink/Green',
    orderCount: 32,
    createdAt: '2023-01-04',
  },
];
const addOrderDetailButton = (data: ResultSalesGoods[]) => {
  return data?.map((item) => ({
    ...item,
    orderDetailLink: (
      <SalesDetailLink orderId={item.id} salesId={item.salesId} label="주문 상세보기 >" href="/mypage/my-sales/" />
    ),
  }));
};

const Page = () => {
  const modifiedData = addOrderDetailButton(MySalesMockData);
  return (
    <div className="w-full">
      <Table TABLE_HEAD={MY_SALES_TABLE_HEAD} TABLE_ROWS={modifiedData} />
    </div>
  );
};

export default Page;
