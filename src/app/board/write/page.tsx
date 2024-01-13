'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import PrimaryButton from '@/components/Button/PrimaryButton';
import WritingStep from '@/containers/write/WritingStep';
import React, { useState } from 'react';
import BoardWritingInfoStep from '@/containers/write/BoardWritingInfoStep';
import PreviewWritingStep from '@/containers/write/PreviewWritingStep';

const WritePage = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <section className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4 md:max-w-[996px]">
      <StepProgressBar step={step} />
      <div className="flex w-full justify-between">
        <PrimaryButton label="이전" disabled={step <= 1} onClick={() => setStep(step - 1)} />
        <PrimaryButton
          label={step === 3 ? '완료' : '다음'}
          onClick={() => {
            if (step === 3) {
              alert('글 작성이 완료되었습니다');
            } else setStep(step + 1);
          }}
        />
      </div>
      {step === 1 && <WritingStep />}
      {step === 2 && <BoardWritingInfoStep />}
      {step === 3 && <PreviewWritingStep />}
    </section>
  );
};

export default WritePage;
