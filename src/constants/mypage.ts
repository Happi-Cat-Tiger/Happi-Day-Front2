import { MenuListItem } from '@/types/mypage';
import { CategoryNav } from '@/types/board';

export const MYPAGE_MENU_LIST: MenuListItem[] = [
  { id: 0, title: '프로필 관리', urlForHighlight: 'profile', path: 'profile' },
  { id: 1, title: '나의 게시글', urlForHighlight: 'my-posts', path: 'my-posts/wrote-posts' },
  { id: 2, title: '나의 굿즈', urlForHighlight: 'my-sales', path: 'my-sales/sales-goods' },
  { id: 3, title: '나의 구독', urlForHighlight: 'my-subscribes', path: 'my-subscribes' },
  { id: 4, title: '나의 이벤트', urlForHighlight: 'my-events', path: 'my-events' },
  { id: 5, title: '관리자 메뉴', urlForHighlight: 'admin', path: 'admin' },
];

export const MY_POSTS_CATEGORY: CategoryNav[] = [
  { pageTitle: '작성한 게시글', navigate: '/mypage/my-posts/wrote-posts' },
  { pageTitle: '작성한 댓글', navigate: '/mypage/my-posts/wrote-comments' },
  { pageTitle: '좋아요한 글', navigate: '/mypage/my-posts/liked-posts' },
];

export const MY_SALES_CATEGORY: CategoryNav[] = [
  { pageTitle: '판매한 굿즈', navigate: '/mypage/my-sales/sales-goods' },
  { pageTitle: '주문한 굿즈', navigate: '/mypage/my-sales/order-goods' },
];
