import React, { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';

const DurationInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);
  const { startTime, endTime } = writingInfoValue;

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>기간</span> <span className="text-red-600">*</span>
        <span className="prose-body-XS md:prose-body-S">진행 기간을 입력해주세요</span>
      </div>
      <div className="flex items-center">
        <DatePicker
          showIcon
          selected={startTime}
          onChange={(date) => {
            setWritingInfoValue({
              ...writingInfoValue,
              startTime: date,
            });
          }}
          selectsStart
          startDate={startTime}
          endDate={endTime}
          className="prose-body-XS w-full grow rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none"
          icon={<AiOutlineCalendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform" />}
        />
        <p className="w-[60px] text-center">~</p>
        <DatePicker
          showIcon
          selected={endTime}
          onChange={(date) => {
            setWritingInfoValue({
              ...writingInfoValue,
              endTime: date,
            });
          }}
          selectsEnd
          startDate={startTime}
          endDate={endTime}
          minDate={startTime}
          className="prose-body-XS w-full grow rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none"
          icon={<AiOutlineCalendar className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform" />}
        />
      </div>
    </div>
  );
};

export default DurationInput;
