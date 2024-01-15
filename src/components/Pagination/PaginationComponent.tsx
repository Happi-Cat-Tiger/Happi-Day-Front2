'use client';
import React from 'react';
import Pagination from 'react-js-pagination';

/*  
Pagination에 사용되는 props
  - page: 현재 페이지 번호
  - totalItemsCount : 페이지에 있는 아이템의 총 개수
  - pageChange() : 페이지를 클릭할 경우 page값이 해당 페이지값으로 변경

  페이지네이션을 사용할 곳에서
  const [page, setPage] = useState(1)로 page값을 지정하고
  const pageChange = (page: number) => {
    setPage(page);
  };
  와 같이 pageChange 함수를 만들어주면 됩니다.
*/

/* 
  - activePage : 현재 페이지
  - itemsCountPerPage : 한 페이지당 보여줄 아이템의 개수
  - totalItemsCount : 아이템 총 개수
  - pageRangeDisplayed : 페이지네이션 내에서 보여줄 페이지 번호의 범위(5로 지정한 경우 1~5처럼 5개의 번호 생성)
  - prevPageText : '이전'을 나타낼 텍스트
  - nextPageText : '다음'을 나타낼 텍스트
  - onChange : 페이지가 바뀔 때 핸들링 해주는 함수
*/

interface PaginationProps {
  page: number;
  totalItemsCount: number;
  countPerPage: number;
  pageChange: (page: number) => void;
}

const PaginationComponent = ({ page, totalItemsCount, countPerPage, pageChange }: PaginationProps) => {
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={countPerPage}
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
