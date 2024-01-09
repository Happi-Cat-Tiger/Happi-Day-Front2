import React from 'react';
import DaumPost from '../Tool/DaumPost';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';

const AddressInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { eventAddress } = writingInfoValue;

  const handleChangeAdress = (value: any) => {
    setWritingInfoValue({
      ...writingInfoValue,
      eventAddress: value,
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>주소 등록</span> <span className="text-red-600">*</span>
      </div>
      <DaumPost handleChangeAdress={handleChangeAdress} />
    </div>
  );
};

export default AddressInput;
