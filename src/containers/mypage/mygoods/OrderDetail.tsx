import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import SubTitle from '@/containers/mypage/mygoods/SubTitle';
import Section from '@/containers/mypage/mygoods/Section';
import Content from '@/containers/mypage/mygoods/Content';
import { orderDetail } from '@/types/order';
import { OrderedProductItem } from './OrderedProductItem';
import { OrderCancelButton } from './OrderCancelButton';
import { DeliveryInfo } from './DeliveryInfo';
import { updateOrderCancelService } from '@/hooks/mutations/order/orderService';

interface Props {
  orderDetailMockData: orderDetail;
  userType: string;
}
export const OrderDetail = ({ orderDetailMockData, userType }: Props) => {
  const {
    id,
    username,
    salesId,
    orderedProducts,
    totalPrice,
    productPrice,
    orderStatus,
    address,
    orderAt,
    delivery,
    trackingNum,
    depositor,
    refundAccount,
    sellerAccount,
  } = orderDetailMockData;

  const [inputValue, setInputValue] = useState({ trackingNum, orderStatus });

  const onChangeHandler = (newValues: { trackingNum: string; orderStatus: string }) => {
    setInputValue(newValues);
  };

  const mutationPut = updateOrderCancelService({ salesId, orderId: id });
  const cancleHandler = () => {
    mutationPut.mutate();
  };
  return (
    <div className="flex  w-full flex-col gap-7">
      <div className="prose-h6  flex w-full flex-row gap-2">
        <div>{dayjs(orderAt).format('YYYY.MM.DD')}</div>
        <div>주문</div>
      </div>

      <div className="flex w-full flex-col gap-3">
        {orderedProducts.map((item) => (
          <OrderedProductItem
            orderId={id}
            salesId={salesId}
            key={item.productName}
            orderStatus={orderStatus}
            productName={item.productName}
            productCount={item.count}
            individualProductPrice={item.individualProductPrice}
          />
        ))}
        <OrderCancelButton onClick={cancleHandler} />
      </div>
      <div className="flex  w-full flex-col gap-10">
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
              <div className="\ prose-body-L">{delivery.deliveryWay}</div>
            </div>
            <div className="prose-body-M flex w-full flex-col gap-2 bg-gray7 p-4 px-3  md:w-80 md:pt-2">
              <div className="flex flex-row justify-between">
                <div>총 상품가격</div>
                <div>{productPrice}원</div>
              </div>
              <div className="flex flex-row justify-between">
                <div>배송비</div>
                <div>{delivery.price}원</div>
              </div>
              <div className="prose-body-L flex flex-row justify-between font-bold">
                <div>총 결제금액</div>
                <div>{totalPrice}원</div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <SubTitle label={'배송 정보'} />
          <Content>
            <DeliveryInfo
              salesId={salesId}
              orderId={id}
              userType={userType}
              inputValue={inputValue}
              onChangeHandler={onChangeHandler}
              orderStatus={orderStatus}
            />
          </Content>
        </Section>
      </div>
    </div>
  );
};
