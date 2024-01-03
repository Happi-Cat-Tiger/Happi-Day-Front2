import React from 'react';
import SideMenu from '@/containers/mypage/SideMenu';
import Title from '@/containers/mypage/Title';

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Title />
      <div className="mx-auto flex h-full min-h-screen flex-col md:max-w-[1280px] md:flex-row md:justify-center">
        <SideMenu />
        {children}
      </div>
    </div>
  );
};

export default MypageLayout;
