// 임시로 만든 글쓰기 페이지

import CustomEditor from '@/components/Tool/CustomEditor';

export default function Home() {
  return (
    <>
      <CustomEditor initialData="<h1>Hello, world!</h1>" />
    </>
  );
}
