import { CategoryNav } from '@/types/board';
import Link from 'next/link';
import React from 'react';

interface HorizontalLinkListProps {
  category: CategoryNav[];
}
const HorizontalLinkList = ({ category }: HorizontalLinkListProps) => {
  return (
    <div className="flex gap-2 md:gap-4">
      {category.map((page, i) => {
        return (
          <Link key={i} href={page.navigate}>
            <p className="prose-h6 w-fit border-b-2 border-gray6 p-2 text-[#545D69] md:prose-h4 hover:text-orange2">
              {page.pageTitle}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default HorizontalLinkList;
