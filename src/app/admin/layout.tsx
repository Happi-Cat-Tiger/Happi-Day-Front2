import React from 'react';
import Title from '@/containers/mypage/Title';
import SideMenu from '@/containers/mypage/SideMenu';
import { ADMIN_MENU_LIST } from '@/constants/admin';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Title label={'관리자 페이지'} />
      <div className="mx-auto flex h-full min-h-screen flex-col md:max-w-[1280px] md:flex-row md:justify-center">
        <SideMenu data={ADMIN_MENU_LIST} />
        <div className="mx-2 flex w-full rounded-lg md:mx-6 md:my-6 md:border md:border-gray6">
          <div className="mx-5 my-3 flex w-full flex-col gap-4 md:mx-14 md:my-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
