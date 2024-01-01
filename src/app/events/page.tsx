'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Pagination from 'react-js-pagination';
import PaginationComponent from '@/components/Pagenation/PaginationComponent';
import '../../styles/global.css';

interface BoardType {
  id: number;
  page: number;
}

const page = () => {
  const paginationMock = [
    { id: 1, page: 1 },
    { id: 2, page: 2 },
    { id: 3, page: 3 },
    { id: 4, page: 4 },
    { id: 5, page: 5 },
    { id: 6, page: 6 },
    { id: 7, page: 7 },
    { id: 8, page: 8 },
    { id: 9, page: 9 },
    { id: 10, page: 10 },
    { id: 11, page: 11 },
    { id: 12, page: 12 },
    { id: 13, page: 13 },
    { id: 14, page: 14 },
    { id: 15, page: 15 },
  ];

  const [page, setPage] = useState(1);
  const [currentPost, setCurrentPost] = useState<BoardType[]>(paginationMock);
  const postPerPage = 10;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const [loading, setLoading] = useState(false);

  const pageChange = (page: number) => {
    return setPage(page);
  };

  useEffect(() => {
    setCurrentPost(paginationMock.slice(indexOfFirstPost, indexOfLastPost));
  }, [page]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-2 gap-10">
        {currentPost.map((el) => (
          <Card
            key={el.id}
            id={el.page}
            cardType="events"
            thumbnailUrl="null"
            title="test"
            artist="test"
            location="test"
            startTime="test"
            endTime="test"
            address="test"
            likeCount={el.page}
            commentCount={el.page}
            viewCount={el.page}
          />
        ))}
      </div>
      <div className="my-[100px] text-center">
        <Pagination
          activePage={page}
          itemsCountPerPage={postPerPage}
          totalItemsCount={paginationMock.length}
          pageRangeDisplayed={5}
          prevPageText={'<'}
          nextPageText={'>'}
          onChange={pageChange}
        />
      </div>
    </div>
  );
};

export default page;
