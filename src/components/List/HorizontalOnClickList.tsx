'use client';
import React from 'react';
import { CategoryList } from '@/types/categoryList';

interface Props {
  category: CategoryList[];
  categoryNum: number;
}
const HorizontalOnClickList = ({ category, categoryNum }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4">
      {category?.map((item, index) => (
        <div key={item.label} onClick={item.onClick}>
          <p
            className={`prose-h7 w-fit cursor-pointer truncate border-b-2 p-2 md:prose-h7 hover:border-orange2 hover:text-orange2
                    ${categoryNum === index ? 'border-orange1 text-orange1' : 'border-gray4 text-gray4'}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalOnClickList;
