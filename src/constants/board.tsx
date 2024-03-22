import { CategoryNav } from '@/types/board';

export const BOARD_CATEGORY: CategoryNav[] = [
  { pageTitle: '전체글', navigate: '/board/all' },
  { pageTitle: '이벤트/홍보', navigate: '/board/events' },
  { pageTitle: '거래/교환/양도', navigate: '/board/trade' },
  { pageTitle: '친목/동행', navigate: '/board/friendship' },
  { pageTitle: '자유', navigate: '/board/free' },
  { pageTitle: '주최관련', navigate: '/board/organizing' },
];

export const BOARD = {
  CATEGORY: [
    { id: 1, label: '자유', path: 'free' },
    { id: 2, label: '이벤트/홍보', path: 'events' },
    { id: 3, label: '거래/교환/양도', path: 'trade' },
    { id: 4, label: '친목/동행', path: 'friendship' },
    { id: 5, label: '주최관련', path: 'organizing' },
  ],
};

export const BOARD_PATH = (boardCategory: string): 'events' | 'free' | 'trade' | 'friendship' | 'organizing' => {
  switch (boardCategory) {
    case '자유':
      return 'free';
    case '홍보':
      return 'events';
    case '거래':
      return 'trade';
    case '친목':
      return 'friendship';
    case '주최관련':
      return 'organizing';
    default:
      return 'free';
  }
};
