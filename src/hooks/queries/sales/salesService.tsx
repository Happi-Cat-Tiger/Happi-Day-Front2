import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  getSalesPostListApi,
  getSalesProductListApi,
  getSalesCategoriesListApi,
  getSalesSubscribeApi,
  getSalesOngoingApi,
  getSalesSubscribeAndOngoingApi,
  getSalesArticleApi,
} from '@/api/sales/salesApi';
import { SalesProductList, SalesPostList, SalesCategoriesList, SalesArticle } from '@/types/sales';

export const getSalesPostListService = () => {
  const query = useQuery<SalesPostList[], AxiosError>({
    queryKey: ['sales'],
    queryFn: () => getSalesPostListApi(),
  });
  return query;
};

export const getSalesProductListService = ({ salesId }: { salesId: number }) => {
  return useQuery<SalesProductList[], AxiosError>({
    queryKey: ['sales'],
    queryFn: () => getSalesProductListApi(salesId),
  });
};

// 카테고리별(굿즈/공구) 글 전체조회
export const useGetSalesCategoriesListService = ({ categoryId }: { categoryId: number }) => {
  return useQuery<SalesCategoriesList[], AxiosError>({
    queryKey: ['salesCategories'],
    queryFn: () => getSalesCategoriesListApi(categoryId),
  });
};

// 카테고리별(굿즈/공구) - 구독 중 아티스트 글만 조회
export const useGetSalesSubscribeListService = ({ categoryId }: { categoryId: number }) => {
  return useQuery<SalesCategoriesList[], AxiosError>({
    queryKey: ['getSalesSubscribeApi'],
    queryFn: () => getSalesSubscribeApi(categoryId),
  });
};

// 카테고리별(굿즈/공구) - 현재 판매중인 글만 조회
export const useGetSalesOngoingListService = ({ categoryId }: { categoryId: number }) => {
  return useQuery<SalesCategoriesList[], AxiosError>({
    queryKey: ['getSalesOngoingApi'],
    queryFn: () => getSalesOngoingApi(categoryId),
  });
};

// 카테고리별(굿즈/공구) - 현재 판매중인 글 + 현재 판매중인 글만 조회
export const useGetSalesSubscribeAndOngoingListService = ({ categoryId }: { categoryId: number }) => {
  return useQuery<SalesCategoriesList[], AxiosError>({
    queryKey: ['getSalesSubscribeAndOngoingApi'],
    queryFn: () => getSalesSubscribeAndOngoingApi(categoryId),
  });
};

// 판매글 상세보기 (단일 조회)
export const useGetSalesArticleService = ({ categoryId, salesId }: { categoryId: number; salesId: number }) => {
  return useQuery<SalesArticle[], AxiosError>({
    queryKey: ['getSalesArticleApi'],
    queryFn: () => getSalesArticleApi(categoryId, salesId),
  });
};
