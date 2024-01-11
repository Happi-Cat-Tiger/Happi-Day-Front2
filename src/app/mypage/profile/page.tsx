'use client';
import React from 'react';
import ProfileImageEdit from '../../../containers/mypage/ProfileImageEdit';
import FormTextInput from '@/components/Form/FormTextInput';
import FormLabel from '@/components/Form/FormLabel';
import Input from '@/components/Input/Input';
import basicProfileImage from '../../../../public/images/basicProfileImage.jpg';
import ProfileEdit from '@/containers/mypage/ProfileEdit';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const MockData = {
  profileImageUrl: basicProfileImage,
  realName: '전미혜',
  userName: 'algp1205@naver.com',
  nickName: '우왕쓰',
  phone: '010-8667-4402',
};

const Page = () => {
  return (
    <div className="w-full">
      <ProfileEdit />
      <div className="mx-2 flex rounded-lg md:mx-6 md:my-6 md:max-w-[1280px] md:border md:border-gray6">
        <div className="mx-5 my-3 flex md:mx-14 md:my-10 ">
          <div className="flex w-full justify-between">
            <FormLabel label="회원탈퇴" />
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
