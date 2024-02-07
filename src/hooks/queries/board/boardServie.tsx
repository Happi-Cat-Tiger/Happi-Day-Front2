import { fetchBoardAllApi } from '@/api/board/boardApi';
import { BoardAllResponse } from '@/api/board/type';
import { useQuery } from 'react-query';

export const getBoardAllService = () => {
  const query = useQuery<BoardAllResponse>({
    queryKey: ['board', 'all'],
    queryFn: () => fetchBoardAllApi(),
  });
  return query;
};
