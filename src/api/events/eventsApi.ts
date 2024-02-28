import apiInstance from '../api';

// 이벤트 전체 조회
export const fetchEventsAllApi = async () => await apiInstance.get(`/events`).then((response) => response.data);

// 이벤트 단일 조회(상세보기)
export const fetchEventsApi = async ({ eventId }: { eventId: Number }) =>
  await apiInstance.get(`/events/${eventId}`).then((response) => response.data);

// 진행중인 이벤트 조회
export const fetchOngoingEvents = async () =>
  await apiInstance.get(`/events/ongoing`).then((response) => response.data);
