import React from 'react';

const HashtagInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>해시태그 등록</span> <span className="text-red-600">*</span>
      </div>
      <input
        type="text"
        className="prose-body-XS w-full rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none "
        placeholder="#해시태그를 입력해주세요 ex) #해시태그"
      />
    </div>
  );
};

export default HashtagInput;
