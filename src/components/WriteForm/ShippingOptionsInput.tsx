import { writingInfoState } from '@/atom/write';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

interface ShippingOptions {
  index: string;
  label: string;
  price: string;
}

const ShippingOptionsInput = () => {
  const [shippingValue, setShippingValue] = useState<ShippingOptions>({ index: '', label: '', price: '' });
  const [shippingList, setShippingList] = useState<ShippingOptions[]>([]);

  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const handleChangeShipping = () => {
    setWritingInfoValue({
      ...writingInfoValue,
      shippingOptions: shippingList,
    });
  };
  useEffect(() => {
    handleChangeShipping();
  }, [shippingList]);

  const handleAddShipping = () => {
    const newShipping = { ...shippingValue, index: uuidv4() };
    setShippingValue({ index: '', label: '', price: '' });
    setShippingList([...shippingList, newShipping]);
    handleChangeShipping();
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>배송 옵션 등록</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={shippingValue.label}
          onChange={(e) => setShippingValue({ ...shippingValue, label: e.target.value })}
          className="text-input"
          placeholder="배송 옵션을 등록해주세요. ex) 우체국 택배"
        />
        <input
          type="number"
          value={shippingValue.price}
          onChange={(e) => setShippingValue({ ...shippingValue, price: e.target.value })}
          className="text-input w-[120px] md:w-[200px]"
          placeholder="배송비"
        />
        <button
          type="button"
          onClick={() => {
            handleAddShipping();
          }}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white md:h-10 md:w-10 md:text-xl">
            +
          </div>
        </button>
      </div>
      <ul className="prose-body-XS flex flex-col gap-2 md:prose-body-S">
        {shippingList.map((shippingItem) => (
          <li key={shippingItem.index} className="flex rounded-lg bg-[#F2F2F2] p-2">
            <p className="grow">{shippingItem.label}</p>
            <p className="w-[120px] md:w-[200px]">{shippingItem.price}</p>
            <button
              type="button"
              onClick={() => {
                setShippingList([...shippingList.filter((shipping) => shipping.index !== shippingItem.index)]);
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
