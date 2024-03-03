import BankAccountInput from '@/components/WriteForm/BankAccountInput';
import DurationInput from '@/components/WriteForm/DurationInput';
import HashtagInput from '@/components/WriteForm/HashtagInput';
import PosterUploader from '@/components/WriteForm/PosterUploader';
import ProductOptionsInput from '@/components/WriteForm/ProductOptionsInput';
import ShippingOptionsInput from '@/components/WriteForm/ShippingOptionsInput';
import ThumbnailUploader from '@/components/WriteForm/ThumbnailUploader';
import TitleProductInput from '@/components/WriteForm/TitleProductInput';
import React from 'react';

const WritingInfoStep = () => {
  return (
    <div className="flex h-[660px] w-full flex-col gap-4 overflow-auto border border-gray-200 p-2 md:p-4">
      <HashtagInput />
      <TitleProductInput />
      <ThumbnailUploader />
      <DurationInput />
      <ProductOptionsInput />
      <ShippingOptionsInput />
      <BankAccountInput />
      <PosterUploader />
    </div>
  );
};

export default WritingInfoStep;
