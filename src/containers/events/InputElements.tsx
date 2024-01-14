'use client';
import React, { ChangeEvent, KeyboardEvent } from 'react';
import { eventsSearchState } from '@/atom/eventsSearch';
import { useRecoilState } from 'recoil';

const InputElements = () => {
  const [eventsSearch, setEventsSearch] = useRecoilState<string>(eventsSearchState);

  const getEventSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setEventsSearch(e.target.value);
  };
  const handleEnter = (e: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      console.log('엔터', eventsSearch);
      getEventSearch(e);
    }
  };

  return (
    <div className="my-[60px] flex justify-between sm:flex-col sm:gap-[16px] md:flex-row md:items-center md:gap-[0]">
      <div className="flex items-center sm:justify-between md:gap-[24px]">
        <div>
          <select className="cursor-pointer rounded-[16px] bg-[#F0F5F9] px-[16px] py-[8px] outline-none">
            <option className="prose-btn-M">최신순</option>
            <option className="prose-btn-M">오래된순</option>
          </select>
        </div>
        <div className="flex flex-col items-start gap-1">
          <div className="flex justify-center gap-2">
            <input id="subscribe" type="checkbox" />
            <label htmlFor="subscribe" className="prose-subtitle-M">
              내가 구독한 아티스트만 보기
            </label>
          </div>
          <div className="flex justify-center gap-2">
            <input id="ongoing" type="checkbox" />
            <label htmlFor="ongoing" className="prose-subtitle-M">
              진행중인 이벤트만 보기
            </label>
          </div>
        </div>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search"
          onKeyDown={handleEnter}
          className="prose-subtitle-S rounded-[8px] bg-[#F0F5F9] px-4 py-2 outline-none placeholder:text-black sm:w-full md:w-[264px]"
        />
      </div>
    </div>
  );
};

export default InputElements;
