import { fetchBoardAllApi, getBoardArticleApi, getBoardCategoriesApi } from '@/api/board/boardApi';
import { BoardAllResponse } from '@/api/board/type';
import { useQuery } from '@tanstack/react-query';

export const getBoardAllService = () => {
  const query = useQuery<BoardAllResponse>({
    queryKey: ['board', 'all'],
    queryFn: () => fetchBoardAllApi(),
  });
  return query;
};

export const getBoardCategoriesService = ({ categoryId }: { categoryId: number }) => {
  const query = useQuery<BoardAllResponse>({
    queryKey: ['board'],
    queryFn: () => getBoardCategoriesApi({ categoryId }),
  });
  return query;
};

export const getBoardArticleService = ({ articleId }: { articleId: number | null }) => {
  const query = useQuery({
    queryKey: ['board', 'article'],
    queryFn: () => getBoardArticleApi({ articleId }),
    enabled: !!articleId,
  });
  return query;
};
