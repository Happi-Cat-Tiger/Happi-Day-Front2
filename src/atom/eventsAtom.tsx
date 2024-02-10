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
