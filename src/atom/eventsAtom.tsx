import { atom } from 'recoil';

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

export const eventsSearchState = atom({
  key: 'eventsSearchState',
  default: '',
});

export const eventsSortState = atom({
  key: 'eventesSortState',
  default: 'new',
});

// 이벤트 후기
export interface reviewProps {
  starRate: number;
  review: string;
  // image: string;
}

export const eventsReviewValue = atom({
  key: 'eventsReviewValue',
  default: {
    starRate: 0,
    review: '',
    // image: '',
  } as reviewProps,
});

export const allEventsReviewValue = atom<reviewProps[]>({
  key: 'allEventsReviewValue',
  default: [],
});
