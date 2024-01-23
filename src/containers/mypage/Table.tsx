'use client';

import React from 'react';
import { Card, Typography } from './tailwindexport';

// const TABLE_HEAD = [{ id: '아이디' }, { content: '컨텐트' }, { createdAt: '날짜' }, { articleId: '아티클아이디' }];

// const TABLE_ROWS = [
//   { id: 1, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 2, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 3, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 4, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 5, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
//   { id: 6, content: '뭐야뭐야', createdAt: '2022-08-12', articleId: 22 },
// ];

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

const orderStatusListMockData = [
  { id: 1, createdAt: '2022-08-12', name: '홍길동', price: 38000, orderProduct: ['지민 키링', '정국 폰케이스'] },
  { id: 2, createdAt: '2022-08-12', name: '홍길동', price: 38000, orderProduct: ['지민 키링'] },
  { id: 3, createdAt: '2022-08-12', name: '홍길동', price: 38000, orderProduct: ['지민 키링', '정국 폰케이스'] },
  { id: 4, createdAt: '2022-08-12', name: '홍길동', price: 38000, orderProduct: ['지민 키링', '정국 폰케이스'] },
  { id: 5, createdAt: '2022-08-12', name: '홍길동', price: 38000, orderProduct: ['지민 키링', '정국 폰케이스'] },
];

interface TableProps {
  TABLE_HEAD: object[];
  TABLE_ROWS: object[];
}
const Table = ({ TABLE_HEAD, TABLE_ROWS }: TableProps) => {
  return (
    <Card color="white" className="h-full w-full overflow-scroll" shadow={true} placeholder>
      <table className="w-full  table-auto  text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th key={index} className=" border-blue-gray-100 bg-gray7 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className=" text-[13px] font-normal leading-none  opacity-70 md:text-[14px]"
                  placeholder>
                  {Object.values(head).toString()}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS?.map((rowData, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? 'p-2 md:p-4' : 'p-2 md:p-4 border-b border-blue-gray-50  ';

            return (
              <tr key={rowData.id}>
                {TABLE_HEAD.map((head, index) => (
                  <td key={index} className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-[12px] font-normal md:text-[14px]"
                      placeholder>
                      {rowData[Object.keys(head).toString()]}
                    </Typography>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
