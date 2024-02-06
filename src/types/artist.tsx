import { pagenation } from '@/types/pagenation';

export interface ArtistListType extends pagenation {
  content: ArtistListItem[];
}

export interface TeamListType extends pagenation {
  content: TeamListItem[];
}

export interface SubscribedList {
  subscribedArtists: ArtistListItem[];
  subscribedTeams: TeamListItem[];
}

export interface TeamListItem {
  id: number;
  name: string;
  logoUrl: string;
}

export interface ArtistListItem {
  id: number;
  name: string;
  profileUrl: string;
}

export interface ArtistInfo extends ArtistListItem {
  description: string;
  subscribed: boolean;
  teams: TeamListItem[];
  sales: SaleItem[];
  events: EventItem[];
}

export interface TeamInfo extends TeamListItem {
  description: string;
  subscribed: boolean;
  artists: ArtistListItem[];
  sales: SaleItem[];
  events: EventItem[];
}

export interface SaleItem {
  id: number;
  thumbnailUrl: string;
  categoryName: string;
  userNickName: string;
  name: string;
  salesStauts: string;
}

export interface EventItem {
  id: number;
  nickname: string;
  title: string;
  updatedAt: string;
  startTime: string;
  endTime: string;
  location: string;
  thumbnailUrl: string;
  artists: string[];
  teams: string[];
  hashtags: string[];
  commentCount: number;
  likeCount: number;
  viewCount: number;
  reviewCount: number;
}
