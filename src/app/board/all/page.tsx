import ArticleList from '@/components/List/ArticleList';
import LinkButton from '@/components/Button/LinkButton';
import Link from 'next/link';

export default function AllPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
      </div>
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
}
