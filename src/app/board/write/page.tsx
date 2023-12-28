'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import PrimaryButton from '@/components/Button/PrimaryButton';
import DaumPost from '@/components/Tool/DaumPost';
import ImageUploader from '@/components/Tool/ImageUploader';
import AddressInput from '@/components/WriteForm/AddressInput';
import HashtagInput from '@/components/WriteForm/HashtagInput';
import ThumbnailUploader from '@/components/WriteForm/ThumbnailUploader';
import { useState } from 'react';

export default function WritePage() {
  const [step, setStep] = useState<number>(1);

  return (
    <h1>
      Hello, WritePage!
      {step}
      <button onClick={() => setStep(1)}>reset</button>
      <section className="flex w-screen max-w-[996px] flex-col items-center gap-4">
        <StepProgressBar step={step} />
        <div className="flex w-full justify-between">
          <PrimaryButton label="이전" disabled={step <= 1} onClick={() => setStep(step - 1)} />
          <PrimaryButton label="다음" onClick={() => setStep(step + 1)} />
        </div>
        {step === 1 && (
          <div className="h-[660px] w-full border border-gray-200 p-4">
            <input
              type="text"
              className="w-full rounded-md border border-gray3 px-1.5 py-1 focus:border-orange1 focus:outline-none "
              placeholder="제목"
            />
            <div className="h-full w-full bg-gray-100">에디터 자리</div>
          </div>
        )}
        {step === 2 && (
          <div className="flex h-[660px] w-full flex-col gap-4 border border-gray-200 p-4">
            <HashtagInput />
            <ThumbnailUploader />
            <AddressInput />
          </div>
        )}
      </section>
    </h1>
  );
}
