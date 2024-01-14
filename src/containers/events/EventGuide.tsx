import React from 'react';

const EventGuide = () => {
  return (
    <div className="my-[60px] flex h-[150px] w-full flex-col justify-center gap-[20px] border-2 bg-gray-500 text-white sm:p-[0] sm:text-center md:pl-10 md:text-left">
      <p className="sm:prose-h5 md:prose-h4">이벤트 게시글 작성이 처음이신가요?</p>
      <p className="sm:prose-h7 md:prose-h6">이벤트 게시글 작성 가이드</p>
    </div>
  );
};

export default EventGuide;
