'use client';
import React from 'react';
import Pagination from 'react-js-pagination';

interface PaginationProps {
  page: number;
  totalItemsCount: number;
  pageChange: () => number;
}

const PaginationComponent = ({ page, totalItemsCount, pageChange }: PaginationProps) => {
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={pageChange}
      />
    </div>
  );
};

export default PaginationComponent;
