import { fetchBoardAllApi, getBoardCategoriesApi } from '@/api/board/boardApi';
import { BoardAllResponse } from '@/api/board/type';
import { useQuery } from 'react-query';

export const getBoardAllService = () => {
  const query = useQuery<BoardAllResponse>({
    queryKey: ['board', 'all'],
    queryFn: () => fetchBoardAllApi(),
  });
  return query;
};

export const getBoardCategoriesService = ({ categoryId }: { categoryId: number }) => {
  const query = useQuery<BoardAllResponse>({
    queryKey: ['board', 'event'],
    queryFn: () => getBoardCategoriesApi({ categoryId }),
  });
  return query;
};
