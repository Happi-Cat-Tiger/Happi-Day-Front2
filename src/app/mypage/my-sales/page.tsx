import React from 'react';
import Link from 'next/link';
import Table from '@/containers/mypage/Table';
import { MY_SALES_POST_TABLE_HEAD } from '@/constants/mypage';
import { SalesPostList } from '@/types/sales';
import { getSalesPostListService } from '@/hooks/queries/sales/salesService';

const Page = () => {
  const { data: salesPostList } = getSalesPostListService();
  const modifiedData = salesPostList && modifyDataForSalesTable(salesPostList);
  if (!salesPostList) {
    return <div>판매 내역 없음</div>;
  }
  return (
    modifiedData && (
      <div className="flex w-full flex-col gap-5">
        <div className="prose prose-h4">판매글 목록</div>
        <Table TABLE_HEAD={MY_SALES_POST_TABLE_HEAD} TABLE_ROWS={modifiedData} />
      </div>
    )
  );
};

export default Page;

const modifyDataForSalesTable = (data: SalesPostList[]) => {
  return data?.map((item) => ({
    ...item,
    orderDetailLink: <SalesDetailLink salesId={item.id} label="판매 내역 보기 >" href="/mypage/my-sales" />,
  }));
};

const SalesDetailLink = ({ salesId, label, href }: { salesId: number; label: string; href: string }) => (
  <Link href={`${href}/${salesId}`} passHref>
    {label}
  </Link>
);

const MySalesMockData = [
  {
    id: 31,
    salesCategory: '굿즈',
    title: '방탄 굿즈 이것저것 팔아요',
    orderCount: 11,
    createdAt: '2023-08-12',
  },
  {
    id: 33,
    salesCategory: '굿즈',
    title: '스트레이키즈 굿즈 총 모음집',
    orderCount: 4,
    createdAt: '2023-06-24',
  },
  {
    id: 35,
    salesCategory: '굿즈',
    title: '세븐틴 떡메 모음',
    orderCount: 42,
    createdAt: '2023-06-01',
  },
  {
    id: 23,
    salesCategory: '굿즈',
    title: '아이브(IVE) 슬로건 - 15종',
    orderCount: 2,
    createdAt: '2023-03-20',
  },
  {
    id: 13,
    salesCategory: '굿즈',
    title: '아이들 IDLE 폰케이스 2종 Pink/Green',
    orderCount: 32,
    createdAt: '2023-01-04',
  },
];
