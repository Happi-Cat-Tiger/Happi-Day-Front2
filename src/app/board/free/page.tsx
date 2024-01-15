'use client';
import LinkButton from '@/components/Button/LinkButton';
import ArticleList from '@/components/List/ArticleList';
import PaginationComponent from '@/components/Pagination/PaginationComponent';
import Link from 'next/link';
import { useState } from 'react';

const FreePage = () => {
  const [page, setPage] = useState(1);
  const postPerPage = 10;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const pageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        {new Array(20)
          .fill(0)
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((_, i) => (
            <ArticleList key={i} />
          ))}
      </div>
      <PaginationComponent page={page} totalItemsCount={20} pageChange={pageChange} />
      <div className="flex justify-end">
        <Link href="/board/write" passHref legacyBehavior>
          <LinkButton
            label="글쓰기"
            href="#"
            className="prose-btn-M rounded-2xl bg-orange2 px-5 py-3 text-white md:prose-btn-L hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
          />
        </Link>
      </div>
    </div>
  );
};

export default FreePage;
