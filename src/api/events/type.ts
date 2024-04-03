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

// export interface EventsWritePatchPayload extends EventsWritePayload {
//   id: number;
// }

// export interface EvnetsWritePatchPayload extends EventsWritePayload {
//   id: number | null;
// }
