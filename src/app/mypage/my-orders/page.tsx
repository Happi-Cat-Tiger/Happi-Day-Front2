'use client ';
import React from 'react';
import Link from 'next/link';
import Table from '@/containers/mypage/Table';
import { MY_ORDERS_TABLE_HEAD } from '@/constants/mypage';
import { ResultOrdersGoods } from '@/types/mypage';

const OrdersDetailLink = ({ id, label, href }: { id: number; label: string; href: string }) => (
  <Link href={`${href}/${id}`} passHref>
    <div className="prose-btn-XXS rounded-2xl  text-gray4 focus:outline-none disabled:bg-gray6 ">{label}</div>
  </Link>
);

//API 호출
//path : /user/orders
//data : id, name, price, orderStatus, orderAt, thubnailImage

//주문 상세 내역 호출 -> 성공 -> 주문 상세 내역으로 이동

const MyOrdersMockData = [
  {
    id: 31,
    title: '방탄 굿즈 이것저것 팔아요',
    orderedProducts: '1번 인형 외 2건',
    price: '23000',
    status: '입금확인중',
    createdAt: '2023-08-12',
  },
  {
    id: 33,
    title: '스트레이키즈 굿즈 총 모음집',
    orderedProducts: '1번 인형 외 2건',
    price: '23000',
    status: '배송준비중',
    createdAt: '2023-06-24',
  },
  {
    id: 35,

    title: '세븐틴 떡메 모음',
    orderedProducts: '1번 인형 외 2건',
    price: '23000',
    status: '배송준비중',
    createdAt: '2023-06-01',
  },
  {
    id: 23,
    title: '아이브(IVE) 슬로건 - 15종',
    orderedProducts: '1번 인형 외 2건',
    price: '23000',
    status: '배송완료',
    createdAt: '2023-03-20',
  },
  {
    id: 13,
    title: '아이들 IDLE 폰케이스 2종 Pink/Green',
    orderedProducts: '1번 인형 외 2건',
    price: '23000',
    status: '배송중',
    createdAt: '2023-01-14',
  },
];

const addOrderDetailLink = (data: ResultOrdersGoods[]) => {
  return data?.map((item) => ({
    ...item,
    orderDetailLink: <OrdersDetailLink id={item.id} label="주문 상세보기 >" href="/mypage/my-sales/order-goods/" />,
  }));
};

const Page = () => {
  const modifiedData = addOrderDetailLink(MyOrdersMockData);
  return (
    <div className="w-full">
      <Table TABLE_HEAD={MY_ORDERS_TABLE_HEAD} TABLE_ROWS={modifiedData} />
    </div>
  );
};

export default Page;
