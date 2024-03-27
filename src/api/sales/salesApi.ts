import apiInstance from '@/api/api';
import { SalesProductList, SalesPostList, SalesCategoriesList } from '@/types/sales';
import async from 'node_modules/react-select/dist/declarations/src/async';

export const getSalesPostListApi = async () =>
  await apiInstance.get<SalesPostList[]>('/user/sales').then(({ data }) => data);

export const getSalesProductListApi = async (salesId: number) =>
  await apiInstance.get<SalesProductList[]>(`/sales/${salesId}/order`).then(({ data }) => data);

// 게시글 작성
// export const postSalesWriteApi = async ({
//   categoryId,
//   name,
//   description,
//   hashtag,
//   account,
//   thumbnailImage,
//   imageFile,
// }: {
//   categoryId: number;
//   name: string;
//   description: string;
//   categoryId: number;
//   title: string;
//   content: string;
//   hashtag: string[];
//   thumbnailImage: File | null;
//   imageFile: File[] | null;
// }) => {
//   const formData = new FormData();
//   const articleJson = new Blob([JSON.stringify({ title: name, description: description, hashtag: hashtag })], {
//     type: 'application/json',
//   });
//   formData.append('article', articleJson);
//   thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
//   imageFile && imageFile.forEach((file) => formData.append('imageFile', file));

//   await apiInstance.post(`/articles/${categoryId}`, formData, {
//     headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
//     transformRequest: [
//       function () {
//         return formData;
//       },
//     ],
//   });
// };

// 카테고리별(굿즈/공구) 글 전체조회
export const getSalesCategoriesListApi = async (categoryId: number) =>
  await apiInstance.get<SalesCategoriesList[]>(`/sales/${categoryId}`).then((response) => response.data);

// 카테고리별(굿즈/공구) - 구독 중 아티스트 글만 조회
export const getSalesSubscribeApi = async (categoryId: number) =>
  await apiInstance.get(`/sales/${categoryId}/subscribedArtists`).then((response) => response.data);

// 카테고리별(굿즈/공구) - 현재 판매중인 글만 조회
export const getSalesOngoingApi = async (categoryId: number) =>
  await apiInstance.get(`/sales/${categoryId}/ongoing`).then((response) => response.data);

// 카테고리별(굿즈/공구) - 현재 판매중인 글 + 현재 판매중인 글만 조회
export const getSalesSubscribeAndOngoingApi = async (categoryId: number) =>
  await apiInstance.get(`/sales/${categoryId}/subscribedArtists/ongoing`).then((response) => response.data);

// 판매글 상세보기 (단일 조회)
export const getSalesArticleApi = async (categoryId: number, salesId: number) =>
  await apiInstance.get(`/sales/${categoryId}/${salesId}`).then((response) => response.data);

// 글 삭제
export const deleteSalesArticleApi = async ({ SalesId }: { SalesId: number }) =>
  await apiInstance.delete(`/Sales/${SalesId}`);

// 글 수정
export const patchSalesArticleApi = async ({ SalesId }: { SalesId: number }) =>
  await apiInstance.patch(`/Sales/${SalesId}`);
