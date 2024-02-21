import { writeState } from '@/atom/write';
import AddressInput from '@/components/WriteForm/AddressInput';
import HashtagInput from '@/components/WriteForm/HashtagInput';
import PosterUploader from '@/components/WriteForm/PosterUploader';
import ThumbnailUploader from '@/components/WriteForm/ThumbnailUploader';
import React from 'react';
import { useRecoilState } from 'recoil';

const BoardWritingInfoStep = () => {
  const [writeValue] = useRecoilState(writeState);
  const { category } = writeValue;

  return (
    <div className="flex h-auto w-full flex-col gap-4 overflow-auto border border-gray-200 p-2 md:p-4">
      <HashtagInput />
      <PosterUploader />
      {category.label === '거래/교환/양도' && <ThumbnailUploader />}
      {category.label === '이벤트/홍보' && (
        <>
          <ThumbnailUploader />
          <AddressInput />
        </>
      )}
    </div>
  );
};

export default BoardWritingInfoStep;
