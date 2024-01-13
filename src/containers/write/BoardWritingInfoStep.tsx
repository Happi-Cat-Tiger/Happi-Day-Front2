import AddressInput from '@/components/WriteForm/AddressInput';
import HashtagInput from '@/components/WriteForm/HashtagInput';
import ThumbnailUploader from '@/components/WriteForm/ThumbnailUploader';
import React from 'react';

const BoardWritingInfoStep = () => {
  return (
    <div className="flex h-[660px] w-full flex-col gap-4 overflow-auto border border-gray-200 p-2 md:p-4">
      <HashtagInput />
      <ThumbnailUploader />
      <AddressInput />
    </div>
  );
};

export default BoardWritingInfoStep;
