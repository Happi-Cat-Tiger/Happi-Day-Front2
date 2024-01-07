import React from 'react';

const BankAccountInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className=" prose-h5">
        <span>계좌 등록</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="prose-body-S w-[300px] rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
          placeholder="은행 이름"
        />
        <input
          type="text"
          className="prose-body-S w-[100px] rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
          placeholder="예금주명"
        />
      </div>
      <input
        type="text"
        className="prose-body-S w-full rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
        placeholder={`계좌번호 ("-" 제외하고 숫자만 입력)`}
      />
    </div>
  );
};

export default BankAccountInput;
