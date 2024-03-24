export interface EventsWritePayload {
  title: string;
  content: string;
  hashtag: string[];
  address: string;
  detailAddress: string;
  thumbnailImage: File | null;
  imageFile: File[] | null;
}

export interface EventsWritePostPayload extends EventsWritePayload {
  eventId: number;
}

export interface EvnetsWritePatchPayload extends EventsWritePayload {
  eventId: number | null;
}
