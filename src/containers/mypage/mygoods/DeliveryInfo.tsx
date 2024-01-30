import React from 'react';
import Input from '@/components/Input/Input';
import StyledButton from '@/components/Button/StyledButton';
import { ORDER_STATUS } from '@/constants/order';

interface Props {
  userType: string;
  inputValue: { trackingNum: string; orderStatus: string };
  onChangeHandler: (newValues: { trackingNum: string; orderStatus: string }) => void;
  saveHandler: () => void;
  orderStatus: string;
}
export const DeliveryInfo = ({ userType, inputValue, onChangeHandler, saveHandler, orderStatus }: Props) => {
  return (
    userType == 'orderUser' && (
      <div className="flex flex-row items-center gap-20">
        <select
          id="orderStatus"
          onChange={(event) => onChangeHandler({ ...inputValue, orderStatus: event.target.value })}
          defaultValue={orderStatus}
          className="w-40 cursor-pointer rounded-[16px] bg-[#F0F5F9] px-[16px] py-[8px] outline-none sm:prose-btn-S md:prose-btn-M">
          {Object.entries(ORDER_STATUS).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <div>
          <Input
            isReadOnly={false}
            type="text"
            placeholder="운송장 번호"
            value={inputValue.trackingNum}
            onChange={(event) => onChangeHandler({ ...inputValue, trackingNum: event.target.value })}
          />
        </div>
        <StyledButton
          label="저장"
          className="prose-btn-S w-16 rounded-xl bg-orange2 px-4 py-2 text-white md:prose-btn-S hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-4 md:py-2"
          onClick={() => {}}
        />
      </div>
    )
  );
};
