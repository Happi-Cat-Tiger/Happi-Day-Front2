'use client';
import ArticleList from '@/components/List/ArticleList';
import LinkButton from '@/components/Button/LinkButton';
import Link from 'next/link';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import { useRecoilState } from 'recoil';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import { boardSearchState } from '@/atom/boardAtom';
import { useGetBoardAllService } from '@/hooks/queries/board/boardServie';
import { BOARD_CATEGORY, BOARD_PATH } from '@/constants/board';
import SubBanner from 'public/images/subscriptionBanner.png';
import Image from 'next/image';
import HorizontalLinkList from '@/components/List/HorizontalLinkList';
import BoardInputElements from '@/containers/board/BoardInputElements';
import LoadingSpinner from '@/containers/loading/LoadingSpinner';
import useSetPage from '@/hooks/useSetPage';
import { AiOutlineSearch } from 'react-icons/ai';

const AllPage = () => {
  const [, setWriteValue] = useRecoilState(writeState);
  const [, setWritingInfoValue] = useRecoilState(writingInfoState);
  const [boardSearch, setBoardSearch] = useRecoilState(boardSearchState);

  // pagination
  const { page, postPerPage, indexOfFirstPost, indexOfLastPost, pageChange } = useSetPage();

  // api
  const { data: boardAllData, isLoading } = useGetBoardAllService();

  if (isLoading) return <LoadingSpinner />;

  const filteredItem = boardAllData?.content.filter((el) => el.title.includes(boardSearch.searchValue));

  const sortedItem = filteredItem?.sort((a, b) => {
    const [aT, bT] = [new Date(a.date).getTime(), new Date(b.date).getTime()];
    return boardSearch.sort === 'new' ? aT - bT : bT - aT;
  });

  console.log(boardAllData);

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
          <div>
            {sortedItem?.slice(indexOfFirstPost, indexOfLastPost).map((articleItem) => {
              const categoryPath = BOARD_PATH(articleItem.category);
              return <ArticleList key={articleItem.id} articleContent={articleItem} path={`/board/${categoryPath}`} />;
            })}
          </div>
        )}

        {boardAllData && (
          <PaginationComponent
            countPerPage={postPerPage}
            page={page}
            totalItemsCount={boardAllData?.totalElements}
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

export default AllPage;
