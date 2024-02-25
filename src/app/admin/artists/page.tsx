import React from 'react';
import ArtistList from '@/containers/mypage/mysubscribed/ArtistList';

const page = ({ params }: { params: { id: string; type: string } }) => {
  const id = parseInt(params.id, 10);

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-8">
        <div className="prose prose-h4 flex justify-center">아티스트 관리</div>
        <div className="h-full overflow-hidden overflow-scroll overflow-x-hidden md:h-[550px] md:border md:border-solid">
          <ArtistList />
        </div>
      </div>
    </div>
  );
};

export default page;
