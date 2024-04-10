'use client';
import React, { ChangeEvent, KeyboardEvent } from 'react';
import { useRecoilState } from 'recoil';
import { boardSearchState } from '@/atom/boardAtom';

const BoardInputElements = () => {
  const [boardSearch, setBoardSearch] = useRecoilState(boardSearchState);

  const handleEnter = (e: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') setBoardSearch({ ...boardSearch, searchValue: e.target.value });
  };

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setBoardSearch({ ...boardSearch, sort: e.target.value });
  };

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setBoardSearch({ ...boardSearch, searchFilter: e.target.value });
  };

  return (
    <div className="my-[60px] flex justify-between sm:flex-col sm:gap-[16px] md:flex-row md:items-center md:gap-[0]">
      <div className="flex items-center sm:justify-between md:gap-[24px]">
        <div>
          <select
            className="cursor-pointer rounded-[16px] bg-[#F0F5F9] px-[16px] py-[8px] outline-none sm:prose-btn-S md:prose-btn-M"
            onChange={handleSort}>
            <option value="new">최신순</option>
            <option value="old">오래된순</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-1">
          <div className="flex justify-center gap-2">
            <input id="subscribe" type="checkbox" />
            <label htmlFor="subscribe" className="sm:prose-body-XS md:prose-body-M">
              내가 구독한 아티스트만 보기
            </label>
          </div>
          <div className="flex justify-center gap-2">
            <input id="ongoing" type="checkbox" />
            <label htmlFor="ongoing" className="sm:prose-body-XS md:prose-body-M">
              진행중인 이벤트만 보기
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[10px]">
          <select
            className="prose-subtitle-S w-[150px] text-ellipsis rounded-[8px] bg-[#F0F5F9] px-4 py-2 outline-none placeholder:text-black"
            onChange={handleFilter}>
            <option value="title">제목</option>
            <option value="artist">아티스트</option>
          </select>
          <div>
            <input
              type="search"
              placeholder="Search"
              onKeyDown={handleEnter}
              className="prose-subtitle-S rounded-[8px] bg-[#F0F5F9] px-4 py-2 outline-none placeholder:text-black sm:w-full md:w-[264px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardInputElements;
