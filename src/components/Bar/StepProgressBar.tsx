import React from 'react';

const StepProgressBar = () => {
  return (
    <>
      <div className="flex w-[664px] items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange2 text-orange2">
          1
        </div>
        <hr className="grow"></hr>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray6 text-gray6">2</div>
        <hr className="grow"></hr>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray6 text-gray6">3</div>
      </div>
      <div className="gap-auto prose-subtitle-M flex w-[664px]">
        <span className="w-1/3 text-orange2">
          <p>Step.1</p>
          <p>글쓰기</p>
        </span>
        <span className="w-1/3 text-center text-gray6">
          <p>Step.2</p>
          <p>글정보등록</p>
        </span>
        <span className="w-1/3 text-right text-gray6">
          <p>Step.3</p>
          <p>미리보기</p>
        </span>
      </div>
    </>
  );
};

export default StepProgressBar;
