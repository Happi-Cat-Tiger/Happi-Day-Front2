'use client ';
import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import Link from 'next/link';
import Table from '@/containers/mypage/Table';

const MY_SALES_TABLE_HEAD = [
  { category: '카테고리' },
  { title: '글제목' },
  { createdAt: '날짜' },
  { orderCount: '주문수' },
  { orderDetail: '주문 상세보기' },
];

const Button = ({ id }) => (
  <Link href={`/mypage/profile/${id}`} passHref legacyBehavior>
    <LinkButton
      label="주문 상세보기 >"
      href="#"
      className="prose-btn-XXS rounded-2xl  text-gray4 focus:outline-none disabled:bg-gray6 "
    />
  </Link>
);

const MySalesMockData = [
  {
    id: 31,
    category: '굿즈',
    title: '방탄 굿즈 이것저것 팔아요',
    orderCount: 2,
    createdAt: '2022-08-12',
  },
  {
    id: 33,
    category: '굿즈',
    title: '방탄 굿즈 이것저것 팔아요',
    orderCount: 2,
    createdAt: '2022-08-12',
  },
  {
    id: 35,
    category: '굿즈',
    title: '방탄 굿즈 이것저것 팔아요',
    orderCount: 2,
    createdAt: '2022-08-12',
  },
  {
    id: 23,
    category: '굿즈',
    title: '방탄 굿즈 이것저것 팔아요',
    orderCount: 2,
    createdAt: '2022-08-12',
  },
  {
    id: 13,
    category: '굿즈',
    title: '방탄 굿즈 이것저것 팔아요',
    orderCount: 2,
    createdAt: '2022-08-12',
  },
];
const addOrderDetailButton = (MySalesMockData) => {
  return MySalesMockData?.map((x) => ({ ...x, orderDetail: <Button id={x.id} /> }));
};

const Page = () => {
  const modifiedData = addOrderDetailButton(MySalesMockData);
  return (
    <div className="w-full">
      <Table TABLE_HEAD={MY_SALES_TABLE_HEAD} TABLE_ROWS={addOrderDetailButton(modifiedData)} />
    </div>
  );
};

export default Page;
