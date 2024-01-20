'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface MenuItemsProps {
  title: string;
  path: string;
  urlForHighlight: string;
}
const MenuItems = ({ title, path, urlForHighlight }: MenuItemsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const goLink = async (url: string) => {
    await router.push(url);
  };

  return (
    <li
      className={`prose-menu&tabs mx-3 my-4 cursor-pointer hover:scale-110 md:my-5
        ${pathname.startsWith(`/mypage/${urlForHighlight}`) ? 'font-bold text-orange2 ' : ' text-gray2'}`}
      onClick={() => goLink(`/mypage/${path}`)}>
      {title}
    </li>
  );
};

export default MenuItems;
