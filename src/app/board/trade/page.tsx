'use client';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import LinkButton from '@/components/Button/LinkButton';
import Card from '@/components/Card';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const TradePage = () => {
  const [page, setPage] = useState(1);
  const postPerPage = 10;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const pageChange = (page: number) => {
    setPage(page);
  };

  const [, setWriteValue] = useRecoilState(writeState);
  const [, setWritingInfoValue] = useRecoilState(writingInfoState);

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden">
      <div className="grid h-full grid-cols-2 place-items-center md:min-w-[1100px] md:grid-cols-5">
        {new Array(20)
          .fill(0)
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((v, i) => (
            <Card
              key={i}
              id={1}
              cardType="events"
              thumbnailUrl=""
              title="카드"
              artist="세븐틴"
              location="장소"
              startTime="2020"
              endTime="2021"
              address="지역"
              joinMember={10}
              likeCount={100}
              commentCount={11}
              viewCount={66}
            />
          ))}
      </div>
      <PaginationComponent page={page} totalItemsCount={20} pageChange={pageChange} />
      <div className="flex justify-end">
        <Link href="/board/write" passHref legacyBehavior>
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
    </div>
  );
};

export default TradePage;
