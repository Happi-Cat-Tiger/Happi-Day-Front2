import React from 'react';
import EventGuide from '@/containers/events/EventGuide';
import Link from 'next/link';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto h-screen md:max-w-[1280px]">
      <EventGuide />
      <div className="my-[60px] text-right">
        <span className="prose-subtitle-M mr-[10px]">주최 관련 이벤트도 보고싶다면?</span>
        <Link href="/board" className="h5">
          주최 게시판 바로가기
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
