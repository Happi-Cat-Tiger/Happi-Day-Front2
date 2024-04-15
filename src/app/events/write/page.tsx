'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import StyledButton from '@/components/Button/StyledButton';
import EventsWritingStep from '@/containers/events/EventsWritingStep';
import EventsWritingInfoStep from '@/containers/events/EventsWritingInfoStep';
import EventsPreviewWringStep from '@/containers/events/EventsPreviewWringStep';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { writeState, writingInfoState } from '@/atom/write';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePostWriteEventsService, usePutEventsService } from '@/hooks/mutations/events/eventsService';

const page = () => {
  const [step, setStep] = useState<number>(1);

  const searchParams = useSearchParams();
  const mod = searchParams.get('mod') || null;
  const id = searchParams.get('id') || null;
  const eventId = id ? +id : null;

  const [writeValue, setWriteValue] = useRecoilState(writeState);
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { articleTitle, editValue } = writeValue;
  const { endTime, eventAddress, hashtag, location, imageFile, startTime, thumbnailImage } = writingInfoValue;

  console.log('editValue', editValue);

  const writeEventsMutaion = usePostWriteEventsService();
  const modifyEventsMutation = usePutEventsService({ eventId: eventId });

  const onDisable = () => {
    if (step === 1) {
      if (!articleTitle || !editValue) return true;
    }
  };

  const handleClick = async () => {
    if (step === 3) {
      alert('글 작성이 완료되었습니다');
      // setWriteValue({ articleTitle: '', category: { ...writeValue.category }, editValue: '' });
      // setWritingInfoValue({
      //   bankAccount: { bank: '', name: '', number: '' },
      //   endTime: null,
      //   eventAddress: { address: '', detailAddress: '' },
      //   hashtag: [],
      //   location: '',
      //   poster: null,
      //   productOptions: [],
      //   shippingOptions: [],
      //   startTime: null,
      //   thumbnailImage: null,
      //   titleProduct: { label: '', price: '' },
      //   urlAddress: '',
      // });
      const payloadData = {
        eventId: eventId,
        title: articleTitle,
        startTime: startTime,
        endTime: endTime,
        description: editValue,
        address: eventAddress.address,
        location: location,
        hashtags: hashtag,
        thumbnailFile: thumbnailImage,
        imageFile: imageFile,
      };
      if (mod === 'true') {
        await modifyEventsMutation.mutate(payloadData);
      } else {
        await writeEventsMutaion.mutate(payloadData);
      }
      console.log('payloadData', payloadData);
    } else {
      setStep(step + 1);
    }
  };
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
          disabled={onDisable()}
          onClick={() => handleClick()}
        />
      </div>
      {step === 1 && <EventsWritingStep />}
      {step === 2 && <EventsWritingInfoStep />}
      {step === 3 && <EventsPreviewWringStep />}
    </section>
  );
};

export default page;
