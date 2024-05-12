'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import StyledButton from '@/components/Button/StyledButton';
import { usePatchProfileImageService, usePatchBasicProfileImageService } from '@/hooks/mutations/user/userService';

//TODO 파일 업로드 컴포넌트 분리

const ProfileImageEdit = ({ imageUrl }: { imageUrl: string }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  //프로필 삭제(기본프로필로 변경) 후 저장버튼 누르면 이전 preview 이미지로 post되어 프로필이 변경되어버림.
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>(imageUrl);
  const formData = new FormData();
  imgFile && formData.append('multipartFile', imgFile);

  const handleChange = () => {
    fileRef?.current?.click();
  };

  const onChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
        setImgFile(file);
      }
    }
  };
  const mutationProfileImgPatch = usePatchProfileImageService({ formData });
  const mutationBasicImgPathch = usePatchBasicProfileImageService();

  const handleSave = () => {
    mutationProfileImgPatch.mutate();
  };

  const handleDelete = () => {
    mutationBasicImgPathch.mutate();
  };

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(imgFile);
    } else {
      setPreview(imageUrl);
    }
  }, [imgFile]);

  useEffect(() => {
    setPreview(imageUrl);
  }, [imageUrl]);

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <div className="flex flex-col gap-8">
        <div className=" flex flex-col gap-4">
          <label htmlFor="profileImage" className="prose-h6  text-gray2">
            프로필 이미지
          </label>

          <input ref={fileRef} id="image" className="hidden" type="file" accept="image/*" onChange={onChangeImg} />
          <div className="flex w-[335px] flex-row justify-between md:w-96">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border md:h-32 md:w-32">
              <Image src={preview as string} alt="profile image" fill={true} placeholder="empty" sizes="" />
            </div>
            <div className="flex h-9 flex-row gap-2">
              <StyledButton
                label="변경"
                onClick={() => {
                  handleChange();
                }}
                className="prose-btn-S flex h-10 w-[65px] items-center justify-center rounded-xl bg-orange2  px-4 py-4 text-white md:prose-btn-M hover:bg-orange1 focus:outline-none disabled:bg-gray6 "
              />
              <StyledButton
                label="삭제"
                onClick={() => {
                  handleDelete();
                }}
                className="prose-btn-S flex h-10 w-[65px] items-center justify-center rounded-xl bg-gray5 px-4 py-4 text-white md:prose-btn-M hover:bg-gray4 focus:outline-none disabled:bg-gray6"
              />
              <StyledButton
                label="저장"
                onClick={() => {
                  handleSave();
                }}
                className="prose-btn-S flex h-10 w-[65px] items-center justify-center rounded-xl bg-gray5 px-4 py-4 text-white md:prose-btn-M hover:bg-gray4 focus:outline-none disabled:bg-gray6"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <SubmitButton label="적용" onClick={() => {}} disabled={isSubmitting} /> */}
    </form>
  );
};

export default ProfileImageEdit;
