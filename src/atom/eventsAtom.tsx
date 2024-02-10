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

// 이벤트 정렬
export const eventsSortState = atom({
  key: 'eventesSortState',
  default: 'new',
});

// 이벤트 글쓰기
export const eventsWriteState = atom({
  key: 'eventsState',
  default: { eventsTitle: '', eventsEditValue: '' },
});
