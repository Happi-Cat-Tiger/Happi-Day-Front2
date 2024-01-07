import React from 'react';

const LocationInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className=" prose-h5">
        <span>장소 등록</span> <span className="text-red-600">*</span>
      </div>
      <input
        type="text"
        className="prose-body-S w-full rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
        placeholder="이벤트가 진행되는 장소의 이름을 입력해주세요."
      />
    </div>
  );
};

export default LocationInput;
