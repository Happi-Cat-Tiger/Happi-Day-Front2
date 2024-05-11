'use client';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Select from 'react-select';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { handleOptionSelectState, totalPayState } from '@/atom/salesAtom';
import { SalesArticleResponse } from '@/types/sales';

interface PageProps {
  salesArticleData?: SalesArticleResponse;
}

const Page = ({ salesArticleData }: PageProps) => {
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const salesOptions = salesArticleData?.products.map((product) => ({
    value: product.id,
    label: product.name,
    price: product.price,
  }));

  const [selectOptions, setSelectOptions] = useState({ value: 0, label: '옵션선택(필수)*', price: 0 });
  const [selectedContents, setSelectedContents] = useState<{ label: string; price: number }[]>([]);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleSelectChange = (selectedItem: { value: number; label: string; price: number }) => {
    const isExcludedOption = selectedItem.value === 0;

    if (!isExcludedOption) {
      const isAlreadySelected = selectedContents.some((content) => content.label === selectedItem.label);

      if (!isAlreadySelected) {
        setSelectedContents((prevContents) => {
          const newContents = [...prevContents, selectedItem];
          newContents.sort((a, b) => a.label.localeCompare(b.label));
          return newContents;
        });
        setTotalQuantity((prevQuantity) => prevQuantity + 1);
      }
      setSelectOptions({ value: 0, label: '옵션선택(필수)*', price: 0 });
    }
  };

  const removeSelectedItem = (itemToRemove: { label: string; price: number }) => {
    setSelectedContents((prevContents) => prevContents.filter((content) => content.label !== itemToRemove.label));
    setTotalQuantity(
      (prevQuantity) =>
        prevQuantity - quantities[selectedContents.findIndex((content) => content.label === itemToRemove.label)],
    );
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      const removedIndex = selectedContents.findIndex((content) => content.label === itemToRemove.label);
      if (removedIndex !== -1) {
        newQuantities.splice(removedIndex, 1);
      }
      return newQuantities;
    });
  };

  const deliveryOptions = salesArticleData?.deliveries.map((delivery) => {
    return {
      value: delivery.id,
      label: delivery.name,
      price: delivery.price,
    };
  });

  const [deliverySelectOptions, setDeliverySelectOptions] = useState({
    value: 0,
    label: '배송비 선택',
    price: 0,
  });
  const [deliverySelected, setDeliverySelected] = useState(false);

  const handleDeliveryFeeChange = (deliveryItem: { value: number; label: string; price: number }) => {
    if (deliveryItem.value !== 0) {
      setDeliverySelectOptions(deliveryItem);
      setDeliverySelected(true);
    }
  };

  const [quantities, setQuantities] = useState([1, 1, 1]);

  const increaseQuantity = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
    setTotalQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
      setTotalQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const totalPrice = selectedContents.reduce((acc, content, index) => {
    return acc + content.price * quantities[index];
  }, 0);

  const [isAllOptionsSelected, setIsAllOptionsSelected] = useRecoilState(handleOptionSelectState);
  const [totalPay, setTotalPay] = useRecoilState(totalPayState);

  useEffect(() => {
    const calculatedTotalPay = totalPrice + deliverySelectOptions.price;
    setTotalPay(calculatedTotalPay);
    setIsAllOptionsSelected(totalPrice > 0 && deliverySelectOptions.price > 0);
  }, [totalPrice, deliverySelectOptions.price, setTotalPay, setIsAllOptionsSelected]);

  return (
    <div className="mt-10 flex w-full flex-col gap-4 p-2 md:mt-0 md:gap-8 md:p-[35px]">
      <div className="flex flex-col gap-3">
        <div className="prose-subtitle-M flex items-center justify-between text-gray5">
          <div></div>
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle />
            {getCurrentDateTime()}
          </div>
        </div>
        <div className="prose-h4">{salesArticleData?.name}</div>
        <div className="prose-h3 flex items-center justify-end gap-1">
          <div>{salesArticleData?.namePrice}</div>
          <div className="prose-h4">원</div>
        </div>
      </div>
      <div className="flex flex-col gap-7 border-y-[1px] border-gray7 py-7">
        <Select
          options={salesOptions}
          onChange={(selectedItem) => {
            setSelectOptions(selectedItem || { value: 0, label: '옵션선택(필수)*', price: 0 });
            handleSelectChange(selectedItem || { value: 0, label: '옵션선택(필수)*', price: 0 });
          }}
          value={selectOptions}
          isSearchable={false}
          styles={{
            option: (provided, state) => ({
              ...provided,
              color: state.data.label === '옵션선택(필수)*' ? 'white' : 'black',
            }),
          }}
        />
        <div className="flex flex-col gap-2">
          <div className="prose-body-S text-gray5">입금폼이 끝난후 2~4주후 발송 해드립니다.</div>
          <Select
            options={deliveryOptions}
            onChange={(deliveryItem) => {
              setDeliverySelectOptions(deliveryItem || { value: 0, label: '배송비 선택', price: 0 });
              handleDeliveryFeeChange(deliveryItem || { value: 0, label: '배송비 선택', price: 0 });
            }}
            value={deliverySelectOptions}
            isSearchable={false}
            styles={{
              option: (provided, state) => ({
                ...provided,
                color: state.isSelected ? 'white' : 'black',
              }),
            }}
          />
        </div>
      </div>
      <div>
        <div className="prose-body-M">
          {selectedContents.map((content, index) => (
            <>
              <div key={index} className="flex flex-col gap-3 border-b-[1px] py-4">
                <div>{content.label}</div>
                <div className="flex items-end justify-between">
                  <div className="prose-h7 flex items-center">
                    <button onClick={() => decreaseQuantity(index)} className="border-[1px] bg-gray7 px-3 py-2">
                      -
                    </button>
                    <div className="border-[1px] px-4 py-2">{quantities[index]}</div>
                    <button onClick={() => increaseQuantity(index)} className="border-[1px] bg-gray7 px-3 py-2">
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className="prose-h7">{content.price * quantities[index]}</div>
                      <div className="prose-body-M">원</div>
                    </div>
                    <button
                      onClick={() => removeSelectedItem(content)}
                      className="prose-body-S border-2 border-gray6 px-1 text-gray6">
                      X
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="prose-h7">총 상품금액</div>
            <div className="flex gap-10 md:gap-20">
              <div className="prose-body-S text-gray5 md:prose-body-M">총 수량 {totalQuantity}개</div>
              <div className="flex items-center gap-2">
                <div className="prose-h7 md:prose-h5">{totalPrice}</div>
                <div className="prose-h7">원</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="prose-h7">배송비</div>
            <div className="flex items-center gap-2">
              <div className="prose-h7 md:prose-h5">{deliverySelectOptions.price}</div>
              <div className="prose-h7">원</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="prose-h6 md:prose-h5">총 결제금액</div>
          <div className="flex items-center gap-2">
            <div className="prose-h6 text-[#D80000] md:prose-h4">{totalPay}</div>
            <div className="prose-h5">원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
