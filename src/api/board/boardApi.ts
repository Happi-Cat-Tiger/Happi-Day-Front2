import apiInstance from '@/api/api';
import { BoardAllResponse } from './type';

// 게시글 작성
export const postBoardWriteApi = async ({
  categoryId,
  title,
  content,
  hashtag,
  eventAddress,
  thumbnailImage,
  imageFile,
}: {
  categoryId: number;
  title: string;
  content: string;
  hashtag: string[];
  eventAddress: string;
  thumbnailImage: File | null;
  imageFile: File[] | null;
}) => {
  const formData = new FormData();
  const articleJson = new Blob(
    [JSON.stringify({ title: title, content: content, hashtag: hashtag, eventAddress: eventAddress })],
    {
      type: 'application/json',
    },
  );
  formData.append('article', articleJson);
  thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
  imageFile && imageFile.forEach((file) => formData.append('imageFile', file));

  await apiInstance.post(`/articles/${categoryId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
    transformRequest: [
      function () {
        return formData;
      },
    ],
  });
};
// 전체 글 조회
export const fetchBoardAllApi = async (): Promise<BoardAllResponse> =>
  await apiInstance.get('/articles').then((response) => response.data);

// 카테고리별 글 전체 조회 - 구독 중 아티스트
export const getBoardCategoriesOfSubscribeApi = async ({ categoryId }: { categoryId: number }) =>
  await apiInstance.get(`/articles/${categoryId}/list/subscribedArtists`);

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
export const patchBoardArticleApi = async ({
  articleId,
  title,
  content,
  hashtag,
  eventAddress,
  thumbnailImage,
  imageFile,
}: {
  articleId: number | null;
  title: string;
  content: string;
  hashtag: string[];
  eventAddress: string;
  thumbnailImage: File | null;
  imageFile: File[] | null;
}) => {
  const formData = new FormData();
  const articleJson = new Blob(
    [JSON.stringify({ title: title, content: content, hashtag: hashtag, eventAddress: eventAddress })],
    {
      type: 'application/json',
    },
  );
  formData.append('article', articleJson);
  thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
  imageFile && imageFile.forEach((file) => formData.append('imageFile', file));

  await apiInstance.patch(`/articles/${articleId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
    transformRequest: [
      function () {
        return formData;
      },
    ],
  });
};
