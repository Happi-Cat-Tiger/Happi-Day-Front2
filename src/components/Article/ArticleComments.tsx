import React, { useState } from 'react';
import StyledSubmitButton from '../Button/StyledSubmitButton';
import {
  useDeleteBoardCommentService,
  usePostBoardCommentService,
  useUpdateBoardCommentService,
} from '@/hooks/mutations/board/boardService';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { LoginState } from '@/atom/LoginState';
import { useRecoilValue } from 'recoil';
import { toast } from 'react-toastify';
import { ProfileResponse } from '@/api/user/type';
import { BoardArticleResponse } from '@/api/board/type';

const ArticleComments = ({ comments, articleId }: { comments: any; articleId: number }) => {
  const isLoggedIn = useRecoilValue(LoginState);

  const postCommentMutation = usePostBoardCommentService();
  const deleteCommentMutation = useDeleteBoardCommentService();
  const updateCommentMutation = useUpdateBoardCommentService();

  const [commentsValue, setCommentsValue] = useState<string>('');
  const [editComment, setEditComment] = useState({ isEdit: false, editValue: '', editId: 0 });

  const handleSubmit = async (e: any, commentsValue: string) => {
    e.preventDefault();
    await postCommentMutation.mutate({ articleId: articleId, content: commentsValue });
    setCommentsValue('');
  };

  const articleData = hdQueryClient.getQueryData(['board', 'article', true]) as BoardArticleResponse;
  const userData = hdQueryClient.getQueryData(['profile', true]) as ProfileResponse;

  const isAuthor = isLoggedIn ? articleData?.user === userData?.nickname : false;
  return (
    <div>
      <div className="my-[10px] flex flex-col gap-[5px]">
        {comments.length &&
          comments.map((comment: any) => (
            <div className="flex gap-2 border-b-2 border-t-2 border-[#ddd]">
              <div key={comment.id} className="relative flex flex-1 gap-[20px] pb-[70px] pt-[30px]">
                <p className="text-gray4 sm:prose-body-XS md:prose-body-S sm:w-[25%] md:w-[10%]">🧑 {comment.user}</p>
                {editComment.isEdit && editComment.editId === comment.id ? (
                  <input
                    className="w-full border border-solid border-gray5 p-2 text-gray5 outline-none sm:prose-body-XS md:prose-body-S sm:w-[75%] md:w-[90%]"
                    defaultValue={editComment.editValue}
                    onChange={(e) => setEditComment({ ...editComment, editValue: e.target.value })}></input>
                ) : (
                  <p className="sm:prose-body-XS md:prose-body-S sm:w-[75%] md:w-[90%]">{comment.content}</p>
                )}
                <p className="prose-body-XXS absolute bottom-[10px] text-gray3">{comment.createdAt}</p>
              </div>
              {isAuthor && (
                <div className=" divide-y-2 text-right">
                  <p
                    className="px-1.5 py-1 hover:text-gray5 "
                    onClick={() => {
                      setEditComment({ editValue: comment.content, isEdit: !editComment.isEdit, editId: comment.id });
                    }}>
                    수정
                  </p>
                  <p
                    className="px-1.5 py-1 hover:text-gray5"
                    onClick={() => deleteCommentMutation.mutate({ articleId: articleId, commentId: comment.id })}>
                    삭제
                  </p>
                  {editComment.isEdit && editComment.editId === comment.id && (
                    <p
                      className="px-1.5 py-1 hover:text-gray5"
                      onClick={() => {
                        updateCommentMutation.mutate({
                          articleId: articleId,
                          commentId: comment.id,
                          content: editComment.editValue,
                        });
                        setEditComment({ editValue: '', isEdit: false, editId: 0 });
                      }}>
                      수정 등록
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
      <form onSubmit={(e) => handleSubmit(e, commentsValue)}>
        <div
          className="mb-[26px] flex flex-col gap-[26px] border-2 border-[#ddd] p-5"
          onClick={() => !isLoggedIn && toast('로그인 해주세요')}>
          <p className="text-gray4 sm:prose-body-XS md:prose-body-S">{userData?.nickname as string}</p>
          <textarea
            placeholder={isLoggedIn ? '댓글을 달아주세요' : '로그인 해주세요'}
            className="w-full text-gray5 outline-none sm:prose-body-XS md:prose-body-S"
            disabled={!isLoggedIn}
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
            disabled={!isLoggedIn}
            className="rounded-[16px] bg-gray5 px-6 py-4 text-white sm:prose-btn-M md:prose-btn-L"
          />
        </div>
      </form>
    </div>
  );
};

export default ArticleComments;
