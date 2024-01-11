'use client';
import React from 'react';
import ProfileImageEdit from '../../../containers/mypage/ProfileImageEdit';
import FormTextInput from '@/components/Form/FormTextInput';
import FormLabel from '@/components/Form/FormLabel';
import Input from '@/components/Input/Input';
import basicProfileImage from '../../../../public/images/basicProfileImage.jpg';

const MockData = {
  profileImageUrl: basicProfileImage,
  realName: '전미혜',
  userName: 'algp1205@naver.com',
  nickName: '우왕쓰',
  phone: '010-8667-4402',
};

const Page = () => {
  return (
    <div className="mx-5 my-3 flex md:mx-14 md:my-10">
      <div className="flex w-full flex-col gap-8">
        <ProfileImageEdit />
        <div className="flex flex-col gap-4">
          <FormLabel label="이메일" />
          <Input type="text" isReadOnly={true} value={MockData.userName} placeholder="" onChange={(event) => null} />
        </div>{' '}
        <div className="flex flex-col gap-4">
          <FormLabel label="이름" />
          <Input type="text" isReadOnly={true} value={MockData.realName} placeholder="" onChange={(event) => null} />
        </div>
        <FormTextInput
          label="닉네임"
          type="text"
          name="nickName"
          isReadOnly={false}
          valid={/^([a-zA-Zㄱ-힣]){1,10}$/}
          errorMesage="10자 이내의 한글, 영문 대/소문자를 사용해 주세요.(특수기호, 공백 사용 불가)"
          defaultValues={{ nickName: MockData.nickName }}
        />
        <FormTextInput
          label="휴대폰 번호"
          type="text"
          name="phone"
          isReadOnly={false}
          valid={/^\d{3}-\d{4}-\d{4}$/}
          errorMesage="휴대폰 번호를 8자리 숫자로 입력해주세요."
          defaultValues={{ phone: MockData.phone }}
        />
        <FormTextInput
          label="비밀번호"
          type="password"
          name="password"
          isReadOnly={false}
          valid={/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z0-9!@#$%^&*()_+]).{8,}$/}
          errorMesage="8글자 이상의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요."
          defaultValues={{ password: '' }}
        />
      </div>
    </div>
  );
};

export default Page;
