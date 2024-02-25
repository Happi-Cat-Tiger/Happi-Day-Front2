'use client';
import StepProgressBar from '@/components/Bar/StepProgressBar';
import WritingStep from '@/containers/write/WritingStep';
import React, { useCallback, useEffect, useState } from 'react';
import BoardWritingInfoStep from '@/containers/write/BoardWritingInfoStep';
import PreviewWritingStep from '@/containers/write/PreviewWritingStep';
import StyledButton from '@/components/Button/StyledButton';
import { useRecoilState } from 'recoil';
import { writeState, writingInfoState } from '@/atom/write';
import { patchBoardArticleService, postWriteBoardService } from '@/hooks/mutations/board/boardService';
import { useSearchParams } from 'next/navigation';
import { getBoardArticleService } from '@/hooks/queries/board/boardServie';
import { hdQueryClient } from '@/shared/hdQueryClient';

const WritePage = () => {
  // 수정
  const searchParams = useSearchParams();
  const mod = searchParams.get('mod') || null;
  const id = searchParams.get('id') || null;
  const cat = searchParams.get('cat') || null;
  const articleId = id ? +id : null;
  console.log(articleId);
  const { data: boardArticle, isLoading } = getBoardArticleService({ articleId });

  const [step, setStep] = useState<number>(1);

  const [writeValue, setWriteValue] = useRecoilState(writeState);
  const { articleTitle, editValue, category } = writeValue;

  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);
  const { hashtag, thumbnailImage, eventAddress } = writingInfoValue;

  const writeBoardMutation = postWriteBoardService({ categoryId: category.id });
  const modifyBoardMutation = patchBoardArticleService({ articleId });

  const onDisable = () => {
    if (step === 1) {
      if (category.label === '카테고리|' || !articleTitle || !editValue) return true;
    }
    if (step === 2) {
      if (category.label === '거래/교환/양도') {
        if (!hashtag || !thumbnailImage) return true;
      } else if (category.label === '이벤트/홍보') {
        if (!hashtag) return true;
        // if (!hashtag || !thumbnailImage || !eventAddress.address) return true;
      } else {
        if (!hashtag) return true;
      }
    }
  };
  if (isLoading) return <></>;
  console.log('here', boardArticle);

  // 변환 cat events =2

  useEffect(() => {
    if (boardArticle && articleId) {
      setWriteValue({
        ...writeValue,
        articleTitle: boardArticle.title,
        editValue: boardArticle.content,
        category: { id: 1, label: '' },
      });
      setWritingInfoValue({
        ...writingInfoValue,
        hashtag: boardArticle.hashtags,
        // thumbnailImage:boardArticle.hashtags,
        // eventAddress:boardArticle.eventAddress
      });
    }
  }, [boardArticle]);

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
          onClick={() => {
            if (step === 3) {
              const payloadData = {
                title: articleTitle,
                content: editValue,
                hashtag: [hashtag],
                eventAddress: eventAddress.address + ' ' + eventAddress.detailAddress,
                thumbnailImage: thumbnailImage,
                imageFile: thumbnailImage ? [thumbnailImage] : null,
              };
              if (mod === 'true') modifyBoardMutation.mutate(payloadData);
              else writeBoardMutation.mutate(payloadData);
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
