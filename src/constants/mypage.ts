import { MenuListItem, OrderedTable, SalesPostTable, SalesProductsTable } from '@/types/mypage';
import { CategoryNav } from '@/types/board';

export const MYPAGE_MENU_LIST: MenuListItem[] = [
  { id: 0, title: '프로필 관리', urlForHighlight: 'profile', path: 'profile' },
  { id: 1, title: '나의 게시글', urlForHighlight: 'my-posts', path: 'my-posts/wrote-posts' },
  { id: 2, title: '나의 쇼핑', urlForHighlight: 'my-orders', path: 'my-orders/' },
  { id: 3, title: '나의 굿즈 판매', urlForHighlight: 'my-sales', path: 'my-sales/' },
  { id: 4, title: '나의 구독', urlForHighlight: 'my-subscribes', path: 'my-subscribes' },
  { id: 5, title: '나의 이벤트', urlForHighlight: 'my-events', path: 'my-events' },
  { id: 6, title: '관리자 메뉴', urlForHighlight: 'admin', path: 'admin' },
];

export const MY_POSTS_CATEGORY: CategoryNav[] = [
  { pageTitle: '작성한 게시글', navigate: '/mypage/my-posts/wrote-posts' },
  { pageTitle: '작성한 댓글', navigate: '/mypage/my-posts/wrote-comments' },
  { pageTitle: '좋아요한 글', navigate: '/mypage/my-posts/liked-posts' },
];

export const MY_GOODS_CATEGORY: CategoryNav[] = [
  { pageTitle: '판매한 굿즈', navigate: '/mypage/my-sales/sales-goods' },
  { pageTitle: '주문한 굿즈', navigate: '/mypage/my-sales/order-goods' },
];

export const MY_SALES_POST_TABLE_HEAD: SalesPostTable = [
  { salesCategory: '카테고리' },
  { title: '글제목' },
  { createdAt: '날짜' },
  { orderCount: '주문수' },
  { orderDetailLink: '판매 내역 보기' },
];

export const MY_SALES_PRODUCTS_TABLE_HEAD: SalesProductsTable = [
  { orderAt: '주문 날짜' },
  { orderedProducts: '판매한 상품' },
  { username: '주문자' },
  { price: '금액' },
  { orderStatus: '주문 상태' },
  { orderDetailLink: '주문 상세보기' },
];

export const MY_ORDERS_TABLE_HEAD: OrderedTable = [
  { title: '글제목' },
  { orderedProducts: '구매한 상품' },
  { price: '금액' },
  { createdAt: '날짜' },
  { status: '배송상태' },
  { orderDetailLink: '주문 상세보기' },
];
