'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormErrorMessage from './FormErrorMessage';
import StyledSubmitButton from '@/components/Button/StyledSubmitButton';
import { UserProfileInfo } from '@/types/useProfile';
import { usePatchProfileInfoService } from '@/hooks/mutations/user/userService';

interface Props {
  label: string;
  type: string;
  isReadOnly: boolean;
  placeholder?: string;
  valid: RegExp;
  errorMesage: string;
  name: keyof UserProfileInfo;
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
    getValues,
  } = useForm<UserProfileInfo>({
    mode: 'onBlur',
    defaultValues,
  });

  const { isSubmitting } = formState;
  const [hyphen, setHyphen] = useState<string>('');
  const watchAllFields = watch('phone');

  const mutationPatch = usePatchProfileInfoService();

  const onSubmit = () => {
    const values = getValues();
    mutationPatch.mutate(values);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  };
  // 하이픈 자동 기입 기능
  // useEffect(() => {
  //   if (watchAllFields && watchAllFields.length === 11) {
  //     setHyphen(watch('phone').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  //     setTimeout(() => {
  //       setValue('phone', hyphen);
  //     }, 0.00001);
  //   }
  // }, [hyphen, watchAllFields]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-3">
          <div className="prose-h6  text-gray2">{label}</div>
          <div className="flex flex-col gap-1">
            <div className="flex w-full min-w-[300px] flex-row justify-between border-b-[1px] pb-2  sm:w-full md:max-w-md">
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
                  onClick={() => {}}
                  className="prose-btn-S flex h-10 w-[65px] items-center justify-center rounded-xl bg-orange2  px-4 py-4 text-white md:prose-btn-M hover:bg-orange1 focus:outline-none disabled:bg-gray6"
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
