'use client';
import React, { useState } from 'react';
import Card from '@/components/Card';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import '../../styles/global.css';
import Link from 'next/link';
import EventGuide from '@/containers/events/EventGuide';
import InputElements from '@/containers/events/InputElements';
import PrimaryButton from '@/components/Button/PrimaryButton';

const page = () => {
  const paginationMock = [
    { id: 1, page: 1 },
    { id: 2, page: 2 },
    { id: 3, page: 3 },
    { id: 4, page: 4 },
    { id: 5, page: 5 },
    { id: 6, page: 6 },
    { id: 7, page: 7 },
    { id: 8, page: 8 },
    { id: 9, page: 9 },
    { id: 10, page: 10 },
    { id: 11, page: 11 },
    { id: 12, page: 12 },
    { id: 13, page: 13 },
    { id: 14, page: 14 },
    { id: 15, page: 15 },
  ];

  const [page, setPage] = useState(1);
  const postPerPage = 10;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const [loading, setLoading] = useState(false);

  const pageChange = (page: number) => {
    setPage(page);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <EventGuide />
      <div className="my-[60px] text-right">
        <span className="prose-subtitle-M mr-[20px] underline">주최 관련 이벤트도 보고싶다면?</span>
        <Link href="/board" className="prose-h5 text-orange1">
          주최 게시판 바로가기
        </Link>
      </div>
      <InputElements />
      <div className="grid grid-cols-5 grid-rows-2 gap-10">
        {paginationMock.slice(indexOfFirstPost, indexOfLastPost).map((el) => (
          <Card
            key={el.id}
            id={el.page}
            cardType="events"
            thumbnailUrl="null"
            title="test"
            artist="test"
            location="test"
            startTime="test"
            endTime="test"
            address="test"
            likeCount={el.page}
            commentCount={el.page}
            viewCount={el.page}
          />
        ))}
      </div>
      <div className="my-[100px] text-center">
        <PaginationComponent page={page} totalItemsCount={paginationMock.length} pageChange={pageChange} />
      </div>
      <div className="text-right">
        <PrimaryButton label="글쓰기" onClick={() => null} />
      </div>
    </div>
  );
};

export default page;
