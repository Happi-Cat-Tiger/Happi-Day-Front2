'use client';

import React from 'react';
import MenuItems from './MenuItems';
import { MYPAGE_MENU_LIST } from '@/constants/mypage';

const SideMenu = () => {
  return (
    <ul
      className="prose-menu&tabs md: mx-auto my-1 flex flex-wrap justify-center px-5 md:my-5 md:w-[200px] md:flex-col md:flex-nowrap  md:justify-start
    ">
      {MYPAGE_MENU_LIST.map((item) => (
        <MenuItems key={item.id} title={item.title} path={item.path} />
      ))}
    </ul>
  );
};

export default SideMenu;
