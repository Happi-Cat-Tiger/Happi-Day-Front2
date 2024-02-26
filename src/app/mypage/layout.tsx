'use client';
import React, { useEffect, useState } from 'react';
import SideMenu from '@/containers/mypage/SideMenu';
import Title from '@/containers/mypage/Title';
import { MYPAGE_MENU_LIST } from '@/constants/mypage';
import { MenuListItem, OrderedTable, SalesPostTable, SalesProductsTable } from '@/types/mypage';

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = true;
  const userType = 'admin';

  const getAdminMenuList = (userType: string) => {
    if (userType === 'user') {
      return MYPAGE_MENU_LIST;
    } else if (userType === 'admin') {
      // If user is admin, clone the original menu list and add the admin menu
      const adminMenu = { id: 6, title: '관리자 메뉴', urlForHighlight: 'admin', path: 'admin/artists' };
      return [...MYPAGE_MENU_LIST, adminMenu];
    }
  };

  const [userMenuList, setUserMenuList] = useState<MenuListItem[]>();

  useEffect(() => {
    setUserMenuList(getAdminMenuList(userType));
  }, [userType]);

  return isLoggedIn ? (
    <div>
      <Title label={'마이페이지'} />
      <div className="mx-auto flex h-full min-h-screen flex-col md:max-w-[1280px] md:flex-row md:justify-center">
        <SideMenu data={userMenuList} />
        {children}
      </div>
    </div>
  ) : (
    <div>로그인 화면</div>
  );
};

export default MypageLayout;
