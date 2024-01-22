'use client';
import { useEffect } from 'react';
import AllPage from './all/page';

const BoardPage = () => {
  useEffect(() => {
    throw new Error('테스트용 에러 발생!');
    // 이하 코드는 실행되지 않음
  }, []);

  return <AllPage />;
};

export default BoardPage;
