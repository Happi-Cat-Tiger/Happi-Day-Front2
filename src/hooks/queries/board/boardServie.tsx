import {
  fetchBoardAllApi,
  getBoardArticleApi,
  getBoardCategoriesApi,
  getSearchBoardAllApi,
} from '@/api/board/boardApi';
import { BoardAllResponse, BoardArticleResponse } from '@/api/board/type';
import { useQuery } from '@tanstack/react-query';

export const useGetBoardAllService = () => {
  return useQuery<BoardAllResponse, Error>({
    queryKey: ['board', 'all'],
    queryFn: () => fetchBoardAllApi(),
  });
};

export const useGetBoardSearchAllService = ({ filter }: { filter: string }) => {
  return useQuery<BoardAllResponse, Error>({
    queryKey: ['board', 'all', 'search'],
    queryFn: () => getSearchBoardAllApi({ filter }),
  });
};

export const useGetBoardCategoriesService = ({ categoryId }: { categoryId: number }) => {
  return useQuery<BoardAllResponse, Error>({
    queryKey: ['board', 'categoryList'],
    queryFn: () => getBoardCategoriesApi({ categoryId }),
  });
};

export const useGetBoardArticleService = ({ articleId }: { articleId: number | null }) => {
  const skipToken = !!articleId;
  return useQuery<boolean | BoardArticleResponse>({
    queryKey: ['board', 'article', !!articleId],
    queryFn: () => (articleId ? getBoardArticleApi({ articleId }) : skipToken),
    // enabled: !articleId,
  });
};
