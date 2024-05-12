export interface EventsList {
  id: number;
  thumbnailUrl: string;
  title: string;
  artists: string;
  startTime: Date;
  endTime: Date;
  location: string;
  updatedAt: string;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  reviewCount: number;
  teams?: [];
  hashtags: [];
  nickname: string;
}
