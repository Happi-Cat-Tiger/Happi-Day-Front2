'use client';
import React from 'react';
import EventGuide from '@/containers/events/EventGuide';
import Link from 'next/link';
import InputElements from '@/containers/events/InputElements';
import PrimaryButton from '@/components/Button/PrimaryButton';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto md:max-w-[1280px]">
      <EventGuide />
      <div className="my-[60px] text-right">
        <span className="prose-subtitle-M mr-[20px] underline">주최 관련 이벤트도 보고싶다면?</span>
        <Link href="/board" className="prose-h5 text-orange1">
          주최 게시판 바로가기
        </Link>
      </div>
      <InputElements />
      {children}
      <div className="text-right">
        <PrimaryButton label="글쓰기" onClick={() => null} />
      </div>
    </div>
  );
};

export default layout;
