'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import WritingStep from '@/containers/write/WritingStep';
import React, { useEffect, useState } from 'react';
import BoardWritingInfoStep from '@/containers/write/BoardWritingInfoStep';
import PreviewWritingStep from '@/containers/write/PreviewWritingStep';
import StyledButton from '@/components/Button/StyledButton';
import { useRecoilState } from 'recoil';
import { writeState, writingInfoState } from '@/atom/write';
import { usePatchBoardArticleService, usePostWriteBoardService } from '@/hooks/mutations/board/boardService';
import { useSearchParams } from 'next/navigation';
import { useGetBoardArticleService } from '@/hooks/queries/board/boardServie';
import LoadingSpinner from '@/containers/loading/LoadingSpinner';
import { BOARD } from '@/constants/board';

const WritePage = () => {
  // 글쓰기 페이지는 작성/수정 상태로 나뉜다.
  const [writeValue, setWriteValue] = useRecoilState(writeState);
  const { articleTitle, editValue, category } = writeValue;

  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);
  const { hashtag, thumbnailImage, eventAddress } = writingInfoValue;

  const [step, setStep] = useState<number>(1);

  const searchParams = useSearchParams();
  const mod = searchParams.get('mod') || null;
  const id = searchParams.get('id') || null;
  const articleId = id ? +id : null;

  const { data: boardArticle, isLoading } = useGetBoardArticleService({ articleId });
  const writeBoardMutation = usePostWriteBoardService({ categoryId: category.id });
  const modifyBoardMutation = usePatchBoardArticleService({ articleId });

  useEffect(() => {
    if (boardArticle && articleId) {
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
  }, [boardArticle, articleId]);

  const onDisable = () => {
    if (step === 1) {
      if (category.label === '카테고리|' || !articleTitle || !editValue) return true;
    }
    if (step === 2) {
      if (category.label === '거래/교환/양도' || category.label === '이벤트/홍보') {
        if (!hashtag || !thumbnailImage) return true;
      } else {
        if (!hashtag) return true;
      }
    }
  };

  const handleClick = async () => {
    if (step === 3) {
      const payloadData = {
        title: articleTitle,
        content: editValue,
        hashtag: hashtag,
        address: eventAddress.address,
        detailAddress: eventAddress.detailAddress,
        thumbnailImage: thumbnailImage,
        imageFile: null,
      };
      if (mod === 'true') {
        await modifyBoardMutation.mutate(payloadData);
      } else {
        await writeBoardMutation.mutate(payloadData);
      }
    } else setStep(step + 1);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
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
          onClick={() => handleClick()}
        />
      </div>
      {step === 1 && <WritingStep />}
      {step === 2 && <BoardWritingInfoStep />}
      {step === 3 && <PreviewWritingStep />}
    </section>
  );
};

export default WritePage;
