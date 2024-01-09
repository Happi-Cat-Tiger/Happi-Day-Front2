import { writingInfoState } from '@/atom/write';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

const ShippingOptionsInput = () => {
  const [shippingValue, setShippingValue] = useState<any>({ index: '', label: '', price: '' });
  const [shippingList, setShippingList] = useState<any>([]);

  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { shippingOptions } = writingInfoValue;

  const handleChangeShipping = () => {
    setWritingInfoValue({
      ...writingInfoValue,
      shippingOptions: shippingList,
    });
  };
  useEffect(() => {
    handleChangeShipping();
  }, [shippingList]);

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>배송 옵션 등록</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          defaultValue={shippingValue.label}
          onChange={(e) => setShippingValue({ ...shippingValue, label: e.target.value })}
          className="prose-body-XS w-full rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none "
          placeholder="배송 옵션을 등록해주세요. ex) 우체국 택배"
        />
        <input
          type="text"
          defaultValue={shippingValue.price}
          onChange={(e) => setShippingValue({ ...shippingValue, price: e.target.value })}
          className="prose-body-XS w-[120px] rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none md:w-[200px] "
          placeholder="배송비"
        />
        <button
          type="button"
          onClick={() => {
            setShippingValue({ ...shippingValue, index: uuidv4() });
            setShippingList([...shippingList, shippingValue]);
            handleChangeShipping();
          }}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white md:h-10 md:w-10 md:text-xl">
            +
          </div>
        </button>
      </div>
      <ul className="prose-body-XS flex flex-col gap-2 md:prose-body-S">
        {shippingList.map((shippingItem: any, i: number) => (
          <li key={shippingItem.index} className="flex rounded-lg bg-[#F2F2F2] p-2">
            <p className="grow">{shippingItem.label}</p>
            <p className="w-[120px] md:w-[200px]">{shippingItem.price}</p>
            <button
              type="button"
              onClick={() => {
                setShippingList([...shippingList.filter((shipping: any) => shipping.index !== shippingItem.index)]);
              }}>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-700 font-bold text-white">
                -
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShippingOptionsInput;
