import apiInstance from '../api';
import { EventsWritePatchPayload, EventsWritePayload } from './type';

// 이벤트 생성
export const postEventsWriteApi = async ({
  title,
  startTime,
  endTime,
  description,
  address,
  location,
  hashtags,
  thumbnailFile,
  imageFile,
}: EventsWritePayload) => {
  const formData = new FormData();
  const eventJson = new Blob(
    [
      JSON.stringify({
        title: title,
        startTime: startTime,
        endTime: endTime,
        description: description,
        address: address,
        location: location,
        hashtags: hashtags,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('event', eventJson);
  thumbnailFile && formData.append('thumbnailFile', thumbnailFile);
  imageFile && formData.append('imageFile', imageFile);

  return await apiInstance
    .post(`/events`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    })
    .then((response) => response.data);
};

// 이벤트 전체 조회
export const fetchEventsAllApi = async () => await apiInstance.get(`/events`).then((response) => response.data);

// 이벤트 단일 조회(상세보기)
export const fetchEventsApi = async ({ eventId }: { eventId: Number }) =>
  await apiInstance.get(`/events/${eventId}`).then((response) => response.data);

// 진행중인 이벤트 조회
export const fetchOngoingEvents = async () =>
  await apiInstance.get(`/events/ongoing`).then((response) => response.data);

// 구독한 아티스트/팀의 이벤트 조회
export const fetchSubscribedArtists = async () =>
  await apiInstance.get(`events/subscribedArtists`).then((response) => response.data);

// 구독한 아티스트/팀의 진행중인 이벤트 조회
export const fetchSubscribedOngoing = async () =>
  await apiInstance.get(`events/subscribedArtists/ongoing`).then((response) => response.data);

// 이벤트 수정
export const putEventsApi = async ({
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
}: EventsWritePatchPayload) => {
  const formData = new FormData();
  const eventJson = new Blob(
    [
      JSON.stringify({
        title: title,
        startTime: startTime,
        endTime: endTime,
        description: description,
        address: address,
        location: location,
        hashtags: hashtags,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('event', eventJson);
  thumbnailFile && formData.append('thumbnailFile', thumbnailFile);
  imageFile && formData.append('imageFile', imageFile);

  return await apiInstance
    .put(`/events/${eventId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data', accept: 'application/json' },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    })
    .then((response) => response.data);
};

// 이벤트 삭제
export const deleteEventsApi = async ({ eventId }: { eventId: Number }) =>
  await apiInstance.delete(`events/${eventId}`).then((response) => response.data);

// 이벤트 댓글 작성
export const postEventsCommentApi = async ({ eventId, content }: { eventId: number; content: string }) =>
  await apiInstance.post(`/events/${eventId}/comments`, { content });

// 이벤트 댓글 조회
export const getEventsCommentApi = async ({ eventId }: { eventId: number }) =>
  await apiInstance.get(`/events/${eventId}/comments`);

// 이벤트 댓글 수정
export const updateEventsCommentApi = async ({
  eventId,
  commentId,
  content,
}: {
  eventId: number;
  commentId: number;
  content: string;
}) => await apiInstance.put(`/events/${eventId}/comments/${commentId}`, { content });

// 이벤트 댓글 삭제
export const deleteEventsCommentApi = async ({ eventId, commentId }: { eventId: number; commentId: number }) =>
  await apiInstance.delete(`/events/${eventId}/comments/${commentId}`);

// 이벤트 좋아요
export const likeEventsApi = async ({ eventId }: { eventId: number }) => {
  await apiInstance.post(`/events/${eventId}/eventLike`);
};

// 이벤트 참여하기
export const joinEventsApi = async ({ eventId }: { eventId: number }) => {
  await apiInstance.post(`/events/${eventId}/join`);
};

// 이벤트 리뷰 작성
export const postEventsReviewApi = async ({
  eventId,
  description,
  rating,
  imageFiles,
}: {
  eventId: number;
  description: string;
  rating: number;
  imageFiles: File[];
}) => {
  const formData = new FormData();
  const eventReviewJson = new Blob(
    [
      JSON.stringify({
        eventId: eventId,
        description: description,
        rating: rating,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('eventReview', eventReviewJson);
  imageFiles.forEach((file, index) => {
    formData.append(`imageFiles[${index}]`, file);
  });

  await apiInstance.post(`/events/${eventId}/reviews`);
};
