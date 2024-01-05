'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import PrimaryButton from '@/components/Button/PrimaryButton';
import CustomEditor from '@/components/Tool/CustomEditor';
import AddressInput from '@/components/WriteForm/AddressInput';
import BankAccountInput from '@/components/WriteForm/BankAccountInput';
import DurationInput from '@/components/WriteForm/DurationInput';
import HashtagInput from '@/components/WriteForm/HashtagInput';
import LocationInput from '@/components/WriteForm/LocationInput';
import PosterUploader from '@/components/WriteForm/PosterUploader';
import ProductOptionsInput from '@/components/WriteForm/ProductOptionsInput';
import ShippingOptionsInput from '@/components/WriteForm/ShippingOptionsInput';
import ThumbnailUploader from '@/components/WriteForm/ThumbnailUploader';
import { useState } from 'react';

const WritePage = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <section className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4 md:max-w-[996px]">
      <StepProgressBar step={step} />
      <div className="flex w-full justify-between">
        <PrimaryButton label="이전" disabled={step <= 1} onClick={() => setStep(step - 1)} />
        <PrimaryButton label="다음" onClick={() => setStep(step + 1)} />
      </div>
      {step === 1 && (
        <div className="flex h-[560px] w-full flex-col gap-4 md:border md:border-gray-200 md:p-4">
          <input
            type="text"
            className="w-full rounded-md border border-gray3 px-1.5 py-1 focus:border-orange1 focus:outline-none"
            placeholder="제목"
          />
          <CustomEditor initialData="<h1>Hello, world!</h1>" />
        </div>
      )}
      {step === 2 && (
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
      )}
      {step === 3 && <div className="h-[500px] w-full border text-center">미리보기</div>}
    </section>
  );
};

export default WritePage;
