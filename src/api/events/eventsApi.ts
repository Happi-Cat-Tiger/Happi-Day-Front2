import apiInstance from '../api';
import { EventsWritePostPayload, EvnetsWritePatchPayload } from './type';

// 이벤트 생성
export const postEventsWriteApi = async ({
  eventId,
  title,
  content,
  hashtag,
  address,
  detailAddress,
  thumbnailImage,
  imageFile,
}: EventsWritePostPayload) => {
  const formData = new FormData();
  const articleJson = new Blob(
    [
      JSON.stringify({
        title: title,
        content: content,
        hashtag: hashtag,
        eventAddress: address,
        eventDetailAddress: detailAddress,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('article', articleJson);
  thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
  imageFile && imageFile.forEach((file) => formData.append('imageFile', file));

  return await apiInstance
    .post(`/events/${eventId}`, formData, {
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
  content,
  hashtag,
  address,
  detailAddress,
  thumbnailImage,
  imageFile,
}: EvnetsWritePatchPayload) => {
  const formData = new FormData();
  const articleJson = new Blob(
    [
      JSON.stringify({
        title: title,
        content: content,
        hashtag: hashtag,
        eventAddress: address,
        eventDetailAddress: detailAddress,
      }),
    ],
    {
      type: 'application/json',
    },
  );
  formData.append('article', articleJson);
  thumbnailImage && formData.append('thumbnailImage', thumbnailImage);
  imageFile && imageFile.forEach((file) => formData.append('imageFile', file));

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
