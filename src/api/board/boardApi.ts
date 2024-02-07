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
  categoryId: string;
  title: string;
  content: string;
  hashtag: string;
  eventAddress: string;
  thumbnailImage: string;
  imageFile: string;
}) =>
  await apiInstance.post(`/articles/${categoryId}`, [
    ,
    { categoryId, title, content, hashtag, eventAddress, thumbnailImage, imageFile },
  ]);

// 전체 글 조회
export const fetchBoardAllApi = async (): Promise<BoardAllResponse> =>
  await apiInstance.get('/articles').then((response) => response.data);

// 카테고리별 글 전체 조회 - 구독 중 아티스트
export const getBoardCategoriesOfSubscribeApi = async ({ categoryId }: { categoryId: string }) =>
  await apiInstance.get(`/articles/${categoryId}/list/subscribedArtists`);

// 카테고리별 글 전체 조회
export const getBoardCategoriesApi = async ({ categoryId }: { categoryId: string }) =>
  await apiInstance.get(`/articles/${categoryId}/list`);

// 글 상세보기 (단일 조회)
export const getBoardArticleApi = async ({ articleId }: { articleId: string }) =>
  await apiInstance.get(`/articles/${articleId}`);

// 글 삭제
export const deleteBoardArticleApi = async ({ articleId }: { articleId: string }) =>
  await apiInstance.delete(`/articles/${articleId}`);

// 글 수정
export const patchBoardArticleApi = async ({ articleId }: { articleId: string }) =>
  await apiInstance.patch(`/articles/${articleId}`);
