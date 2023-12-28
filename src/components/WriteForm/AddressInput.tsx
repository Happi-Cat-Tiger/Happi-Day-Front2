import React from 'react';
import DaumPost from '../Tool/DaumPost';

const AddressInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className=" prose-h5">
        <span>주소 등록</span> <span className="text-red-600">*</span>
      </div>
      <DaumPost />
    </div>
  );
};

export default AddressInput;
