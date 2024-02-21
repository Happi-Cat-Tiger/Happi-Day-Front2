'use client';

import React, { useState } from 'react';
import StyledButton from '@/components/Button/StyledButton';
import { AiTwotoneEye, AiOutlineClockCircle, AiOutlineMessage, AiFillHeart } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { eventsCommentValue } from '@/atom/eventsAtom';
import { getBoardArticleService } from '@/hooks/queries/board/boardServie';
import Image from 'next/image';
import PrimaryButton from '@/components/Button/PrimaryButton';

const page = ({ params }: { params: any }) => {
  const [comments, setComments] = useRecoilState(eventsCommentValue);
  const [commentsValue, setCommentsValue] = useState<string>();
  const getComments = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentsValue(e.target.value);
  };

  const addComments = () => {
    if (commentsValue) {
      const currentTime = new Date().toLocaleString();
      const newComment = {
        id: comments.length + 1,
        user: '성동윤',
        comment: `${commentsValue}`,
        date: `${currentTime}`,
      };

      setComments([...comments, newComment]);
      setCommentsValue('');
    } else {
      alert('댓글을 입력해주세요 !');
    }
  };

  const { data: boardArticle, isLoading } = getBoardArticleService({ articleId: params.id });
  console.log(boardArticle);

  if (isLoading) return <></>;

  return (
    <div className="mb-[200px] flex w-full flex-col px-[8px] sm:mt-[50px] md:mt-[100px]">
      <div
        className="icon-default flex h-10 w-10 cursor-pointer items-center justify-center text-[30px]"
        onClick={() => window.history.back()}>
        ←
      </div>
      <div className="flex justify-end gap-3">
        <PrimaryButton label="수정" disabled={false} onClick={() => {}} />
        <PrimaryButton label="삭제" disabled={false} onClick={() => {}} />
      </div>

      {boardArticle && (
        <div className="relative mb-[100px] flex w-full flex-col items-center gap-4">
          <h3 className="prose-h4 md:prose-h3">{boardArticle.title}</h3>
          <ul className="prose-body-XS flex gap-4 text-gray4 md:prose-body-S">
            <li className="flex items-center gap-[3px]">🧑 {boardArticle.user}</li>
            <li className="flex items-center gap-[3px]">
              <AiOutlineMessage />
              {boardArticle.comments.length}건
            </li>
            <li className="flex items-center gap-[3px]">
              <AiTwotoneEye /> {boardArticle.viewCount}회
            </li>
            <li className="flex items-center gap-[3px]">
              <AiOutlineClockCircle />
              {boardArticle.updatedAt}
            </li>
          </ul>
          <ul className="prose-body-XS flex w-full gap-4 border-b-[1px] border-t-[1px] border-gray6 p-[10px] text-gray4 md:prose-body-S">
            {boardArticle.hashtags.map((tag: string) => (
              <li>{tag}</li>
            ))}
          </ul>
          {boardArticle.imageUrl[0] && (
            <Image
              src={boardArticle.imageUrl[0]}
              width={200}
              height={140}
              alt="thumbnail"
              className="my-[30px] h-[300px] w-[300px] flex-1 rounded-[4px] bg-blue-200 md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]"
              priority
            />
          )}
          <div className="my-[100px] w-[400px] md:w-[600px] lg:w-[800px]">
            <p className="prose-body-S md:prose-body-L">
              <div
                dangerouslySetInnerHTML={{ __html: boardArticle.content }}
                className="prose-body-M my-10 md:prose-body-L"
              />
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-4 bg-[#FEF9D0] py-[20px]">
            <div className="flex flex-col items-center">
              <h6 className="prose-h7 text-gray5 md:prose-h6">Place</h6>
              <p className="prose-body-XS md:prose-body-S">카페 소공원</p>
            </div>
            <div className="flex flex-col items-center">
              <h6 className="prose-h7 text-gray5 md:prose-h6">Location</h6>
              <p className="prose-body-XS md:prose-body-S">서울 마포구 어울림마당로 5길 52 2층</p>
            </div>
            <div className="flex h-[150px] w-[200px] items-center justify-center border-2 border-black">지도</div>
            <div className="flex flex-col items-center">
              <h6 className="prose-h7 text-gray5 md:prose-h6">Date</h6>
              <p className="prose-body-XS md:prose-body-S">2024-01-08 ~ 2024-01-09</p>
            </div>
          </div>
        </div>
      )}

      <div>
        <ul className="prose-body-XS flex gap-4 md:prose-body-S">
          <li className="flex items-center gap-[3px]">
            <AiFillHeart style={{ color: 'red' }} /> 좋아요 {boardArticle?.likeUsersNum}
          </li>
          <li className="flex items-center gap-[3px]">
            <AiOutlineMessage /> 댓글 {boardArticle?.comments.length}
          </li>
        </ul>
        <div className="my-[10px] flex flex-col gap-[5px]">
          {comments.length &&
            comments.map((comment) => (
              <div
                key={comment.id}
                className="relative flex gap-[20px] border-b-2 border-t-2 border-[#ddd] pb-[70px] pt-[30px]">
                <p className="text-gray4 sm:prose-body-XS md:prose-body-S sm:w-[25%] md:w-[10%]">🧑 {comment.user}</p>
                <p className="sm:prose-body-XS md:prose-body-S sm:w-[75%] md:w-[90%]">{comment.comment}</p>
                <p className="prose-body-XXS absolute bottom-[10px] text-gray3">{comment.date}</p>
              </div>
            ))}
        </div>
        <div className="mb-[26px] flex flex-col gap-[26px] border-2 border-[#ddd] p-5">
          <p className="text-gray4 sm:prose-body-XS md:prose-body-S">작성자 닉네임</p>
          <textarea
            placeholder="이 곳에 다녀온 후기를 간단하게 작성해주세요! 더 길게 작성하고 싶으면 자유게시판으로 ~~"
            className="w-full text-gray5 outline-none sm:prose-body-XS md:prose-body-S"
            value={commentsValue}
            onChange={getComments}
          />
        </div>
        <div className="text-right">
          <StyledButton
            label="등록"
            onClick={() => addComments()}
            disabled={false}
            className="rounded-[16px] bg-gray5 px-6 py-4 text-white sm:prose-btn-M md:prose-btn-L"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
