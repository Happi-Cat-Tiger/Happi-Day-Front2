import React, { ChangeEvent } from 'react';
import CustomEditor from '@/components/Tool/CustomEditor';
import { useRecoilState } from 'recoil';
import { writeState } from '@/atom/write';

const EventsWritingStep = () => {
  const [writeValue, setWriteValue] = useRecoilState(writeState);
  const { articleTitle, editValue } = writeValue;

  const handleChangeEdit = (value: string) => {
    setWriteValue({ ...writeValue, editValue: value });
  };

  const handleChangeArticle = (e: ChangeEvent<HTMLInputElement>) => {
    setWriteValue({ ...writeValue, articleTitle: e.target.value });
  };
  return (
    <div className="flex h-[560px] w-full flex-col gap-4 md:border md:border-gray-200 md:p-4">
      <div className=" relative flex gap-3">
        <input
          defaultValue={articleTitle}
          onChange={handleChangeArticle}
          type="text"
          className="w-full rounded-md border border-gray3 px-1.5 py-1 hover:bg-[#A0C3FF]/[0.1] focus:border-orange1 focus:bg-[#A0C3FF]/[0.1] focus:outline-none"
          placeholder="제목"
          spellCheck="false"
        />
      </div>
      <CustomEditor editValue={editValue} setEditValue={handleChangeEdit} />
    </div>
  );
};

export default EventsWritingStep;
