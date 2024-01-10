'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormErrorMessage from './FormErrorMessage';
import StyledSubmitButton from '@/components/Button/StyledSubmitButton';

//TODO types 폴더가 없어서 pull 받고 타입 파일 추가예정
type FormData = {
  realName: string;
  userName: string;
  nickName: string;
  phone: string;
  password: string;
};

interface Props {
  label: string;
  type: string;
  isReadOnly: boolean;
  placeholder?: string;
  valid: RegExp;
  errorMesage: string;
  name: keyof FormData;
  defaultValues?: object;
}

const FormTextInput = ({ valid, errorMesage, defaultValues, name, placeholder, label, isReadOnly, type }: Props) => {
  const {
    formState,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues,
  });

  const { isSubmitting } = formState;
  const [hyphen, setHyphen] = useState<string>('');
  const watchAllFields = watch('phone');

  // const mutationPatch = useServiceMutation(updateProfileService, { userId })

  const onSubmit = (formData: FormData) => {
    //TODO 서버 전송 코드 작성 + 공통 에러핸들링

    // mutationPatch.mutate(formData, {
    //   onSuccess: () => {
    //     callback();
    //   },
    // });
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 600);
    });
  };

  useEffect(() => {
    if (watchAllFields && watchAllFields.length === 11) {
      setHyphen(watch('phone').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
      setTimeout(() => {
        setValue('phone', hyphen);
      }, 0.00001);
    }
  }, [hyphen, watchAllFields]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div className="prose-h6  text-gray2">{label}</div>
          <div className="flex flex-col gap-1">
            <div className="flex max-w-md flex-row justify-between border-b-[1px] pb-2 md:max-w-md">
              <input
                className=" bg-white outline-0 md:w-[320px]"
                placeholder={placeholder}
                readOnly={isReadOnly}
                type={type}
                {...register(name, {
                  pattern: { value: valid, message: errorMesage },
                })}
              />
              <div className="flex items-center">
                <StyledSubmitButton
                  type="submit"
                  label="변경"
                  isSubmitting={isSubmitting}
                  onClick={() => null}
                  className="prose-btn-XS flex h-9 w-[58px] items-center justify-center rounded-xl bg-orange2 px-5 py-3 text-white md:prose-btn-S hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-4 md:py-4 "
                />
              </div>
            </div>
            {errors && errors[name] ? (
              <FormErrorMessage>
                <>{errors[name]?.message}</>
              </FormErrorMessage>
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default FormTextInput;
