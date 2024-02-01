'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import StyledButton from '@/components/Button/StyledButton';
import EventsWritingStep from '@/containers/events/EventsWritingStep';
import EventsWritingInfoStep from '@/containers/events/EventsWritingInfoStep';
import EventsPreviewWringStep from '@/containers/events/EventsPreviewWringStep';
import React, { useState } from 'react';

const page = () => {
  const [step, setStep] = useState<number>(1);

  const onDisable = () => {};
  return (
    <section className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4 md:max-w-[996px]">
      <StepProgressBar step={step} />
      <div className="flex w-full justify-between">
        <StyledButton
          className="prose-btn-M rounded-2xl bg-[#E85ECF] px-5 py-3 text-white md:prose-btn-L hover:bg-pink2 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
          label="이전"
          disabled={step <= 1}
          onClick={() => setStep(step - 1)}
        />
        <StyledButton
          className="prose-btn-M rounded-2xl bg-[#E85ECF] px-5 py-3 text-white md:prose-btn-L hover:bg-pink2 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
          label={step === 3 ? '완료' : '다음'}
          // disabled={onDisable()}
          onClick={() => {
            if (step === 3) {
              alert('글 작성이 완료되었습니다');
            } else setStep(step + 1);
          }}
        />
      </div>
      {step === 1 && <EventsWritingStep />}
      {step === 2 && <EventsWritingInfoStep />}
      {step === 3 && <EventsPreviewWringStep />}
    </section>
  );
};

export default page;
