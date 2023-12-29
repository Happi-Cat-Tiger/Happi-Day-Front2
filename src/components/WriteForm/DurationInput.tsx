import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

const DurationInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h5">
        <span>기간</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex items-center">
        <div className="relative grow">
          <input
            type="text"
            className="prose-body-S w-full rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
            placeholder="이벤트 진행 기간을 입력해주세요."></input>
          <AiOutlineCalendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform" />
        </div>
        <p className="w-[60px] text-center">~</p>
        <div className="relative grow">
          <input
            type="text"
            className="prose-body-S w-full rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
            placeholder="이벤트 진행 기간을 입력해주세요."></input>
          <AiOutlineCalendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform" />
        </div>
      </div>
    </div>
  );
};

export default DurationInput;
