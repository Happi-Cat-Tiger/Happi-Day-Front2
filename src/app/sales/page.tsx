'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import LinkButton from '@/components/Button/LinkButton';
import Link from 'next/link';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import '../../styles/global.css';
import EncourageSubscription from '@/containers/sales/EncourageSubscription';
import SalesInputElements from '@/containers/sales/SalesInputElements';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { salesSearchState, salesSortList, salesSearchFilter } from '@/atom/salesAtom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useGetSalesCategoriesListService } from '@/hooks/queries/sales/salesService';
import { PostContent } from '@/types/sales';
import { LoginState } from '@/atom/LoginState';

const Page = () => {
  const { data } = useGetSalesCategoriesListService({ categoryId: 1 });
  console.log('data', data);

  const isLoggedIn = useRecoilValue(LoginState);

  const apiData = data?.content;

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemsPerPageGrid, setItemsPerPageGrid] = useState(5);
  const [loading] = useState(false);
  const salesSearch = useRecoilValue(salesSearchState);
  const salesSortValue = useRecoilValue<string>(salesSortList);
  const searchFilterValue = useRecoilValue<string>(salesSearchFilter);
  const [selectedCategory, setSelectedCategory] = useState<'goods' | 'groupbuy'>('goods');
  const [, setWriteValue] = useRecoilState(writeState);
  const [, setWritingInfoValue] = useRecoilState(writingInfoState);

  const resetSearchState = useResetRecoilState(salesSearchState);
  const resetSortList = useResetRecoilState(salesSortList);
  const resetSearchFilter = useResetRecoilState(salesSearchFilter);

  const filteredItem: PostContent[] = (apiData || []).filter((el: PostContent) =>
    searchFilterValue === 'name'
      ? el.name.includes(salesSearch)
      : searchFilterValue === 'artists'
        ? el.artists.includes(salesSearch)
        : false,
  );

  const sortedItem = filteredItem.sort((a, b) => {
    return salesSortValue === 'new'
      ? new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
      : new Date(b.startTime).getTime() - new Date(a.startTime).getTime();
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 1148) {
        setItemsPerPage(10);
        setItemsPerPageGrid(5);
      }
      if (windowWidth <= 1148 && windowWidth > 980) {
        setItemsPerPage(8);
        setItemsPerPageGrid(4);
      }
      if (windowWidth <= 980 && windowWidth > 720) {
        setItemsPerPage(6);
        setItemsPerPageGrid(3);
      }
      if (windowWidth <= 720) {
        setItemsPerPage(4);
        setItemsPerPageGrid(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setSelectedCategory('goods');
    resetSearchState();
    resetSortList();
    resetSearchFilter();
  }, [resetSearchState, resetSortList, resetSearchFilter]);

  const handleCategoryClick = (clickedCategory: 'goods' | 'groupbuy') => {
    setSelectedCategory(clickedCategory);
    resetSearchState();
    resetSortList();
    resetSearchFilter();
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const currentCategoryItems = sortedItem.filter((el) => {
    return selectedCategory === 'goods' ? el.salesCategory === '굿즈' : el.salesCategory === '공구';
  });

  const totalItemsCount = currentCategoryItems.length;
  const indexOfLastPost = page * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = currentCategoryItems.slice(indexOfFirstPost, indexOfLastPost);

  const pageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="grid w-full px-[8px] md:max-w-[1024px]">
      <div className="flex">
        <div
          className={`prose-h6 cursor-pointer p-2 md:prose-h4 ${
            selectedCategory === 'goods' ? 'text-orange-500 underline' : ''
          }`}
          onClick={() => handleCategoryClick('goods')}>
          굿즈
        </div>
        <div
          className={`prose-h6 cursor-pointer p-2 md:prose-h4 ${
            selectedCategory === 'groupbuy' ? 'text-orange-500 underline' : ''
          }`}
          onClick={() => handleCategoryClick('groupbuy')}>
          공구
        </div>
      </div>
      <EncourageSubscription />
      <SalesInputElements />
      {filteredItem.length === 0 ? (
        <div className="flex flex-col items-center gap-[5px] text-gray5">
          <AiOutlineSearch style={{ fontSize: 80, color: '#9CA3AF', marginBottom: 10 }} />
          <p>검색결과가 존재하지 않습니다.</p>
          <p>다시 검색해주세요 !</p>
        </div>
      ) : (
        <div className={`grid grid-cols-${itemsPerPageGrid} max-w-[1280px] grid-rows-2 gap-2.5`}>
          {currentPosts.map((el: PostContent, idx: number) => (
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
          totalItemsCount={totalItemsCount}
          pageChange={pageChange}
          countPerPage={itemsPerPage}
        />
      </div>
      {isLoggedIn && (
        <div className="flex justify-end">
          <Link href="/sales/write" passHref legacyBehavior>
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
      )}
    </div>
  );
};

export default Page;

// const mockData: PostContent[] = [
//   {
//     salesCategory: '굿즈',
//     id: 1,
//     thumbnailImage: 'https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png',
//     name: '뉴진스 굿즈',
//     artists: '뉴진스',
//     startTime: new Date(2024, 2, 18),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 1,
//     viewCount: 1,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '굿즈',
//     id: 2,
//     thumbnailImage: 'https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg',
//     name: '뉴진스 굿즈',
//     artists: '뉴진스',
//     startTime: new Date(2024, 2, 17),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 2,
//     viewCount: 2,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '굿즈',
//     id: 3,
//     thumbnailImage: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png',
//     name: '뉴진스 굿즈',
//     artists: '뉴진스',
//     startTime: new Date(2024, 2, 16),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 3,
//     viewCount: 3,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '굿즈',
//     id: 4,
//     thumbnailImage:
//       'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg',
//     name: '뉴진스 굿즈',
//     artists: '뉴진스',
//     startTime: new Date(2024, 2, 15),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 4,
//     viewCount: 4,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '굿즈',
//     id: 5,
//     thumbnailImage:
//       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
//     name: '뉴진스 굿즈',
//     artists: '뉴진스',
//     startTime: new Date(2024, 2, 14),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 5,
//     viewCount: 5,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '굿즈',
//     id: 6,
//     thumbnailImage:
//       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
//     name: '뉴진스 굿즈',
//     artists: '뉴진스',
//     startTime: new Date(2024, 2, 13),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 5,
//     viewCount: 5,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '공구',
//     id: 7,
//     thumbnailImage:
//       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
//     name: '에스파 공구',
//     artists: '에스파',
//     startTime: new Date(2024, 2, 12),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 5,
//     viewCount: 5,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '공구',
//     id: 8,
//     thumbnailImage:
//       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
//     name: '에스파 공구',
//     artists: '에스파',
//     startTime: new Date(2024, 2, 20),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 5,
//     viewCount: 5,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '공구',
//     id: 9,
//     thumbnailImage:
//       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
//     name: '에스파 공구',
//     artists: '에스파',
//     startTime: new Date(2024, 2, 19, 15, 30, 0),
//     endTime: new Date(2024, 2, 20, 15, 30, 0),
//     orderNum: 2,
//     likeNum: 5,
//     viewCount: 5,
//     hashtags: ['뉴진스'],
//   },
//   {
//     salesCategory: '공구',
//     id: 10,
//     thumbnailImage:
//       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
//     name: '에스파 공구',
//     artists: '에스파',
//     startTime: new Date(2024, 2, 17),
//     endTime: new Date(2024, 2, 20),
//     orderNum: 2,
//     likeNum: 5,
//     viewCount: 5,
//     hashtags: ['뉴진스', '어쩌구'],
//   },
// ];
