'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface MenuItemsProps {
  title: string;
  path: string;
}
const MenuItems = ({ title, path }: MenuItemsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const goLink = async (url: string) => {
    await router.push(url);
  };

  return (
    <li
      className={
        pathname == `/mypage/${path}`
          ? 'prose-menu&tabs mx-3 my-5 cursor-pointer font-bold text-orange2 hover:scale-110  md:my-5'
          : 'prose-menu&tabs mx-3 my-5  cursor-pointer text-gray2 hover:scale-110  md:my-5 '
      }
      onClick={() => goLink(`/mypage/${path}`)}>
      {title}
    </li>
  );
};

export default MenuItems;
