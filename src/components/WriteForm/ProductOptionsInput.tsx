import React from 'react';

const ProductOptionsInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h5">
        <span>상품 옵션 등록</span> <span className="text-red-600">*</span>
      </div>
      <input
        type="text"
        className="prose-body-S w-full rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
        placeholder="상품 이름을 등록해 주세요."
      />
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="prose-body-S grow rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
          placeholder="재고"
        />
        <input
          type="text"
          className="prose-body-S grow rounded-md border border-gray3 px-3 py-3 focus:border-orange1 focus:outline-none "
          placeholder="판매가격 (개당)"
        />
        <button type="button" onClick={() => {}}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-xl font-bold text-white">
            +
          </div>
        </button>
      </div>
      <ul className="prose-body-S">
        <li className="flex rounded-lg bg-[#F2F2F2] p-2">
          <p className="grow">
            [옵션 {`1`}] {`귀여운 인형`}
          </p>
          <p className="w-[200px]">{`100`}(개)</p>
          <p className="w-[200px]">{`5000`}(원)</p>
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
