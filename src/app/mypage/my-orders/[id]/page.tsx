'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { getOrderDetailService } from '@/hooks/queries/order/orderService';
import dayjs from 'dayjs';
import MobileModal from '@/components/Modal/MobileModal';
import { orderDetail } from '@/types/order';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Modal from '@/components/Modal/Modal';
import PrimaryButton from '@/components/Button/PrimaryButton';
import StyledButton from '@/components/Button/StyledButton';

const orderStatusParser = (orderStatus: string) => {
  switch (orderStatus) {
    case 'CONFIRM':
      return '입금 확인';
      break;
    case 'ORDER_COMPLETED':
      return '주문완료';
      break;
    case 'READY_TO_SHIP':
      return '발송준비 중';
      break;
    case 'DELIVERING':
      return '배송 중';
      break;
    case 'DELIVERY_COMPLETED':
      return '배송 완료';
      break;
    case 'ORDER_CONCEL':
      return '주문 취소';
      break;
    default:
      return '확인되지 않음';
  }
};

const data = [{ label: '주문내역 삭제', onClick: () => confirm('정말로 삭제하시겠습니까?') }];

const OrderDetail = ({ orderDetailMockData, userType }: { orderDetailMockData: orderDetail; userType: string }) => {
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

  return (
    <div className="flex flex-col gap-7">
      <div className="prose-h6 flex flex-row gap-2">
        <div>{dayjs(orderAt).format('YYYY.MM.DD')}</div>
        <div className="">주문</div>
      </div>

      <div className="flex flex-col gap-3">
        {Object.entries(orderedProducts).map(([key, value]) => (
          <div className="">
            <div className="flex flex-col gap-4 rounded-md border border-solid p-4">
              <div className="flex justify-between">
                <div className="prose-h6 text-green-500 md:prose-h5">{orderStatusParser(orderStatus)}</div>
                <BsThreeDotsVertical onClick={() => setIsOpen(!isOpen)} className="w-5 text-gray3" />
              </div>
              {isOpen && <MobileModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />}
              <div className="prose-body-M">
                {key} {value}개
              </div>
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
        <div className="flex flex-col gap-2">
          <div className=" prose-subtitle-L border-b-[3px] border-gray2 pb-2 font-semibold">주문자 정보</div>
          <div className="flex flex-row gap-5">
            <div className="prose-body-M flex flex-col gap-1 text-gray2">
              <div>받는사람</div>
              <div>연락처</div>
              <div>받는주소</div>
            </div>
            <div className="prose-body-M flex flex-col gap-1 ">
              <div>{username}</div>
              <div>01086674220</div>
              <div>{address}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" prose-subtitle-L border-b-[3px] border-gray2 pb-2 font-semibold">입금자 정보</div>
          <div className="flex flex-row gap-5">
            <div className="prose-body-M flex flex-col gap-1 text-gray2">
              <div>입금자명</div>
            </div>
            <div className="prose-body-M flex flex-col gap-1 ">
              <div>{depositor}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" prose-subtitle-L border-b-[3px] border-gray2 pb-2 font-semibold">판매자 정보</div>

          <div className="prose-body-M flex flex-col gap-1 ">
            <div>{sellerAccount}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" prose-subtitle-L border-b-[3px] border-gray2 pb-2 font-semibold">환불계좌</div>

          <div className="prose-body-M flex flex-col gap-1 ">
            <div>{refundAccount}</div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className=" prose-subtitle-L border-b-[3px] border-gray2 pb-2 font-semibold">결제 정보</div>
          <div className=" flex flex-col justify-between  gap-5 md:flex-row">
            <div className="flex flex-col gap-3 pt-2">
              <div className=" prose-body-M text-gray2 ">결제수단</div>
              <div className="\ prose-body-L ">무통장 입금</div>
              <div className=" prose-body-M text-gray2 ">배송 방법</div>
              <div className="\ prose-body-L">표준 배송</div>
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
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const orderDetailMockData = {
    id: 3,
    username: '홍길동',
    salesId: 4,
    orderedProducts: {
      '지민 폰케이스(pink)': 1,
      '정국 키링': 2,
    },
    price: 39000,
    orderStatus: 'CONFIRM',
    address: '서울특별시 강동구 둔촌동',
    orderAt: '2024-01-23 20:52',
    delivery: '표준 배송',
    trackingNum: '등록되지 않음.',
    depositor: '저팔계',
    refundAccount: '국민은행 650043-340-2342 저팔계',
    sellerAccount: '농협 12303-546345-23',
  };

  const params = useSearchParams();
  const pathname = usePathname();
  const orderId = params.get('orderId');
  const salesId = params.get('salesId');
  const [orderDetailData, setOrderDetailData] = useState({});
  const userType = pathname === '/mypage/my-orders/detail' ? 'orderUser' : 'salesUser';

  // useEffect(() => {
  //주문 상세 내역 fetch 함수
  // const { data : orderDetailData } = getOrderDetailService({ orderId, orderId })
  // }, []);

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="prose prose-h4">주문 상세</div>
      <OrderDetail orderDetailMockData={orderDetailMockData} userType={userType} />
    </div>
  );
};

export default page;
