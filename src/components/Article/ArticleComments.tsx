import React, { useState } from 'react';
import StyledSubmitButton from '../Button/StyledSubmitButton';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { useDeleteBoardCommentService, usePostBoardCommentService } from '@/hooks/mutations/board/boardService';

const ArticleComments = ({
  comments,
  articleId,
  isAuthor,
}: {
  comments: any;
  articleId: number;
  isAuthor: boolean;
}) => {
  const postCommentMutation = usePostBoardCommentService();
  const deleteCommentMutation = useDeleteBoardCommentService();

  const [commentsValue, setCommentsValue] = useState<string>('');
  const [editComment, setEditComment] = useState({ isEdit: false, editValue: '', editId: 0 });

  const handleSubmit = async (e: any, commentsValue: string) => {
    e.preventDefault();
    await postCommentMutation.mutate({ articleId: articleId, content: commentsValue });
    setCommentsValue('');
  };
  return (
    <div>
      <div className="my-[10px] flex flex-col gap-[5px]">
        {comments.length &&
          comments.map((comment: any) => (
            <div
              key={comment.id}
              className="relative flex gap-[20px] border-b-2 border-t-2 border-[#ddd] pb-[70px] pt-[30px]">
              {/* <AiOutlineEllipsis className="icon-default" /> */}
              {isAuthor && (
                <div className="absolute right-0">
                  <p
                    onClick={() => setEditComment({ ...editComment, isEdit: !editComment.isEdit, editId: comment.id })}>
                    수정
                  </p>
                  <p onClick={() => deleteCommentMutation.mutate({ articleId: articleId, commentId: comment.id })}>
                    삭제
                  </p>
                </div>
              )}
              <p className="text-gray4 sm:prose-body-XS md:prose-body-S sm:w-[25%] md:w-[10%]">🧑 {comment.user}</p>
              {editComment.isEdit && editComment.editId === comment.id ? (
                <input
                  className="w-full border-2 border-solid border-gray5 p-2 text-gray5 outline-none sm:prose-body-XS md:prose-body-S sm:w-[75%] md:w-[90%]"
                  defaultValue={comment.content}></input>
              ) : (
                <p className="sm:prose-body-XS md:prose-body-S sm:w-[75%] md:w-[90%]">{comment.content}</p>
              )}
              <p className="prose-body-XXS absolute bottom-[10px] text-gray3">{comment.createdAt}</p>
            </div>
          ))}
      </div>
      <form onSubmit={(e) => handleSubmit(e, commentsValue)}>
        <div className="mb-[26px] flex flex-col gap-[26px] border-2 border-[#ddd] p-5">
          <p className="text-gray4 sm:prose-body-XS md:prose-body-S">작성자 닉네임</p>
          <textarea
            placeholder="이 곳에 다녀온 후기를 간단하게 작성해주세요! 더 길게 작성하고 싶으면 자유게시판으로 ~~"
            className="w-full text-gray5 outline-none sm:prose-body-XS md:prose-body-S"
            value={commentsValue}
            onChange={(e) => setCommentsValue(e.target.value)}
          />
        </div>
        <div className="text-right">
          <StyledSubmitButton
            label="등록"
            type="submit"
            isSubmitting={false}
            onClick={() => {}}
            disabled={false}
            className="rounded-[16px] bg-gray5 px-6 py-4 text-white sm:prose-btn-M md:prose-btn-L"
          />
        </div>
      </form>
    </div>
  );
};

export default ArticleComments;
