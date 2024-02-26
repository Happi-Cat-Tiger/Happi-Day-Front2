'use client';

import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import MobileModal from '@/components/Modal/MobileModal';
import { ORDER_STATUS } from '@/constants/order';
import TwoButtonModal from '@/components/Modal/TwoButtonModal';
import { deleteOrderService } from '@/hooks/mutations/order/orderService';

interface Props {
  orderId: number;
  salesId: number;
  orderStatus: string;
  productName: string;
  productCount: number;
  individualProductPrice: number;
}

export const OrderedProductItem = ({
  orderId,
  salesId,
  orderStatus,
  productName,
  productCount,
  individualProductPrice,
}: Props) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const deleteOrderData = [
    {
      id: 0,
      label: '주문내역 삭제',
      onClick: () => {
        setIsDeleteModalOpen(true);
      },
    },
  ];

  const mutationDelete = deleteOrderService({ salesId, orderId });

  const handleDelete = () => {
    mutationDelete.mutate();
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-md border border-solid p-4">
      <div className="flex justify-between">
        <div className="prose-h6 text-green-500 md:prose-h5">{ORDER_STATUS[orderStatus]}</div>
        <BsThreeDotsVertical
          onClick={() => setIsMobileModalOpen(!isMobileModalOpen)}
          className="w-5 cursor-pointer text-gray3 "
        />
      </div>
      {isMobileModalOpen && (
        <MobileModal isOpen={isMobileModalOpen} setIsOpen={setIsMobileModalOpen} list={deleteOrderData} />
      )}
      {isDeleteModalOpen && (
        <TwoButtonModal
          isOpen={isDeleteModalOpen}
          setOpen={setIsDeleteModalOpen}
          buttonLabel="삭제"
          buttonDisabled={false}
          onClose={handleDelete}>
          <p>함께 결제된 주문상품은 전체 삭제되며, 복구할 수 없습니다.</p>
          <p> 주문내역을 삭제하시겠습니까?</p>
        </TwoButtonModal>
      )}
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
