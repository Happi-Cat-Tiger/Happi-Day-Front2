import { useState } from 'react';

const useSetPage = () => {
  const [page, setPage] = useState(1);

  const postPerPage = 10;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const pageChange = (page: number) => {
    setPage(page);
  };

  return { page, postPerPage, indexOfFirstPost, indexOfLastPost, pageChange };
};

export default useSetPage;
