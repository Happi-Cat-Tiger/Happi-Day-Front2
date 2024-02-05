'use client';
import { CategoryNav } from '@/types/board';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
interface HorizontalLinkListProps {
  category: CategoryNav[];
}
const HorizontalLinkList = ({ category }: HorizontalLinkListProps) => {
  const pathname = usePathname();
  const secondPath = pathname.split('/')[2];
  return (
    <div className="flex flex-wrap gap-2 md:gap-4">
      {category?.map((page, i) => (
        <Link key={i} href={page.navigate}>
          <p
            className={`prose-h7 w-fit truncate border-b-2 p-2 md:prose-h7 hover:border-orange2 hover:text-orange2 ${
              page.navigate === pathname ? 'border-orange1 text-orange1' : 'border-gray4 text-gray4'
            }`}>
            {page.pageTitle}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalLinkList;
