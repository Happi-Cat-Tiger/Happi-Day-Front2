import { writingInfoState } from '@/atom/write';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
const ProductOptionsInput = () => {
  const [prdValue, setPrdValue] = useState<any>({ index: '', label: '', stock: '', price: '' });
  const [prdList, setPrdList] = useState<any>([]);

  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { productOptions } = writingInfoValue;

  const handleChangePrd = () => {
    setWritingInfoValue({
      ...writingInfoValue,
      productOptions: prdList,
    });
  };
  useEffect(() => {
    handleChangePrd();
  }, [prdList]);

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>상품 옵션 등록</span> <span className="text-red-600">*</span>
      </div>
      <input
        type="text"
        defaultValue={prdValue.label}
        onChange={(e) => setPrdValue({ ...prdValue, label: e.target.value })}
        className="prose-body-XS w-full rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none "
        placeholder="상품 이름을 등록해 주세요."
      />
      <div className="flex items-center gap-2">
        <input
          type="text"
          defaultValue={prdValue.stock}
          onChange={(e) => setPrdValue({ ...prdValue, stock: e.target.value })}
          className="prose-body-XS w-full shrink rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none md:flex-1 "
          placeholder="재고"
        />
        <input
          type="text"
          defaultValue={prdValue.price}
          onChange={(e) => setPrdValue({ ...prdValue, price: e.target.value })}
          className="prose-body-XS w-full rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none md:flex-1 "
          placeholder="판매가격 (개당)"
        />
        <button
          type="button"
          onClick={() => {
            setPrdValue({ ...prdValue, index: uuidv4() });
            setPrdList([...prdList, prdValue]);
            handleChangePrd();
          }}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white md:h-10 md:w-10 md:text-xl">
            +
          </div>
        </button>
      </div>
      <ul className="prose-body-XS flex flex-col gap-2 md:prose-body-S">
        {prdList.map((prdItem: any, i: number) => (
          <li key={prdItem.index} className="flex rounded-lg bg-[#F2F2F2] p-2">
            <p className="grow">
              [옵션 {i + 1}] {prdItem.label}
            </p>
            <p className="w-[100px] md:w-[200px]">{prdItem.stock}(개)</p>
            <p className="w-[100px] md:w-[200px]">{prdItem.price}(원)</p>
            <button
              type="button"
              onClick={() => {
                setPrdList([...prdList.filter((prd: any) => prd.index !== prdItem.index)]);
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

export default ProductOptionsInput;
