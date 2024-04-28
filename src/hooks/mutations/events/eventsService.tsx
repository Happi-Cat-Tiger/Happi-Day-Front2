import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { EventsWritePatchPayload, EventsWritePayload } from '@/api/events/type';
import {
  deleteEventsApi,
  deleteEventsCommentApi,
  postEventsCommentApi,
  postEventsReviewApi,
  postEventsWriteApi,
  putEventsApi,
  updateEventsCommentApi,
  postEventsLikeApi,
  postEventsJoinApi,
} from '@/api/events/eventsApi';
import { hdQueryClient } from '@/shared/hdQueryClient';
import { toast } from 'react-toastify';

export const usePostWriteEventsService = () => {
  return useMutation({
    mutationFn: ({
      title,
      startTime,
      endTime,
      description,
      address,
      location,
      hashtags,
      thumbnailFile,
      imageFile,
    }: EventsWritePayload) =>
      postEventsWriteApi({
        title,
        startTime,
        endTime,
        description,
        address,
        location,
        hashtags,
        thumbnailFile,
        imageFile,
      }),
    onSuccess: (data) => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      hdQueryClient.invalidateQueries({ queryKey: ['events', 'eventsList'] });

      toast('글이 작성되었습니다.');
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

export const usePutEventsService = ({ eventId }: { eventId: number | null }) => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      title,
      startTime,
      endTime,
      description,
      address,
      location,
      hashtags,
      thumbnailFile,
      imageFile,
    }: EventsWritePatchPayload) =>
      putEventsApi({
        eventId,
        title,
        startTime,
        endTime,
        description,
        address,
        location,
        hashtags,
        thumbnailFile,
        imageFile,
      }),
    onSuccess: (data) => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      hdQueryClient.invalidateQueries({ queryKey: ['events', 'eventsList'] });

      const { eventId } = data;
      router.push(`/events/${eventId}`);

      toast('글이 수정되었습니다.');
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
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      toast('댓글이 수정되었습니다.');
    },
  });
};

export const usePostEventLikeService = () => {
  return useMutation({
    mutationFn: ({ eventId }: { eventId: number }) => postEventsLikeApi({ eventId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      toast('이벤트 좋아요!');
    },
  });
};

export const usePostEventJoinService = () => {
  return useMutation({
    mutationFn: ({ eventId }: { eventId: number }) => postEventsJoinApi({ eventId }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      toast('이벤트 참여하기 완료!');
    },
  });
};

export const usePostEventsReviewService = () => {
  return useMutation({
    mutationFn: ({
      eventId,
      description,
      rating,
      imageFiles,
    }: {
      eventId: number;
      description: string;
      rating: number;
      imageFiles: File[];
    }) => postEventsReviewApi({ eventId, description, rating, imageFiles }),
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['events', true] });
      toast('리뷰 작성이 완료되었습니다');
    },
  });
};
