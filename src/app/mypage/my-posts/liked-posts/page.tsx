import React from 'react';
import ArticleList from '@/components/List/ArticleList';
// const myCommentsListMockData = [
//   { id: 1, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 2, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 3, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 4, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 5, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 6, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
// ];
// const myPostsListMockData = [
//   { id: 33, category: '자유', title: '방탄 콘서트 갈사람 구함', viewcount: 98, createdAt: '2022-08-12' },
//   { id: 33, category: '자유', title: '방탄 콘서트 갈사람 구함', viewcount: 98, createdAt: '2022-08-12' },
//   { id: 33, category: '자유', title: '방탄 콘서트 갈사람 구함', viewcount: 98, createdAt: '2022-08-12' },
//   { id: 33, category: '자유', title: '방탄 콘서트 갈사람 구함', viewcount: 98, createdAt: '2022-08-12' },
//   { id: 33, category: '자유', title: '방탄 콘서트 갈사람 구함', viewcount: 98, createdAt: '2022-08-12' },
// ];

// const likedPostsListMockData = [
//   { id: 1, title: '뭐야뭐야', createdAt: '2022-08-12', nickname: '우왕쓰' },
//   { id: 2, title: '뭐야뭐야', createdAt: '2022-08-12', nickname: '우왕쓰' },
//   { id: 1, title: '뭐야뭐야', createdAt: '2022-08-12', nickname: '우왕쓰' },
//   { id: 1, title: '뭐야뭐야', createdAt: '2022-08-12', nickname: '우왕쓰' },
//   { id: 1, title: '뭐야뭐야', createdAt: '2022-08-12', nickname: '우왕쓰' },
// ];
const Page = () => {
  return (
    <div className="w-full">
      <ArticleList />
      <ArticleList />
      <ArticleList />
      <ArticleList />
      <ArticleList />
      <ArticleList />
    </div>
  );
};

export default Page;
