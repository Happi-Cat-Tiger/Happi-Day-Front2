'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import WritingStep from '@/containers/write/WritingStep';
import React, { useState, useEffect } from 'react';
import SalesWritingInfoStep from '@/containers/write/SalesWritingInfoStep';
import StyledButton from '@/components/Button/StyledButton';
import { useRecoilState } from 'recoil';
import { useSearchParams } from 'next/navigation';
import { useGetSalesArticleService } from '@/hooks/queries/sales/salesService';
import { writeState, writingInfoState } from '@/atom/write';
import SalesPreviewWritingStep from '@/containers/write/SalesPreviewWritingStep';
import LoadingSpinner from '@/containers/loading/LoadingSpinner';

const WritePage = () => {
  const [writeValue, setWriteValue] = useRecoilState(writeState);
  const { articleTitle, editValue, category } = writeValue;
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);
  const {
    hashtag,
    thumbnailImage,
    titleProduct,
    startTime,
    endTime,
    productOptions,
    shippingOptions,
    accountName,
    accountUser,
    accountNumber,
    imageFile,
  } = writingInfoValue;

  const [step, setStep] = useState<number>(1);

  const searchParams = useSearchParams();
  const mod = searchParams.get('mod') || null;
  const id = searchParams.get('id') || null;
  const salesId = id ? +id : null;

  const { data: salesArticle, isLoading } = useGetSalesArticleService({ salesId });
  const writeSalesMutation = usePostWriteSalesService({ categoryId: category.id });
  const modifySalesMutation = usePutSalesArticleService({ articlsalesIdeId });

  useEffect(() => {
    if (salesArticle && salesId) {
      setWriteValue({
        ...writeValue,
        articleTitle: boardArticle.title,
        editValue: boardArticle.content,
        category: { id: boardArticle.categoryId, label: BOARD.CATEGORY[boardArticle.categoryId - 1].label },
      });
      setWritingInfoValue({
        ...writingInfoValue,
        hashtag: boardArticle.hashtags,
        thumbnailImage: boardArticle.thumbnailImage,
        eventAddress: {
          address: boardArticle.eventAddress,
          detailAddress: boardArticle.eventDetailAddress,
        },
      });
    }
  }, [salesArticle, salesId]);

  const onDisable = () => {
    if (step === 1) {
      if (category.label === '카테고리' || !articleTitle || !editValue) return true;
    }
    if (step === 2) {
      if (
        !hashtag ||
        hashtag.length === 0 ||
        !thumbnailImage ||
        !titleProduct.price ||
        !startTime ||
        !endTime ||
        !productOptions ||
        productOptions.length === 0 ||
        !shippingOptions ||
        shippingOptions.length === 0 ||
        !accountName ||
        !accountUser ||
        !accountNumber ||
        !imageFile
      )
        return true;
    }
    return false;
  };

  const handleClick = async () => {
    if (step === 3) {
      const payloadData = {
        title: articleTitle,
        content: editValue,
        hashtag: hashtag,
        thumbnailImage: thumbnailImage,
        imageFile: null,
      };
      if (mod === 'true') {
        await modifySalesMutation.mutate(payloadData);
      } else {
        await writeSalesMutation.mutate(payloadData);
      }
    } else setStep(step + 1);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="mx-auto my-[40px] flex h-full w-full flex-col items-center justify-center md:my-[60px] md:max-w-[1280px]">
      <section className="mx-auto flex h-full w-full flex-col items-center justify-center gap-4 md:max-w-[996px]">
        <StepProgressBar step={step} />
        <div className="flex w-full items-baseline justify-between">
          <StyledButton
            className="prose-btn-M rounded-2xl bg-[#E85ECF] px-5 py-3 text-white md:prose-btn-L hover:bg-pink2 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
            label="이전"
            disabled={step <= 1}
            onClick={() => setStep(step - 1)}
          />
          <p className="flex items-baseline gap-3">
            <span className="rounded-xl bg-orange2 p-1 text-white">Step.{step}</span>
            {step === 1 && <span>글쓰기</span>}
            {step === 2 && <span>글정보등록</span>}
            {step === 3 && <span>미리보기</span>}
          </p>
          <StyledButton
            className="prose-btn-M rounded-2xl bg-[#E85ECF] px-5 py-3 text-white md:prose-btn-L hover:bg-pink2 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4"
            label={step === 3 ? '완료' : '다음'}
            disabled={onDisable()}
            onClick={() => {
              if (step === 3) {
                alert('글 작성이 완료되었습니다');
                window.location.href = '/sales';
              } else setStep(step + 1);
            }}
          />
        </div>
        {step === 1 && <WritingStep />}
        {step === 2 && <SalesWritingInfoStep />}
        {step === 3 && <SalesPreviewWritingStep />}
      </section>
    </div>
  );
};

export default WritePage;
