'use client';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import LinkButton from '@/components/Button/LinkButton';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import { useGetBoardCategoriesService } from '@/hooks/queries/board/boardServie';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { BOARD_CATEGORY } from '@/constants/board';
import SubBanner from 'public/images/subscriptionBanner.png';
import Image from 'next/image';
import HorizontalLinkList from '@/components/List/HorizontalLinkList';
import BoardCard from '@/components/Card/BoardCard';
import useSetPage from '@/hooks/useSetPage';
import { boardSearchState } from '@/atom/boardAtom';
import LoadingSpinner from '@/containers/loading/LoadingSpinner';
import BoardInputElements from '@/containers/board/BoardInputElements';
import { AiOutlineSearch } from 'react-icons/ai';

const EventsPage = () => {
  const [, setWriteValue] = useRecoilState(writeState);
  const [, setWritingInfoValue] = useRecoilState(writingInfoState);
  const [boardSearch, setBoardSearch] = useRecoilState(boardSearchState);

  // pagination
  const { page, postPerPage, indexOfFirstPost, indexOfLastPost, pageChange } = useSetPage();

  // api
  const { data: boardEventsData, isLoading } = useGetBoardCategoriesService({ categoryId: 2 });

  if (isLoading) return <LoadingSpinner />;

  const filteredItem = boardEventsData?.content.filter((el) => el.title.includes(boardSearch.searchValue));

  const sortedItem = filteredItem?.sort((a, b) => {
    const [aT, bT] = [new Date(a.date).getTime(), new Date(b.date).getTime()];
    return boardSearch.sort === 'new' ? aT - bT : bT - aT;
  });

  console.log(boardEventsData);

  return (
    <div className="flex w-full flex-col gap-[40px] px-2 md:gap-[60px] md:px-0">
      <Image src={SubBanner} alt="구독 배너" className="h-auto w-screen" priority />
      <HorizontalLinkList category={BOARD_CATEGORY} />
      <BoardInputElements />
      <div className="flex flex-col gap-4">
        {filteredItem?.length === 0 ? (
          <div className="flex flex-col items-center gap-[5px] text-gray5">
            <AiOutlineSearch style={{ fontSize: 80, color: '#9CA3AF', marginBottom: 10 }} />
            <p>검색결과가 존재하지 않습니다.</p>
            <p>다시 검색해주세요 !</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 place-items-center md:grid-cols-5">
            {sortedItem?.slice(indexOfFirstPost, indexOfLastPost).map((articleItem) => {
              return (
                <BoardCard
                  key={articleItem.id}
                  id={articleItem.id}
                  path="/board/events"
                  thumbnailUrl={articleItem.thumbnailUrl}
                  title={articleItem.title}
                  location="장소"
                  address="지역"
                  likeCount={100}
                  commentCount={articleItem.commentNum}
                  viewCount={articleItem.viewCount}
                />
              );
            })}
          </div>
        )}
        {boardEventsData && (
          <PaginationComponent
            countPerPage={postPerPage}
            page={page}
            totalItemsCount={boardEventsData?.totalElements}
            pageChange={pageChange}
          />
        )}

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

export default EventsPage;
