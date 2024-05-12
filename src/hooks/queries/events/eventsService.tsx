import {
  fetchEventsAllApi,
  fetchEventsApi,
  fetchOngoingEvents,
  getEventsCommentApi,
  getEventsReviewApi,
} from '@/api/events/eventsApi';
import { useQuery } from '@tanstack/react-query';

export const getAllEvents = () => {
  const query = useQuery({
    queryKey: ['allEvents'],
    queryFn: () => fetchEventsAllApi(),
  });
  return query;
};

export const getEventsDetail = ({ eventId }: { eventId: number }) => {
  const query = useQuery({
    queryKey: ['eventsDetail'],
    queryFn: () => fetchEventsApi({ eventId }),
  });
  return query;
};

export const getOngoingEvents = () => {
  const query = useQuery({
    queryKey: ['ongoingEvents'],
    queryFn: () => fetchOngoingEvents(),
  });
  return query;
};

export const getAllEventsComment = ({ eventId }: { eventId: number }) => {
  const query = useQuery({
    queryKey: ['allEventsComment'],
    queryFn: () => getEventsCommentApi({ eventId }),
  });
  return query;
};

export const getEventsReview = ({ eventId }: { eventId: number }) => {
  const query = useQuery({
    queryKey: ['allEventsReview'],
    queryFn: () => getEventsReviewApi({ eventId }),
  });
  return query;
};
