'use client';

import React from 'react';
import MenuItems from './MenuItems';
import { MenuListItem } from '@/types/mypage';

interface Props {
  data: MenuListItem[] | undefined;
}
const SideMenu = ({ data }: Props) => {
  return (
    <ul
      className=" my-1 flex flex-wrap justify-center px-5 md:my-5 md:w-[200px] md:flex-col md:flex-nowrap md:justify-start  md:text-[18px]
    ">
      {data?.map((item) => (
        <MenuItems key={item.id} title={item.title} path={item.path} urlForHighlight={item.urlForHighlight} />
      ))}
    </ul>
  );
};

export default SideMenu;
