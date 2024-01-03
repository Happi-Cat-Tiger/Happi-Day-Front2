import React from 'react';
import { AiOutlineSmile, AiTwotoneCalendar, AiTwotoneEye } from 'react-icons/ai';

const ArticleList = () => {
  const category = '자유';
  const title = '콘서트 같이 가실 분';
  const comments = 1;
  const nickName = '닉네임';
  const date = '12.01';
  const view = 50;

  return (
    <div className="flex w-full items-center justify-between gap-2 border-b border-gray4 p-4">
      <div className="prose-body-M rounded-lg bg-gray5 px-3 py-1 text-white md:prose-body-L">{category}</div>
      <div className="prose-body-M flex-1 md:prose-btn-L ">
        <span>{title}</span>
        <span className="text-light-purple">({comments})</span>
      </div>
      <div className="prose-body-XS flex w-fit items-center gap-2 md:prose-body-S">
        <AiOutlineSmile className="text-xl" />
        <span className="truncate">{nickName}</span>
        <AiTwotoneCalendar className="text-xl" />
        <span>{date}</span>
        <AiTwotoneEye className="text-xl" />
        <span>{view}</span>
      </div>
    </div>
  );
};

export default ArticleList;
