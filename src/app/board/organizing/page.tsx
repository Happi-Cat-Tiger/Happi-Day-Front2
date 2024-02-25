'use client';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import LinkButton from '@/components/Button/LinkButton';
import Card from '@/components/Card';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { BOARD_CATEGORY } from '@/constants/board';
import SubBanner from 'public/images/subscriptionBanner.png';
import Image from 'next/image';
import HorizontalLinkList from '@/components/List/HorizontalLinkList';

const OrganizingPage = () => {
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
    <div className="flex w-full flex-col gap-[40px] px-2 md:gap-[60px] md:px-0">
      <Image src={SubBanner} alt="구독 배너" className="h-auto w-screen" priority />
      <HorizontalLinkList category={BOARD_CATEGORY} />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 place-items-center md:grid-cols-5">
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
        <PaginationComponent countPerPage={postPerPage} page={page} totalItemsCount={20} pageChange={pageChange} />
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
    </div>
  );
};

export default OrganizingPage;
