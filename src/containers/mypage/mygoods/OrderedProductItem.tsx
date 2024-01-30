import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import MobileModal from '@/components/Modal/MobileModal';
import { ORDER_STATUS } from '@/constants/order';

export const OrderedProductItem = ({
  orderStatus,
  productName,
  productCount,
  individualProductPrice,
}: {
  orderStatus: string;
  productName: string;
  productCount: number;
  individualProductPrice: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const deleteOrderData = [{ id: 0, label: '주문내역 삭제', onClick: () => confirm('정말로 삭제하시겠습니까?') }];

  return (
    <div className="flex w-full flex-col gap-4 rounded-md border border-solid p-4">
      <div className="flex justify-between">
        <div className="prose-h6 text-green-500 md:prose-h5">{ORDER_STATUS[orderStatus]}</div>
        <BsThreeDotsVertical onClick={() => setIsOpen(!isOpen)} className="w-5 text-gray3" />
      </div>
      {isOpen && <MobileModal isOpen={isOpen} setIsOpen={setIsOpen} list={deleteOrderData} />}
      <div className="flex flex-col gap-2">
        <div className="prose-body-M">{productName}</div>
        <div className="flex flex-row gap-4">
          <div>{individualProductPrice}원</div>
          <div>{productCount}개</div>
        </div>
      </div>
    </div>
  );
};
