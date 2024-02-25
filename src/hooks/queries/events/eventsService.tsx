import { fetchEvenetsAllApi } from '@/api/events/eventsApi';
import { useQuery } from '@tanstack/react-query';

export const getAllEvents = () => {
  const query = useQuery({
    queryKey: ['allEvents'],
    queryFn: () => fetchEvenetsAllApi(),
  });
  return query;
};
