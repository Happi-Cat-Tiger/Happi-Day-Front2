import { writeState, writingInfoState } from '@/atom/write';
import { useRecoilState } from 'recoil';
import React from 'react';

const PreviewWritingStep = () => {
  const [writingInfoValue] = useRecoilState(writingInfoState);
  const [writeValue] = useRecoilState(writeState);
  return (
    <div className="flex h-[500px] w-full flex-col gap-4 overflow-auto border p-2 text-center shadow-inner md:p-4">
      <p className=" prose-h4 md:prose-h3">{writeValue.articleTitle}</p>
      <div className="prose-body-XS flex items-center justify-center gap-2 md:prose-body-S"></div>
      <hr />
      <p className=" prose-body-XS text-left text-gray4 md:prose-body-S">{writingInfoValue.hashtag}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: writeValue.editValue }} className="prose-body-M my-10 md:prose-body-L" />
      <div className="flex w-full flex-col items-center gap-[16px] bg-[#FEF9D0] py-[20px]"></div>
    </div>
  );
};

export default PreviewWritingStep;
