'use client';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import LinkButton from '@/components/Button/LinkButton';
import ArticleList from '@/components/List/ArticleList';
import HorizontalLinkList from '@/components/List/HorizontalLinkList';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import { useGetBoardCategoriesService } from '@/hooks/queries/board/boardServie';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { BOARD_CATEGORY } from '@/constants/board';
import SubBanner from 'public/images/subscriptionBanner.png';
import { boardSearchState } from '@/atom/boardAtom';
import useSetPage from '@/hooks/useSetPage';
import LoadingSpinner from '@/containers/loading/LoadingSpinner';
import { AiOutlineSearch } from 'react-icons/ai';
import BoardInputElements from '@/containers/board/BoardInputElements';

const FreePage = () => {
  const [, setWriteValue] = useRecoilState(writeState);
  const [, setWritingInfoValue] = useRecoilState(writingInfoState);
  const [boardSearch, setBoardSearch] = useRecoilState(boardSearchState);

  // pagination
  const { page, postPerPage, indexOfFirstPost, indexOfLastPost, pageChange } = useSetPage();

  // api
  const { data: boardFreeData, isLoading } = useGetBoardCategoriesService({ categoryId: 1 });

  if (isLoading) return <LoadingSpinner />;

  const filteredItem = boardFreeData?.content.filter((el) => el.title.includes(boardSearch.searchValue));

  const sortedItem = filteredItem?.sort((a, b) => {
    const [aT, bT] = [new Date(a.date).getTime(), new Date(b.date).getTime()];
    return boardSearch.sort === 'new' ? aT - bT : bT - aT;
  });

  console.log(boardFreeData);

  return (
    <div className="flex w-full flex-col gap-[40px] px-2 md:gap-[60px] md:px-0">
      <Image src={SubBanner} alt="구독 배너" className="h-auto w-screen" priority />
      <HorizontalLinkList category={BOARD_CATEGORY} />
      <BoardInputElements />
      <div className="flex flex-col gap-4">
        {filteredItem?.length === 0 ? (
          <div className="my-5 flex flex-col items-center gap-[5px] text-gray5">
            <AiOutlineSearch style={{ fontSize: 80, color: '#9CA3AF', marginBottom: 10 }} />
            <p>검색결과가 존재하지 않습니다.</p>
            <p>다시 검색해주세요 !</p>
          </div>
        ) : (
          <div>
            {sortedItem?.slice(indexOfFirstPost, indexOfLastPost).map((articleItem) => {
              return <ArticleList key={articleItem.id} articleContent={articleItem} path="/board/free" />;
            })}
          </div>
        )}

        {boardFreeData && (
          <PaginationComponent
            countPerPage={postPerPage}
            page={page}
            totalItemsCount={boardFreeData?.totalElements}
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

export default FreePage;
