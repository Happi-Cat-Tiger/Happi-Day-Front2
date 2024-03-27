import { writeState, writingInfoState } from '@/atom/write';
import { useRecoilState } from 'recoil';
import React from 'react';
import Select from 'react-select';
import { AiFillHeart, AiOutlineClockCircle } from 'react-icons/ai';
import StyledSubmitButton from '@/components/Button/StyledSubmitButton';

const SalesPreviewWritingStep = () => {
  const [writeValue] = useRecoilState(writeState);
  const [writingInfoValue] = useRecoilState(writingInfoState);

  if (!writingInfoValue) {
    return null;
  }

  const inputPlaceholders = [
    { title: '입금정보', label: ['입금자명'] },
    { title: '환불계좌 정보', label: ['은행명', '계좌번호', '예금주명'] },
  ];
  const currentDate = new Date();
  const formattedCurrentDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate
    .getHours()
    .toString()
    .padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className="pointer-events-none mb-[200px] mt-[50px] flex w-full flex-col px-[8px] md:mt-[100px]">
      <div className="flex w-full border-b-[1px] border-gray6 pb-[30px] sm:flex-col md:flex-row md:justify-between">
        <div className="h-full w-full">
          <div className="flex flex-col items-center gap-[7px]">
            <div className="h-[308px] w-full bg-gray6 md:h-[580px]">
              {writingInfoValue.thumbnailImage && (
                <img
                  src={URL.createObjectURL(writingInfoValue.thumbnailImage)}
                  alt="Thumbnail"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
            <div className="flex w-full justify-between px-1">
              <div className="prose-body-M flex gap-1 text-gray4">
                {writingInfoValue.hashtag.map((hashtag, index) => (
                  <div key={index} className="rounded-2xl border-[1px] border-gray4 px-2">
                    <div>#{hashtag.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-none items-center gap-1">
                <AiFillHeart className="text-[#D80000]" />
                <div>찜하기</div>
                <div className="font-extrabold">12</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col gap-4 p-2 md:mt-0 md:gap-8 md:p-[35px]">
          <div className="flex flex-col gap-3">
            <div className="prose-subtitle-M flex items-center justify-between text-gray5">
              <div>닉네임</div>
              <div className="flex items-center gap-2">
                <AiOutlineClockCircle />
                {formattedCurrentDate}
              </div>
            </div>
            <div className="prose-h4">{writeValue.articleTitle}</div>
            <div className="prose-h3 flex items-center justify-end gap-1">
              <div>{writingInfoValue.titleProduct.price}</div>
              <div className="prose-h4">원</div>
            </div>
          </div>
          <div className="flex flex-col gap-7 border-y-[1px] border-gray7 py-7">
            <Select isSearchable={false} placeholder="옵션선택(필수)" />
            <div className="flex flex-col gap-2">
              <div className="prose-body-S text-gray5">입금폼이 끝난후 2~4주후 발송 해드립니다.</div>
              <Select isSearchable={false} placeholder="배송방법 선택" />
            </div>
          </div>
          <div className="prose-body-M">
            <div className="flex flex-col gap-3 border-b-[1px] py-4">
              <div>{writingInfoValue.productOptions[0].label}</div>
              <div className="flex items-end justify-between">
                <div className="prose-h7 flex items-center">
                  <button className="border-[1px] bg-gray7 px-3 py-2">-</button>
                  <div className="border-[1px] px-4 py-2">1</div>
                  <button className="border-[1px] bg-gray7 px-3 py-2">+</button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="prose-h7">{writingInfoValue.productOptions[0].price}</div>
                    <div className="prose-body-M">원</div>
                  </div>
                  <button className="prose-body-S border-2 border-gray6 px-1 text-gray6">X</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="prose-h7">총 상품금액</div>
                <div className="flex gap-10 md:gap-20">
                  <div className="prose-body-S text-gray5 md:prose-body-M">총 수량 1개</div>
                  <div className="flex items-center gap-2">
                    <div className="prose-h7 md:prose-h5">{writingInfoValue.productOptions[0].price}</div>
                    <div className="prose-h7">원</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="prose-h7">배송비</div>
                <div className="flex items-center gap-2">
                  <div className="prose-h7 md:prose-h5">{writingInfoValue.shippingOptions[0].price}</div>
                  <div className="prose-h7">원</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="prose-h6 md:prose-h5">총 결제금액</div>
              <div className="flex items-center gap-2">
                <div className="prose-h6 text-[#D80000] md:prose-h4">
                  {(parseInt(writingInfoValue.productOptions[0].price) || 0) +
                    (parseInt(writingInfoValue.shippingOptions[0]?.price) || 0)}
                </div>
                <div className="prose-h5">원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[33px] border-b-[1px] border-gray6 px-2 py-4 md:flex-row md:justify-between md:px-[33px] md:py-[30px]">
        <div className="w-full">
          <div className="flex flex-col gap-7">
            {inputPlaceholders.map((content, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="prose-h6 md:prose-h5">
                  {content.title}
                  <span className="text-[#D80000]">&nbsp;*</span>
                </div>
                <div className="flex flex-col gap-3">
                  {content.label.map((label, idx) => (
                    <div key={idx}>
                      <input
                        placeholder={label}
                        name={label}
                        className="prose-body-S w-[220px] rounded-full border-[1px] border-gray4 p-2 pl-4 md:prose-body-M"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:pl-[22px]">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <div className="prose-h6 md:prose-h5">
                배송지 정보<span className="text-[#D80000]">&nbsp;*</span>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <div>주문자 정보와 동일</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {['수령자명', '연락처'].map((label, index) => (
                <div key={index}>
                  <input
                    placeholder={label}
                    name={label}
                    className="prose-body-S w-[220px] rounded-full border-[1px] border-gray4 p-2 pl-4 md:prose-body-M"
                  />
                </div>
              ))}
              <div className="flex gap-2">
                <input
                  placeholder="우편번호"
                  className="prose-body-S w-[220px] rounded-full border-[1px] p-2 pl-4 md:prose-body-M"
                />
                <button className="prose-btn-S w-[130px] rounded-full border-[1px] bg-gray5 p-2 text-white md:prose-body-M hover:bg-pink">
                  우편번호 찾기
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  placeholder="주소"
                  name="주소"
                  className="prose-body-S w-full rounded-full border-[1px] border-gray4 p-2 pl-4 md:prose-body-M"
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  placeholder="상세주소"
                  name="상세주소"
                  className="prose-body-S w-full rounded-full border-[1px] border-gray4 p-2 pl-4 md:prose-body-M"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[35px] py-[30px]">
        <div className="flex flex-col items-center gap-[22px]">
          <div className="flex w-[340px] flex-col gap-[7px] bg-gray7 p-5 md:w-[840px]">
            <div className="prose-h7">
              개인정보 수집 및 동의<span className="text-[#D80000]">&nbsp;*</span>
            </div>
            <div className="prose-body-XS md:prose-body-M">
              상품 주문 및 배송을 위해 입력된 개인정보를 수집합니다.수집한 개인정보는 주문과 배송이외의 목적으로는
              사용하지 않으며, 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 5년까지 보관합니다. 개인정보의 수집 및
              이용에 대한 동의를 거부할 수 있으며, 이 경우 상품 주문이 어려울 수 있습니다.
            </div>
          </div>
          <div className="flex gap-1">
            <div>동의합니다.</div>
            <input type="checkbox" />
          </div>
        </div>
        <StyledSubmitButton
          label="구매하기"
          type="submit"
          onClick={() => {}}
          className="prose-btn-M h-10 w-[260px] rounded-3xl bg-pink text-white md:prose-h4 md:h-[56px]"
          disabled={true}
        />
      </div>
      <div className="m-auto my-[100px] w-[400px] md:w-[600px] lg:w-[800px]">
        <div>
          {writingInfoValue.imageFile && <img src={URL.createObjectURL(writingInfoValue.imageFile)} alt="Poster" />}
        </div>
        <div className="sm:prose-body-S md:prose-body-L" dangerouslySetInnerHTML={{ __html: writeValue.editValue }} />
      </div>
    </div>
  );
};

export default SalesPreviewWritingStep;
