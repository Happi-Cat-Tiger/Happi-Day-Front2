import { fetchBoardAllApi, getBoardArticleApi, getBoardCategoriesApi } from '@/api/board/boardApi';
import { BoardAllResponse } from '@/api/board/type';
import { useQuery } from '@tanstack/react-query';

export const useGetBoardAllService = () => {
  return useQuery<BoardAllResponse, Error>({
    queryKey: ['board', 'articleList'],
    queryFn: () => fetchBoardAllApi(),
  });
};

export const useGetBoardCategoriesService = ({ categoryId }: { categoryId: number }) => {
  return useQuery<BoardAllResponse, Error>({
    queryKey: ['board', 'articleList'],
    queryFn: () => getBoardCategoriesApi({ categoryId }),
  });
};

export const useGetBoardArticleService = ({ articleId }: { articleId: number | null }) => {
  return useQuery({
    queryKey: ['board', 'article'],
    queryFn: () => getBoardArticleApi({ articleId }),
    enabled: !!articleId,
  });
};
