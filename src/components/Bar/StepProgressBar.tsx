import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
interface StepProgressBarProps {
  step: number;
}
const StepProgressBar = ({ step }: StepProgressBarProps) => {
  return (
    <>
      <div className="flex w-[664px] items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange2 text-orange2">
          {step <= 1 ? 1 : <AiOutlineCheck />}
        </div>
        <hr className={`h-[1px] grow border-0 ${step < 2 ? 'bg-gray6' : 'bg-orange2'}`}></hr>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray6 text-gray6 ${
            step >= 2 && 'border-orange2 text-orange2'
          }`}>
          {step <= 2 ? 2 : <AiOutlineCheck />}
        </div>
        <hr className={`h-[1px] grow border-0 ${step < 3 ? 'bg-gray6' : 'bg-orange2'}`}></hr>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-gray6 text-gray6
        ${step >= 3 && 'border-orange2 text-orange2'}`}>
          {step <= 3 ? 3 : <AiOutlineCheck />}
        </div>
      </div>
      <div className="gap-auto prose-subtitle-M flex w-[664px]">
        <span className="w-1/3 text-orange2">
          <p>Step.1</p>
          <p>글쓰기</p>
        </span>
        <span className={`w-1/3 text-center text-gray6 ${step >= 2 && 'text-orange2'}`}>
          <p>Step.2</p>
          <p>글정보등록</p>
        </span>
        <span className={`w-1/3 text-right text-gray6 ${step >= 3 && 'text-orange2'}`}>
          <p>Step.3</p>
          <p>미리보기</p>
        </span>
      </div>
    </>
  );
};

export default StepProgressBar;
