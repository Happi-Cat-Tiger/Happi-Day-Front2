'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import '../../styles/global.css';
import Link from 'next/link';
import EventGuide from '@/containers/events/EventGuide';
import InputElements from '@/containers/events/InputElements';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { useRecoilValue } from 'recoil';
import { AiOutlineSearch, AiOutlineSend } from 'react-icons/ai';
import { getAllEvents, getOngoingEvents } from '@/hooks/queries/events/eventsService';
import { eventsSearchState, eventsSortList, eventsSearchFilter } from '@/atom/eventsAtom';
import { useRouter } from 'next/navigation';

interface EventsList {
  id: number;
  thumbnailUrl: string;
  title: string;
  artists: string;
  location: string;
  startTime: string;
  endTime: string;
  updatedAt: string;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  reveiwCount: number;
  teams?: [];
  hashtags: [];
  nickname: string;
}

const page = () => {
  const { data } = getAllEvents();
  // const { data } = getOngoingEvents();

  const apiData = data?.content;

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const postPerPage = itemsPerPage;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [gridCols, setGridCols] = useState('grid-cols-5');

  const eventsSearch = useRecoilValue(eventsSearchState);
  const eventSort = useRecoilValue<string>(eventsSortList);

  const [loading] = useState(false);
  const router = useRouter();
  const eventsSortValue = useRecoilValue<string>(eventsSortList);
  const searchFilterValue = useRecoilValue<string>(eventsSearchFilter);

  const filteredItem: EventsList[] = apiData?.filter((el: EventsList) =>
    searchFilterValue === 'title'
      ? el.title.includes(eventsSearch)
      : searchFilterValue === 'artist'
        ? el.artists.includes(eventsSearch)
        : null,
  );

  const pageChange = (page: number) => {
    setPage(page);
  };

  // 반응형에 따른 페이지네이션 아이템 개수
  useEffect(() => {
    const handleResize = () => {
      let innerWidth = window.innerWidth;
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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const sortedItem = filteredItem?.sort((a, b) => {
    return eventSort === 'new'
      ? new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
      : new Date(b.startTime).getTime() - new Date(a.startTime).getTime();
  });

  const getDate = (value: string) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${(month < 10 ? '0' : '') + month}.${(day < 10 ? '0' : '') + day}`;
  };

  const eventsWriteButton = () => {
    router.push('events/write');
  };

  return (
    <div className="px-[8px]">
      <EventGuide />
      <div className="my-[60px] flex items-center justify-end">
        <span className="mr-[20px] underline sm:prose-subtitle-S md:prose-subtitle-M">
          주최 관련 이벤트도 보고싶다면?
        </span>
        <Link href="/board" className="flex gap-[10px] text-orange1 sm:prose-h6 md:prose-h5">
          <span>주최 게시판 바로가기</span>
          <AiOutlineSend />
        </Link>
      </div>
      <InputElements />
      {sortedItem?.length === 0 ? (
        <div className="flex flex-col items-center gap-[5px] text-gray5">
          <AiOutlineSearch style={{ fontSize: 80, color: '#9CA3AF', marginBottom: 10 }} />
          <p>검색결과가 존재하지 않습니다.</p>
          <p>다시 검색해주세요 !</p>
        </div>
      ) : (
        <div className={`grid ${gridCols} max-w-[1280px] grid-rows-2 justify-items-center gap-[10px]`}>
          {sortedItem
            ?.slice(indexOfFirstPost, indexOfLastPost)
            .map((el: EventsList, idx: number) => (
              <Card
                key={idx}
                id={el.id}
                cardType="events"
                thumbnailUrl={el.thumbnailUrl}
                title={el.title}
                artist={el.artists}
                location={el.location}
                startTime={getDate(el.startTime)}
                endTime={getDate(el.endTime)}
                address={el.location}
                likeCount={el.likeCount}
                commentCount={el.commentCount}
                viewCount={el.viewCount}
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
      <div className="text-right">
        <PrimaryButton label="글쓰기" onClick={eventsWriteButton} />
      </div>
    </div>
  );
};

export default page;
