'use client';
import { writeInitState, writeState, writingInfoInitState, writingInfoState } from '@/atom/write';
import LinkButton from '@/components/Button/LinkButton';
import ArticleList from '@/components/List/ArticleList';
import HorizontalLinkList from '@/components/List/HorizontalLinkList';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import { getBoardCategoriesService } from '@/hooks/queries/board/boardServie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { BOARD_CATEGORY } from '@/constants/board';
import SubBanner from 'public/images/subscriptionBanner.png';
const FreePage = () => {
  const [, setWriteValue] = useRecoilState(writeState);
  const [, setWritingInfoValue] = useRecoilState(writingInfoState);

  const [page, setPage] = useState(1);

  const { data: boardFreeData, isLoading } = getBoardCategoriesService({ categoryId: 1 });

  const postPerPage = 10;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const pageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading) return <></>;
  console.log(boardFreeData);

  return (
    <div className="flex w-full flex-col gap-[40px] px-2 md:gap-[60px] md:px-0">
      <Image src={SubBanner} alt="구독 배너" className="h-auto w-screen" priority />
      <HorizontalLinkList category={BOARD_CATEGORY} />
      <div className="flex flex-col gap-4">
        {boardFreeData && (
          <div>
            {boardFreeData.content.slice(indexOfFirstPost, indexOfLastPost).map((articleItem) => (
              <ArticleList key={articleItem.id} articleContent={articleItem} path="board/free" />
            ))}
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
