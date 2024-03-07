import apiInstance from '@/api/api';
import { BoardAllResponse, BoardWritePatchPayload, BoardWritePostPayload } from './type';

// 게시글 작성
export const postBoardWriteApi = async ({
  categoryId,
  title,
  content,
  hashtag,
  address,
  detailAddress,
  thumbnailImage,
  imageFile,
}: BoardWritePostPayload) => {
  const formData = new FormData();
  const articleJson = new Blob(
    [
      JSON.stringify({
        title: title,
        content: content,
        hashtag: hashtag,
        eventAddress: address,
        eventDetailAddress: detailAddress,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('article', articleJson);
  thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
  imageFile && imageFile.forEach((file) => formData.append('imageFile', file));

  return await apiInstance
    .post(`/articles/${categoryId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    })
    .then((response) => response.data);
};
// 전체 글 조회
export const fetchBoardAllApi = async (): Promise<BoardAllResponse> =>
  await apiInstance.get('/articles').then((response) => response.data);

// 전체 글 조회 (검색)
export const getSearchBoardAllApi = async ({ filter }: { filter: string }): Promise<BoardAllResponse> => {
  return await apiInstance.get('/articles').then((response) => response.data);
};

// 카테고리별 글 전체 조회 - 구독 중 아티스트
export const getBoardCategoriesOfSubscribeApi = async ({ categoryId }: { categoryId: number }) =>
  await apiInstance.get(`/articles/${categoryId}/list/subscribedArtists`).then((response) => response.data);

// 카테고리별 글 전체 조회
export const getBoardCategoriesApi = async ({ categoryId }: { categoryId: number }): Promise<BoardAllResponse> =>
  await apiInstance.get(`/articles/${categoryId}/list`).then((response) => response.data);

// 글 상세보기 (단일 조회)
export const getBoardArticleApi = async ({ articleId }: { articleId: number | null }) =>
  await apiInstance.get(`/articles/${articleId}`).then((response) => response.data);

// 글 삭제
export const deleteBoardArticleApi = async ({ articleId }: { articleId: number }) =>
  await apiInstance.delete(`/articles/${articleId}`);

// 글 수정
export const putBoardArticleApi = async ({
  articleId,
  title,
  content,
  hashtag,
  address,
  detailAddress,
  thumbnailImage,
  imageFile,
}: BoardWritePatchPayload) => {
  const formData = new FormData();
  const articleJson = new Blob(
    [
      JSON.stringify({
        title: title,
        content: content,
        hashtag: hashtag,
        eventAddress: address,
        eventDetailAddress: detailAddress,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('article', articleJson);
  thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
  imageFile && imageFile.forEach((file) => formData.append('imageFile', file));

  return await apiInstance
    .put(`/articles/${articleId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    })
    .then((response) => response.data);
};

// 댓글 작성
export const postBoardCommentApi = async ({ articleId, content }: { articleId: number; content: string }) =>
  await apiInstance.post(`/articles/${articleId}/comments`, { content });

// 댓글 조회
export const getBoardCommentApi = async ({ articleId }: { articleId: number }) =>
  await apiInstance.get(`/articles/${articleId}/comments`);

// 댓글 수정
export const updateBoardCommentApi = async ({
  articleId,
  commentId,
  content,
}: {
  articleId: number;
  commentId: number;
  content: string;
}) => await apiInstance.put(`/articles/${articleId}/comments/${commentId}`, { content });

// 댓글 삭제
export const deleteBoardCommentApi = async ({ articleId, commentId }: { articleId: number; commentId: number }) =>
  await apiInstance.delete(`/articles/${articleId}/comments/${commentId}`);
