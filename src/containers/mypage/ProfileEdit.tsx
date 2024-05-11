'use client';
import React, { useEffect, useState } from 'react';
import ProfileImageEdit from '../../containers/mypage/ProfileImageEdit';
import FormTextInput from '@/components/Form/FormTextInput';
import FormLabel from '@/components/Form/FormLabel';
import Input from '@/components/Input/Input';
import { Profile } from '@/hooks/queries/user/userService';

//TODO 전역 userData 가져오기

interface Props {
  id: number;
  realname: string;
  role: 'USER' | 'ADMIN';
  username: string;
  phone: string;
  imageUrl: string;
  nickname: string;
}
const ProfileEdit = ({ data }: { data: Props }) => {
  const [profileInfoData, setProfileInfoData] = useState<Profile | null>(null);

  useEffect(() => {
    if (data) {
      setProfileInfoData(data);
    }
  }, [data]);

  return (
    data && (
      <div className="mx-2 rounded-lg md:mx-6 md:my-6 md:max-w-[1280px] md:border md:border-gray6">
        <div className="mx-5 my-3  md:mx-14 md:my-10 ">
          <div className="flex w-full flex-col gap-8">
            <ProfileImageEdit imageUrl={data.imageUrl} />
            <div className="flex flex-col gap-4">
              <FormLabel label="이메일" />
              <Input type="text" isReadOnly={true} value={data.username} placeholder="" onChange={(event) => null} />
            </div>{' '}
            <div className="flex flex-col gap-4">
              <FormLabel label="이름" />
              <Input type="text" isReadOnly={true} value={data.realname} placeholder="" onChange={(event) => null} />
            </div>
            <FormTextInput
              label="닉네임"
              type="text"
              name="nickname"
              isReadOnly={false}
              valid={/^([a-zA-Zㄱ-힣]){1,10}$/}
              errorMesage="10자 이내의 한글, 영문 대/소문자를 사용해 주세요.(특수기호, 공백 사용 불가)"
              defaultValues={{ nickname: data.nickname }}
            />
            <FormTextInput
              label="휴대폰 번호"
              type="text"
              name="phone"
              isReadOnly={false}
              valid={/^\d{3}-\d{4}-\d{4}$/}
              errorMesage="휴대폰 번호를 11자리 숫자로 입력해주세요."
              defaultValues={{ phone: data.phone }}
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
      </div>
    )
  );
};

export default ProfileEdit;
