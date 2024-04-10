import { writeState } from '@/atom/write';
import CategoryDropdown from '@/components/Dropdowns/CategoryDropdown';
import CustomEditor from '@/components/Tool/CustomEditor';
import { usePathname } from 'next/navigation';
import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

const WritingStep = () => {
  const pathname = usePathname();
  const firstPath = pathname.split('/')[1];

  const dropdownOpt = [
    { id: 2, label: '이벤트/홍보' },
    { id: 3, label: '거래/교환/양도' },
    { id: 4, label: '친목/동행' },
    { id: 1, label: '자유' },
    { id: 5, label: '주최관련' },
  ];
  const salesDropdownOpt = [
    { id: 1, label: '굿즈' },
    { id: 2, label: '공구' },
  ];

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

  const handleChangeCategory = (value: { id: number; label: string }) => {
    setWriteValue({
      ...writeValue,
      category: value,
    });
  };

  return (
    <div className="flex h-[560px] w-full flex-col gap-4 md:border md:border-gray-200 md:p-4">
      <div className="relative flex gap-3">
        {firstPath === 'board' && (
          <CategoryDropdown
            dropdownOpt={dropdownOpt}
            dropValue={category}
            handleChangeCategory={handleChangeCategory}
          />
        )}
        {firstPath === 'sales' && (
          <CategoryDropdown
            dropdownOpt={salesDropdownOpt}
            dropValue={category}
            handleChangeCategory={handleChangeCategory}
          />
        )}

        <input
          defaultValue={articleTitle}
          onChange={(e) => handleChangeArticle(e)}
          type="text"
          className="w-full rounded-md border border-gray3 px-1.5 py-1 hover:bg-[#A0C3FF]/[0.1] focus:border-orange1 focus:bg-[#A0C3FF]/[0.1] focus:outline-none"
          placeholder="제목"
          spellCheck="false"
        />
      </div>
      <CustomEditor editValue={editValue} setEditValue={handleChangeEdit} />
    </div>
  );
};

export default WritingStep;
