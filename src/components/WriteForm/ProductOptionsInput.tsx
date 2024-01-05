import React from 'react';

const ProductOptionsInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>상품 옵션 등록</span> <span className="text-red-600">*</span>
      </div>
      <input
        type="text"
        className="prose-body-XS w-full rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none "
        placeholder="상품 이름을 등록해 주세요."
      />
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="prose-body-XS w-full shrink rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none md:flex-1 "
          placeholder="재고"
        />
        <input
          type="text"
          className="prose-body-XS w-full rounded-md border border-gray3 px-3 py-3 md:prose-body-S focus:border-orange1 focus:outline-none md:flex-1 "
          placeholder="판매가격 (개당)"
        />
        <button type="button" onClick={() => {}}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white md:h-10 md:w-10 md:text-xl">
            +
          </div>
        </button>
      </div>
      <ul className="prose-body-XS md:prose-body-S">
        <li className="flex rounded-lg bg-[#F2F2F2] p-2">
          <p className="grow">
            [옵션 {`1`}] {`귀여운 인형`}
          </p>
          <p className="w-[100px] md:w-[200px]">{`100`}(개)</p>
          <p className="w-[100px] md:w-[200px]">{`5000`}(원)</p>
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

export default ProductOptionsInput;
