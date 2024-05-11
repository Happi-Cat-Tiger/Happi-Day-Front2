'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import LinkButton from '@/components/Button/LinkButton';
import Link from 'next/link';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import '../../../styles/global.css';
import EncourageSubscription from '@/containers/sales/EncourageSubscription';
import SalesInputElements from '@/containers/sales/SalesInputElements';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { salesSearchState, salesSortList, salesSearchFilter } from '@/atom/salesAtom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useGetSalesCategoriesListService } from '@/hooks/queries/sales/salesService';
import { PostContent } from '@/types/sales';
import { LoginState } from '@/atom/LoginState';
import { categoryIdState } from '@/atom/salesAtom';

const Page = () => {
  const categoryIdValue = useRecoilValue(categoryIdState);
  const { data } = useGetSalesCategoriesListService({ categoryId: categoryIdValue });

  const isLoggedIn = useRecoilValue(LoginState);

  const apiData = data?.content;

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const postPerPage = itemsPerPage;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [gridCols, setGridCols] = useState('grid-cols-5');

  const [loading] = useState(false);
  const salesSearch = useRecoilValue(salesSearchState);
  const salesSortValue = useRecoilValue<string>(salesSortList);
  const searchFilterValue = useRecoilValue<string>(salesSearchFilter);
  const [categoryId, setCategoryId] = useRecoilState(categoryIdState);
  const [, setWriteValue] = useRecoilState(writeState);
  const [, setWritingInfoValue] = useRecoilState(writingInfoState);

  const resetSearchState = useResetRecoilState(salesSearchState);
  const resetSortList = useResetRecoilState(salesSortList);
  const resetSearchFilter = useResetRecoilState(salesSearchFilter);

  const filteredItem: PostContent[] = (apiData || []).filter((el: PostContent) =>
    searchFilterValue === 'name'
      ? el.name.includes(salesSearch)
      : searchFilterValue === 'artist'
        ? el.artists.includes(salesSearch)
        : false,
  );

  const pageChange = (page: number) => {
    setPage(page);
  };

  const sortedItem = filteredItem.sort((a, b) => {
    return salesSortValue === 'new'
      ? new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
      : new Date(b.startTime).getTime() - new Date(a.startTime).getTime();
  });

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth > 1148) {
        setItemsPerPage(10);
        setGridCols('grid-cols-5');
      } else if (innerWidth <= 1148 && innerWidth > 980) {
        setItemsPerPage(8);
        setGridCols('grid-cols-4');
      } else if (innerWidth <= 980 && innerWidth > 720) {
        setItemsPerPage(9);
        setGridCols('grid-cols-3');
      } else if (innerWidth <= 720) {
        setItemsPerPage(10);
        setGridCols('grid-cols-2');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setCategoryId(1);
    resetSearchState();
    resetSortList();
    resetSearchFilter();

    window.history.pushState(null, '', '/sales/1');
  }, [resetSearchState, resetSortList, resetSearchFilter]);

  const handleCategoryClick = (categoryIdValue: number) => {
    setCategoryId(categoryIdValue);
    resetSearchState();
    resetSortList();
    resetSearchFilter();

    if (categoryIdValue === 1) {
      window.history.pushState(null, '', '/sales/1');
    } else if (categoryIdValue === 2) {
      window.history.pushState(null, '', '/sales/2');
    }
  };

  return (
    <div className="w-full px-[8px] md:max-w-[1024px]">
      <div className="flex">
        <div
          className={`prose-h6 cursor-pointer p-2 md:prose-h4 ${categoryId === 1 ? 'text-orange-500 underline' : ''}`}
          onClick={() => handleCategoryClick(1)}>
          굿즈
        </div>
        <div
          className={`prose-h6 cursor-pointer p-2 md:prose-h4 ${categoryId === 2 ? 'text-orange-500 underline' : ''}`}
          onClick={() => handleCategoryClick(2)}>
          공구
        </div>
      </div>
      <EncourageSubscription />
      <SalesInputElements />
      {apiData?.length === 0 ? (
        <div className="flex flex-col items-center gap-[5px] text-gray5">
          <AiOutlineSearch style={{ fontSize: 80, color: '#9CA3AF', marginBottom: 10 }} />
          <p>검색결과가 존재하지 않습니다.</p>
          <p>다시 검색해주세요 !</p>
        </div>
      ) : (
        <div className={`grid ${gridCols} max-w-[1280px] grid-rows-2 justify-items-center gap-[10px]`}>
          {apiData?.map((el: PostContent, idx: number) => (
            <Card
              key={idx}
              id={el.id}
              cardType="sales"
              categoryId={el.salesCategory === '굿즈' ? 1 : 2}
              thumbnailUrl={el.thumbnailImage}
              title={el.name}
              artist={el.artists}
              startTime={el.startTime}
              endTime={el.endTime}
              joinMember={el.orderNum}
              likeCount={el.likeNum}
              commentCount={0}
              viewCount={el.viewCount}
              hashtags={el.hashtags}
            />
          ))}
        </div>
      )}
      <div className="my-[100px] text-center">
        <PaginationComponent
          page={page}
          totalItemsCount={sortedItem.length}
          pageChange={pageChange}
          countPerPage={itemsPerPage}
        />
      </div>
      {/* {isLoggedIn && ( */}
      <div className="flex justify-end">
        <Link href={`/sales/write`} passHref legacyBehavior>
          <LinkButton
            label="글쓰기"
            href="#"
            className="prose-btn-M rounded-2xl bg-orange2 px-5 py-3 text-white md:prose-btn-L hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
            onClick={() => {
              setWriteValue(writeInitState);
              setWritingInfoValue(writingInfoInitState);
            }}
          />
        </Link>
      </div>
      {/* )} */}
    </div>
  );
};

export default Page;
