'use client';
import LinkButton from '@/components/Button/LinkButton';
import Link from 'next/link';
const BoardPage = () => {
  return (
    <h1>
      Hello, Dashboard Page!
      <Link href="/board/write" passHref legacyBehavior>
        <LinkButton
          label="글쓰기"
          href="#"
          className="prose-btn-M rounded-2xl bg-orange2 px-5 py-3 text-white md:prose-btn-L hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
        />
      </Link>
    </h1>
  );
};

export default BoardPage;
