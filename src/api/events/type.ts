export interface EventsWritePayload {
  title: string;
  startTime: Date | null;
  endTime: Date | null;
  description: string;
  address: string;
  location: string;
  hashtags: string[];
  thumbnailFile: File | null;
  imageFile: File | null;
}

export interface EventsWritePatchPayload extends EventsWritePayload {
  eventId: number | null;
}
