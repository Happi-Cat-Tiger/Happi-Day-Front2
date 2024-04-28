import apiInstance from '@/api/api';
import {
  SalesProductList,
  SalesPostList,
  SalesWritePostPayload,
  SalesAllResponse,
  SalesArticleResponse,
  SalesWritePatchPayload,
} from '@/types/sales';
import async from 'node_modules/react-select/dist/declarations/src/async';

export const getSalesPostListApi = async () =>
  await apiInstance.get<SalesPostList[]>('/user/sales').then(({ data }) => data);

export const getSalesProductListApi = async (salesId: number) =>
  await apiInstance.get<SalesProductList[]>(`/sales/${salesId}/order`).then(({ data }) => data);

// 카테고리별(굿즈/공구) 글 전체조회
export const getSalesCategoriesListApi = async (categoryId: number) =>
  await apiInstance.get<SalesAllResponse>(`/sales/${categoryId}`).then((response) => response.data);

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
  await apiInstance.get<SalesArticleResponse>(`/sales/${categoryId}/${salesId}`).then((response) => response.data);

//게시글 작성
export const postSalesWriteApi = async ({
  categoryId,
  name,
  description,
  hashtags,
  startTime,
  endTime,
  accountName,
  accountUser,
  accountNumber,
  namePrice,
  products,
  deliveries,
  thumbnailImage,
  imageList,
}: SalesWritePostPayload) => {
  const formData = new FormData();
  const articleJson = new Blob(
    [
      JSON.stringify({
        name: name,
        description: description,
        hashtag: hashtags,
        startTime: startTime,
        endTime: endTime,
        accountName: accountName,
        accountUser: accountUser,
        accountNumbe: accountNumber,
        namePrice: namePrice,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('article', articleJson);
  thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
  imageList && imageList.forEach((file) => formData.append('imageList', file));
  formData.append('products', JSON.stringify(products));
  formData.append('deliveries', JSON.stringify(deliveries));

  return await apiInstance
    .post(`/sales/${categoryId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    })
    .then((response) => response.data);
};

// 글 삭제
export const deleteSalesArticleApi = async ({ salesId }: { salesId: number }) =>
  await apiInstance.delete(`/sales/${salesId}`);

// 글 수정
export const putSalesArticleApi = async ({
  salesId,
  name,
  description,
  hashtags,
  startTime,
  endTime,
  accountName,
  accountUser,
  accountNumber,
  namePrice,
  products,
  deliveries,
  thumbnailImage,
  imageList,
}: SalesWritePatchPayload) => {
  const formData = new FormData();
  const articleJson = new Blob(
    [
      JSON.stringify({
        name: name,
        description: description,
        hashtag: hashtags,
        startTime: startTime,
        endTime: endTime,
        accountName: accountName,
        accountUser: accountUser,
        accountNumbe: accountNumber,
        namePrice: namePrice,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('article', articleJson);
  thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
  imageList && imageList.forEach((file) => formData.append('imageList', file));
  formData.append('products', JSON.stringify(products));
  formData.append('deliveries', JSON.stringify(deliveries));

  return await apiInstance
    .put(`/sales/${salesId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    })
    .then((response) => response.data);
};
