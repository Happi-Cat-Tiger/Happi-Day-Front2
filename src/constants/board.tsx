import { CategoryNav } from '@/types/board';

export const BOARD_CATEGORY: CategoryNav[] = [
  { pageTitle: '전체글', navigate: '/board/all' },
  { pageTitle: '이벤트/홍보', navigate: '/board/events' },
  { pageTitle: '거래/교환/양도', navigate: '/board/trade' },
  { pageTitle: '친목/동행', navigate: '/board/friendship' },
  { pageTitle: '자유', navigate: '/board/free' },
  { pageTitle: '주최관련', navigate: '/board/organizing' },
];
