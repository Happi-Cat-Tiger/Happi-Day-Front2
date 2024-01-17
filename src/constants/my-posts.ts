import { CategoryNav } from '@/types/board';

export const MY_POSTS_CATEGORY: CategoryNav[] = [
  { pageTitle: '작성한 게시글', navigate: '/mypage/my-posts/wrote-posts' },
  { pageTitle: '작성한 댓글', navigate: '/mypage/my-posts/wrote-comments' },
  { pageTitle: '좋아요한 글', navigate: '/mypage/my-posts/liked-posts' },
];
