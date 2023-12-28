'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import PrimaryButton from '@/components/Button/PrimaryButton';
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
        <div className="flex w-full justify-end">
          <PrimaryButton label="다음" onClick={() => setStep(step + 1)} />
        </div>
        <div className="h-[660px] w-full border border-gray-200 p-4">
          <input
            type="text"
            className="w-full rounded-md border border-gray3 px-1.5 py-1 focus:border-orange1 focus:outline-none "
            placeholder="제목"
          />
          <div className="h-full w-full bg-gray-100">에디터 자리</div>
        </div>
      </section>
    </h1>
  );
}
