import AddressInput from '@/components/WriteForm/AddressInput';
import BankAccountInput from '@/components/WriteForm/BankAccountInput';
import DurationInput from '@/components/WriteForm/DurationInput';
import HashtagInput from '@/components/WriteForm/HashtagInput';
import LocationInput from '@/components/WriteForm/LocationInput';
import PosterUploader from '@/components/WriteForm/PosterUploader';
import ProductOptionsInput from '@/components/WriteForm/ProductOptionsInput';
import ShippingOptionsInput from '@/components/WriteForm/ShippingOptionsInput';
import ThumbnailUploader from '@/components/WriteForm/ThumbnailUploader';
import React from 'react';

const WritingInfoStep = () => {
  return (
    <div className="flex h-[660px] w-full flex-col gap-4 overflow-auto border border-gray-200 p-2 md:p-4">
      <HashtagInput />
      <ThumbnailUploader />
      <AddressInput />
      <LocationInput />
      <DurationInput />
      <ProductOptionsInput />
      <ShippingOptionsInput />
      <BankAccountInput />
      <PosterUploader />
    </div>
  );
};

export default WritingInfoStep;
