import { atom } from 'recoil';

// 이벤트 댓글
interface CommentProps {
  id: number;
  user: string;
  comment: string;
  date: string;
}
const commentsMockup: CommentProps[] = [];

export const eventsCommentValue = atom({
  key: 'eventsCommentValue',
  default: commentsMockup,
});

// 이벤트 검색
export const eventsSearchState = atom({
  key: 'eventsSearchState',
  default: '',
});

// 이벤트 검색 필터
export const eventsSearchFilter = atom({
  key: 'eventsSearchFilter',
  default: 'title',
});

// 이벤트 정렬
export const eventsSortList = atom({
  key: 'eventsSortList',
  default: 'new',
});

// 이벤트 카드
interface CardProps {
  id: number;
  cardType: 'events' | 'sales';
  thumbnailUrl: string;
  title: string;
  artist: string;
  location: string;
  startTime: string;
  endTime: string;
  address: { address: string; detailAddress: string };
  likeCount: number;
  commentCount: number;
  viewCount: number;
  username: string;
  updatedAt: Date | null;
  hashtags: string;
  imageUrl: string;
  description: string;
  userProfileUrl: string;
}

export const eventsCardState = atom<CardProps>({
  key: 'eventsCardState',
  default: {
    id: 1,
    cardType: 'events',
    thumbnailUrl: '',
    title: '',
    artist: 'atom artist',
    location: '',
    startTime: '',
    endTime: '',
    address: { address: '', detailAddress: '' },
    likeCount: 10,
    commentCount: 15,
    viewCount: 20,
    username: '작성자 닉네임',
    updatedAt: new Date(),
    hashtags: '',
    imageUrl: '',
    description: '',
    userProfileUrl: '',
  },
});

// 이벤트 리스트
export const eventsListState = atom({
  key: 'eventsList',
  default: [],
});

// 이벤트 후기
export interface reviewProps {
  starRate: number;
  review: string;
  date: string;
  reviewImage: File | null;
}

export const eventsReviewValue = atom({
  key: 'eventsReviewValue',
  default: {
    starRate: 0,
    review: '',
    date: '',
    reviewImage: null,
  } as reviewProps,
});

export const allEventsReviewValue = atom<reviewProps[]>({
  key: 'allEventsReviewValue',
  default: [],
});
