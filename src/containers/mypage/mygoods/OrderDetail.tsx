import React, { useEffect, useState } from 'react';
import { getOrderDetailService } from '@/hooks/queries/order/orderService';
import dayjs from 'dayjs';
import MobileModal from '@/components/Modal/MobileModal';
import { orderDetail } from '@/types/order';
import { BsThreeDotsVertical } from 'react-icons/bs';
import StyledButton from '@/components/Button/StyledButton';
import SubTitle from '@/containers/mypage/mygoods/SubTitle';
import Section from '@/containers/mypage/mygoods/Section';
import Content from '@/containers/mypage/mygoods/Content';
import Input from '@/components/Input/Input';
import { ORDER_STATUS } from '@/constants/order';

export const OrderDetail = ({
  orderDetailMockData,
  userType,
}: {
  orderDetailMockData: orderDetail;
  userType: string;
}) => {
  const {
    id,
    username,
    salesId,
    orderedProducts,
    price,
    orderStatus,
    address,
    orderAt,
    delivery,
    trackingNum,
    depositor,
    refundAccount,
    sellerAccount,
  } = orderDetailMockData;

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState({ trackingNum, orderStatus });

  const deleteOrderData = [{ label: '주문내역 삭제', onClick: () => confirm('정말로 삭제하시겠습니까?') }];

  const onChangeHandler = (newValues: { trackingNum: string; orderStatus: string }) => {
    setInputValue(newValues);
  };

  return (
    <div className="flex flex-col gap-7">
      <div className="prose-h6 flex flex-row gap-2">
        <div>{dayjs(orderAt).format('YYYY.MM.DD')}</div>
        <div>주문</div>
      </div>

      <div className="flex flex-col gap-3">
        {Object.entries(orderedProducts).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-4 rounded-md border border-solid p-4">
            <div className="flex justify-between">
              <div className="prose-h6 text-green-500 md:prose-h5">{ORDER_STATUS[orderStatus]}</div>
              <BsThreeDotsVertical onClick={() => setIsOpen(!isOpen)} className="w-5 text-gray3" />
            </div>
            {isOpen && <MobileModal isOpen={isOpen} setIsOpen={setIsOpen} list={deleteOrderData} />}
            <div className="prose-body-M">
              {key} {value}개
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <StyledButton
            label={'주문취소'}
            className="prose-btn-S w-32 rounded-xl bg-orange2 px-4 py-2 text-white md:prose-btn-S hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-4 md:py-2"
            onClick={() => {}}></StyledButton>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Section>
          <SubTitle label={'주문자 정보'} />
          <Content>
            <div className="flex flex-row">
              <div className="w-20  text-gray2">받는사람</div>
              <div>{username}</div>
            </div>
            <div className="flex flex-row">
              <div className="w-20  text-gray2">연락처</div>
              <div>01084434220</div>
            </div>
            <div className="flex flex-row">
              <div className="w-20  text-gray2">받는주소</div>
              <div>{address}</div>
            </div>
          </Content>
        </Section>
        <Section>
          <SubTitle label={'입금자 정보'} />
          <Content>
            <div className="flex flex-row">
              <div className="w-20  text-gray2">입금자명</div>
              <div>{depositor}</div>
            </div>
          </Content>
        </Section>
        <Section>
          <SubTitle label={'판매자 정보'} />
          <Content>
            <div>{sellerAccount}</div>
          </Content>
        </Section>
        <Section>
          <SubTitle label={'환불 정보'} />

          <Content>
            <div>{refundAccount}</div>
          </Content>
        </Section>
        <Section>
          <SubTitle label={'결제 정보'} />
          <div className=" flex flex-col justify-between  gap-5 md:flex-row">
            <div className="flex flex-col gap-3 pt-2">
              <div className=" prose-body-M text-gray2 ">결제수단</div>
              <div className="\ prose-body-L ">무통장 입금</div>
              <div className=" prose-body-M text-gray2 ">배송 방법</div>
              <div className="\ prose-body-L">{delivery}</div>
            </div>
            <div className="prose-body-M flex w-full flex-col gap-2 bg-gray7 p-4 px-3  md:w-80 md:pt-2">
              <div className="flex flex-row justify-between">
                <div>총 상품가격</div>
                <div>{price}원</div>
              </div>
              <div className="flex flex-row justify-between">
                <div>배송비</div>
                <div>1800원</div>
              </div>
              <div className="prose-body-L flex flex-row justify-between font-bold">
                <div>총 결제금액</div>
                <div>40800원</div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <SubTitle label={'배송 정보'} />
          <Content>
            {userType == 'orderUser' && (
              <div className="flex flex-row items-center gap-20">
                <select
                  id="orderStatus"
                  onChange={(event) => onChangeHandler({ ...inputValue, orderStatus: event.target.value })}
                  defaultValue={orderStatus}
                  className="w-40 cursor-pointer rounded-[16px] bg-[#F0F5F9] px-[16px] py-[8px] outline-none sm:prose-btn-S md:prose-btn-M">
                  {Object.entries(ORDER_STATUS).map(([key, value]) => (
                    <option value={key}>{value}</option>
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
            )}
          </Content>
          <Content>{userType == 'salesUser' && <div>{refundAccount}</div>}</Content>
        </Section>
      </div>
    </div>
  );
};
