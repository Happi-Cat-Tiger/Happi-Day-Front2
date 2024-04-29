'use client';
import React, { useState, useEffect } from 'react';
import FormLabel from '@/components/Form/FormLabel';
import Input from '@/components/Input/Input';
import basicProfileImage from '../../../../public/images/basicProfileImage.jpg';
import ProfileEdit from '@/containers/mypage/ProfileEdit';
import { SlArrowRight, SlArrowDown } from 'react-icons/sl';
import SubmitButton from '@/components/Button/SubmitButton';
import StyledSubmitButton from '@/components/Button/StyledSubmitButton';
import { useGetProfileInfoService } from '@/hooks/queries/user/userService';

const Page = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetProfileInfoService();
  const [passwordValue, setPasswordValue] = useState('');

  return (
    data && (
      <div>
        <ProfileEdit data={data} />
        <div className="mx-2 flex  rounded-lg md:mx-6 md:my-6 md:max-w-[1280px] md:border md:border-gray6">
          <div className="mx-5 my-3 flex w-full flex-col md:mx-14 md:my-10">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between">
                <FormLabel label="회원탈퇴" />
                {open ? <SlArrowDown onClick={() => setOpen(false)} /> : <SlArrowRight onClick={() => setOpen(true)} />}
              </div>

              {open ? (
                <>
                  <div className="flex flex-col items-center gap-10">
                    <div className="prose-h5">'탈퇴안내사항'</div>
                    <div className="prose-body-S text-center md:prose-body-M">
                      회원님께서 회원 탈퇴를 원하신다니 저희 서비스가 많이 부족하고 미흡했나 봅니다. 불편하셨던 점이나
                      불만사항을 알려주시면 적극 반영해서 고객님의 불편함을 해결해 드리도록 노력하겠습니다
                      <p>🙇🏻‍♀️감사합니다🙇🏻‍♀️</p>
                      아울러 회원 탈퇴시의 아래 사항을 숙지하시기 바랍니다.
                    </div>
                    <ul className="prose-body-S text-start md:prose-body-M">
                      <li className="mb-1">1. 계정 탈퇴 시, Happi Day 서비스에서 탈퇴됩니다.</li>
                      <li className="mb-1">2. 탈퇴 시 계정과 관련된 모든 권한이 사라지며 복구할 수 없습니다.</li>
                      <li className="mb-1">
                        3. 직접 작성한 콘텐츠(게시물, 댓글 등)는 자동으로 삭제되지 않으며, 만일 삭제를 원하시면 탈퇴
                        이전에 삭제가 필요합니다.
                      </li>
                      <li className="mb-1">
                        4. 탈퇴 후 동일한 메일로 재가입이 가능하나, 탈퇴한 계정과 연동되지 않습니다.
                      </li>
                      <li className="mb-1">
                        5.현재 비밀번호를 입력하고 탈퇴하기를 누르시면 위 내용에 동의하는 것으로 간주됩니다.
                      </li>
                    </ul>
                    <div className="prose-h5">탈퇴하기</div>
                    <div className="prose-body-M flex flex-col gap-3">
                      <div className=" flex flex-row">
                        <div className="w-20">이메일</div>
                        <div>{data.username}</div>
                      </div>
                      <div className=" flex h-8 flex-row">
                        <div className="my-auto w-20 items-center">비밀번호</div>
                        <Input
                          isReadOnly={false}
                          value={passwordValue}
                          type={'text'}
                          onChange={(newValue) => {
                            setPasswordValue(newValue);
                          }}></Input>
                      </div>
                    </div>
                    <StyledSubmitButton
                      label="탈퇴"
                      isSubmitting={false}
                      type="submit"
                      onClick={() => console.log(passwordValue)}
                      className={
                        'prose-btn-M flex h-10 w-[300px] items-center justify-center rounded-xl  bg-pink px-4 py-4 text-white md:prose-btn-M hover:bg-pink2 focus:outline-none disabled:bg-gray6'
                      }
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Page;
