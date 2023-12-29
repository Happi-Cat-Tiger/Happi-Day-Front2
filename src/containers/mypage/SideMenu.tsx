'use client';

import React from 'react';
import MenuItems from './MenuItems';

const MenuList = [
  { id: 0, title: '프로필', path: 'profile' },
  { id: 1, title: '나의 게시글', path: 'my-posts' },
  { id: 2, title: '나의 굿즈', path: 'my-sales' },
  { id: 3, title: '나의 구독', path: 'my-subscribes' },
  { id: 4, title: '나의 이벤트', path: 'my-events' },
  { id: 5, title: '관리자 메뉴', path: 'admin' },
];

const SideMenu = () => {
  return (
    <ul
      className="prose-menu&tabs md: mx-auto my-5 flex flex-wrap justify-center px-5 md:w-[200px] md:flex-col md:flex-nowrap  md:justify-start
    ">
      {MenuList.map((item) => (
        <MenuItems key={item.id} title={item.title} path={item.path} />
      ))}
    </ul>
  );
};

export default SideMenu;
