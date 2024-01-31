import React from 'react';
import StyledButton from '@/components/Button/StyledButton';

interface Props {
  onClick: () => void;
}

export const OrderCancelButton = ({ onClick }: Props) => (
  <div className="flex justify-end">
    <StyledButton
      label={'주문취소'}
      className="prose-btn-S w-32 rounded-xl bg-orange2 px-4 py-2 text-white md:prose-btn-S hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-4 md:py-2"
      onClick={onClick}></StyledButton>
  </div>
);
