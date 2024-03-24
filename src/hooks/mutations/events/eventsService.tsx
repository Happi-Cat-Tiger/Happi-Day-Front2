import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { EventsWritePayload } from '@/api/events/type';
import {
  deleteEventsApi,
  deleteEventsCommentApi,
  postEventsCommentApi,
  postEventsWriteApi,
  putEventsApi,
  updateEventsCommentApi,
} from '@/api/events/eventsApi';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { toast } from 'react-toastify';

export const usePostWriteEventsService = ({ eventId }: { eventId: number }) => {
  return useMutation({
    mutationFn: ({ title, content, hashtag, address, detailAddress, thumbnailImage, imageFile }: EventsWritePayload) =>
      postEventsWriteApi({ eventId, title, content, hashtag, address, detailAddress, thumbnailImage, imageFile }),
    onSuccess: (data) => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      hdQueryClient.invalidateQueries({ queryKey: ['events', 'eventsList'] });
    },
  });
};

export const useDeleteEventsService = ({ eventId }: { eventId: number }) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => deleteEventsApi({ eventId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      hdQueryClient.invalidateQueries({ queryKey: ['events', 'eventsList'] });
      toast('글이 삭제되었습니다.');
      router.push('/events');
    },
  });
};

export const usePutBoardEventsService = ({ eventId }: { eventId: number }) => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ title, content, hashtag, address, detailAddress, thumbnailImage, imageFile }: EventsWritePayload) =>
      putEventsApi({ eventId, title, content, hashtag, address, detailAddress, thumbnailImage, imageFile }),
    onSuccess: (data) => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      hdQueryClient.invalidateQueries({ queryKey: ['events', 'eventsList'] });
    },
  });
};

export const usePostEventCommentService = () => {
  return useMutation({
    mutationFn: ({ eventId, content }: { eventId: number; content: string }) =>
      postEventsCommentApi({ eventId, content }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      toast('댓글이 작성되었습니다.');
    },
  });
};

export const useDeleteEventsCommentService = () => {
  return useMutation({
    mutationFn: ({ eventId, commentId }: { eventId: number; commentId: number }) =>
      deleteEventsCommentApi({ eventId, commentId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      toast('댓글이 삭제되었습니다.');
    },
  });
};

export const useUpdateEventsCommentService = () => {
  return useMutation({
    mutationFn: ({ eventId, commentId, content }: { eventId: number; commentId: number; content: string }) =>
      updateEventsCommentApi({ eventId, commentId, content }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['evnets', true] });
      toast('댓글이 수정되었습니다.');
    },
  });
};
