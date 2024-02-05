'use client';

import React from 'react';
import MenuItems from './MenuItems';
import { MYPAGE_MENU_LIST } from '@/constants/mypage';

const SideMenu = () => {
  return (
    <ul
      className=" my-1 flex flex-wrap justify-center px-5 md:my-5 md:w-[200px] md:flex-col md:flex-nowrap md:justify-start  md:text-[18px]
    ">
      {MYPAGE_MENU_LIST.map((item) => (
        <MenuItems key={item.id} title={item.title} path={item.path} urlForHighlight={item.urlForHighlight} />
      ))}
    </ul>
  );
};

export default SideMenu;
