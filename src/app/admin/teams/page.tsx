'use client';
import React from 'react';
import TeamList from '@/containers/mypage/mysubscribed/TeamList';

const page = ({ params }: { params: { id: string; type: string } }) => {
  const id = parseInt(params.id, 10);
  const type = params.type;

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-8">
        <div className="prose prose-h4 flex justify-center">팀 관리</div>
        <div className="h-full overflow-hidden overflow-scroll overflow-x-hidden md:h-[550px] md:border md:border-solid">
          <TeamList />
        </div>
      </div>
    </div>
  );
};

export default page;
