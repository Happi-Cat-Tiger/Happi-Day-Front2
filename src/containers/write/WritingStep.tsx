import CategoryDropdown from '@/components/Dropdowns/CategoryDropdown';
import CustomEditor from '@/components/Tool/CustomEditor';
import React, { ChangeEvent } from 'react';
import { atom, useRecoilState, RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const WritingStep = () => {
  const dropdownOpt = ['이벤트/홍보', '거래/교환/양도', '친목/동행', '자유', '주최 관련'];
  const initialData = '<h1>Hello, world!</h1>';

  const writeState = atom({
    key: `writeState`,
    default: { category: '카테고리|▼', articleTitle: '', editValue: initialData },
  });

  const [writeValue, setWriteValue] = useRecoilState(writeState);

  const { articleTitle, editValue, category } = writeValue;

  // articleTitle 수정
  const handleChangeArticle = (e: ChangeEvent<HTMLInputElement>) => {
    setWriteValue({
      ...writeValue,
      articleTitle: e.target.value,
    });
  };

  const handleChangeEdit = (value: string) => {
    setWriteValue({
      ...writeValue,
      editValue: value,
    });
  };

  const handleChangeCategory = (value: string) => {
    setWriteValue({
      ...writeValue,
      category: value,
    });
  };

  return (
    <div className="flex h-[560px] w-full flex-col gap-4 md:border md:border-gray-200 md:p-4">
      <div className=" relative flex gap-3">
        <CategoryDropdown dropdownOpt={dropdownOpt} dropValue={category} handleChangeCategory={handleChangeCategory} />
        <input
          defaultValue={articleTitle}
          onChange={(e) => handleChangeArticle(e)}
          type="text"
          className="w-full rounded-md border border-gray3 px-1.5 py-1 focus:border-orange1 focus:outline-none"
          placeholder="제목"
          spellCheck="false"
        />
      </div>
      <CustomEditor editValue={editValue} setEditValue={handleChangeEdit} />
    </div>
  );
};

export default WritingStep;
