import React, { useState } from 'react';

const ShippingOptionsInput = () => {
  const [shipping, setShipping] = useState<any>();
  return (
    <div className="flex flex-col gap-2">
      <div className=" prose-h5">
        <span>배송 옵션 등록</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="prose-body-S w-full rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
          placeholder="배송 옵션을 등록해주세요. ex) 우체국 택배"
        />
        <input
          type="text"
          className="prose-body-S w-[200px] rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
          placeholder="배송비"
        />
        <button type="button" onClick={() => {}}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-xl font-bold text-white">
            +
          </div>
        </button>
      </div>
      <ul className="prose-body-S">
        <li className="flex rounded-lg bg-[#F2F2F2] p-2">
          <p className="grow">{`우체국 택배`}</p>
          <p className="w-[200px]">{`3000`}</p>
          <button type="button" onClick={() => {}}>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-700 font-bold text-white">
              -
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ShippingOptionsInput;
