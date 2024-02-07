'use client';

import { PostContent } from '@/api/board/type';
import React from 'react';
import { AiOutlineSmile, AiTwotoneCalendar, AiTwotoneEye } from 'react-icons/ai';

const ArticleList = ({ articleContent }: { articleContent?: PostContent }) => {
  const category = articleContent?.category || '자유';
  const title = articleContent?.title || '콘서트 같이 가실 분';
  const comments = articleContent?.commentNum || 1;
  const nickName = articleContent?.nickname || '닉네임';
  const date = articleContent?.date || '12.01';
  const view = articleContent?.viewCount || 50;

  return (
    <div
      className="flex w-full cursor-pointer flex-col gap-1 border-b border-gray4 p-2 md:flex-row md:items-center md:justify-between md:gap-2 md:p-4"
      onClick={() => {}}>
      <div className="flex items-center justify-start gap-2">
        <div className="prose-body-XS rounded-lg bg-gray5 px-3 py-1 text-white md:prose-body-S">{category}</div>
        <div className="prose-body-S flex-1 md:prose-body-M">
          <span>{title}</span>
          <span className="text-light-purple">({comments})</span>
        </div>
      </div>
      <div className="prose-body-XS flex w-full items-center justify-end gap-2 md:prose-body-XS md:w-fit">
        <AiOutlineSmile className=" md:text-l text-lg" />
        <span className="truncate">{nickName}</span>
        <AiTwotoneCalendar className="md:text-l text-lg" />
        <span>{date}</span>
        <AiTwotoneEye className="md:text-l text-lg" />
        <span>{view}</span>
      </div>
    </div>
  );
};

export default ArticleList;
