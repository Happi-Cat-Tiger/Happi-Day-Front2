import { writingInfoState, writeState } from '@/atom/write';
import { useRecoilState } from 'recoil';
import React from 'react';

const TitleProductInput = () => {
  const [writeValue] = useRecoilState(writeState);
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { titleProduct } = writingInfoValue;

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>대표 상품 등록</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          defaultValue={titleProduct.label}
          onChange={(e) =>
            setWritingInfoValue({
              ...writingInfoValue,
              titleProduct: { ...titleProduct, label: e.target.value },
            })
          }
          className="text-input"
          value={writeValue.articleTitle}
          disabled={true}
        />
        <input
          type="number"
          defaultValue={titleProduct.price}
          onChange={(e) =>
            setWritingInfoValue({
              ...writingInfoValue,
              titleProduct: { ...titleProduct, price: e.target.value },
            })
          }
          className="text-input"
          placeholder="판매가격(개당) ex)5000"
        />
      </div>
    </div>
  );
};

export default TitleProductInput;
