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
import { eventsSearchState, eventsSortState } from '@/atom/eventsAtom';
import { AiOutlineSearch, AiOutlineSend } from 'react-icons/ai';
import { getAllEvents, getOngoingEvents } from '@/hooks/queries/events/eventsService';

// interface MockData {
//   id: number;
//   thumbnailUrl: string;
//   title: string;
//   artist: string;
//   place: string;
//   startDate: string;
//   endDate: string;
//   location: string;
//   like: number;
//   comment: number;
//   view: number;
//   joinCount: number;
// }

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
  // const mockData = [
  //   {
  //     id: 1,
  //     thumbnailUrl: 'https://www.fitpetmall.com/wp-content/uploads/2023/10/230420-0668-1.png',
  //     title: '방탄소년단 생일 카페1',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.01',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 1,
  //     comment: 1,
  //     view: 1,
  //     joinCount: 1,
  //   },
  //   {
  //     id: 2,
  //     thumbnailUrl: 'https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg',
  //     title: '방탄소년단 생일 카페2',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.02',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 2,
  //     comment: 2,
  //     view: 2,
  //     joinCount: 2,
  //   },
  //   {
  //     id: 3,
  //     thumbnailUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png',
  //     title: '방탄소년단 생일 카페3',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.03',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 3,
  //     comment: 3,
  //     view: 3,
  //     joinCount: 3,
  //   },
  //   {
  //     id: 4,
  //     thumbnailUrl:
  //       'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg',
  //     title: '방탄소년단 생일 카페4',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.04',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 4,
  //     comment: 4,
  //     view: 4,
  //     joinCount: 4,
  //   },
  //   {
  //     id: 5,
  //     thumbnailUrl:
  //       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
  //     title: '방탄소년단 생일 카페5',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.05',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 5,
  //     comment: 5,
  //     view: 5,
  //     joinCount: 5,
  //   },
  //   {
  //     id: 6,
  //     thumbnailUrl:
  //       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
  //     title: '방탄소년단 생일 카페6',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.06',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 5,
  //     comment: 5,
  //     view: 5,
  //     joinCount: 5,
  //   },
  //   {
  //     id: 7,
  //     thumbnailUrl:
  //       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
  //     title: '방탄소년단 생일 카페7',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.07',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 5,
  //     comment: 5,
  //     view: 5,
  //     joinCount: 5,
  //   },
  //   {
  //     id: 8,
  //     thumbnailUrl:
  //       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
  //     title: '방탄소년단 생일 카페8',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.08',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 5,
  //     comment: 5,
  //     view: 5,
  //     joinCount: 5,
  //   },
  //   {
  //     id: 9,
  //     thumbnailUrl:
  //       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
  //     title: '방탄소년단 생일 카페9',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.09',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 5,
  //     comment: 5,
  //     view: 5,
  //     joinCount: 5,
  //   },
  //   {
  //     id: 10,
  //     thumbnailUrl:
  //       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
  //     title: '방탄소년단 생일 카페10',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.10',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 5,
  //     comment: 5,
  //     view: 5,
  //     joinCount: 5,
  //   },
  //   {
  //     id: 11,
  //     thumbnailUrl:
  //       'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/i16oISROMcKXVyuQUWEY26qjF5E.jpg',
  //     title: '방탄소년단 생일 카페11',
  //     artist: '방탄소년단',
  //     place: '용산 슈퍼스타 떡볶이',
  //     startDate: '2023.12.11',
  //     endDate: '2023.12.05',
  //     location: '서울시 용산구',
  //     like: 5,
  //     comment: 5,
  //     view: 5,
  //     joinCount: 5,
  //   },
  // ];

  const { data } = getAllEvents();
  // const { data } = getOngoingEvents();

  const apiData = data?.content;

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const postPerPage = itemsPerPage;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [gridCols, setGridCols] = useState('grid-cols-5');

  const [loading, setLoading] = useState(false);
  const eventsSearch = useRecoilValue(eventsSearchState);
  const eventSort = useRecoilValue<string>(eventsSortState);

  const filteredItem: EventsList[] = apiData?.filter((el: EventsList) => el.title.includes(eventsSearch));

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
                startTime={el.startTime}
                endTime={el.endTime}
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
          totalItemsCount={filteredItem?.length}
          pageChange={pageChange}
          countPerPage={itemsPerPage}
        />
      </div>
      <div className="text-right">
        <PrimaryButton label="글쓰기" onClick={() => null} />
      </div>
    </div>
  );
};

export default page;
