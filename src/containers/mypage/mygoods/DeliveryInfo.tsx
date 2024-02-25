import React from 'react';
import Input from '@/components/Input/Input';
import StyledButton from '@/components/Button/StyledButton';
import { putOrderStatusService } from '@/hooks/mutations/order/orderService';
import { ORDER_STATUS } from '@/constants/order';

interface Props {
  salesId: number;
  orderId: number;
  detailType: string;
  inputValue: { trackingNum: string; orderStatus: string };
  onChangeHandler: (newValues: { trackingNum: string; orderStatus: string }) => void;
  orderStatus: string;
}

export const DeliveryInfo = ({ salesId, orderId, detailType, inputValue, onChangeHandler, orderStatus }: Props) => {
  const orderStatusClassName =
    'w-30 md:w-36 cursor-pointer rounded-[16px] bg-[#F0F5F9] px-[16px] py-[8px] outline-none prose-btn-M';

  const mutationPut = putOrderStatusService({ salesId, orderId, orderStatus: inputValue });

  const saveHandler = () => {
    mutationPut.mutate();
  };
  return (
    <div className="flex w-full flex-row items-center gap-16">
      {detailType == 'sales' && (
        <div className="flex w-full flex-col gap-3 md:flex md:flex-row md:justify-between">
          <div className="flex w-80 items-center gap-2 sm:justify-between md:flex-row md:gap-8">
            <select
              id="orderStatus"
              onChange={(event) => onChangeHandler({ ...inputValue, orderStatus: event.target.value })}
              defaultValue={orderStatus}
              className={orderStatusClassName}>
              {Object.entries(ORDER_STATUS).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>

            <Input
              isReadOnly={false}
              type="text"
              placeholder="운송장 번호"
              value={inputValue.trackingNum}
              onChange={(event) => onChangeHandler({ ...inputValue, trackingNum: event.target.value })}
            />
          </div>
          <div className="flex justify-end">
            <StyledButton
              label="저장"
              className="prose-btn-S h-10 w-20 rounded-xl bg-orange2 px-4 py-2 text-white md:prose-btn-M hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-4 md:py-2"
              onClick={saveHandler}
            />
          </div>
        </div>
      )}
      {detailType == 'order' && (
        <>
          <div className={orderStatusClassName}>{ORDER_STATUS[inputValue.orderStatus]}</div>
          <div>{inputValue.trackingNum}</div>
        </>
      )}
    </div>
  );
};
