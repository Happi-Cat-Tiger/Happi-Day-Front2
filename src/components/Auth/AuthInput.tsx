import React from 'react';
import { useForm } from 'react-hook-form';

interface InputPlaceholder {
  label: string;
  type: string;
  icon: React.ElementType;
  content: string;
  name: string;
}

interface AuthInputProps {
  inputPlaceHolder: InputPlaceholder[];
}

interface FormData {
  [key: string]: string;
}

const AuthInput = ({ inputPlaceHolder }: AuthInputProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const isFormValid = Object.keys(errors).length === 0 && Object.keys(dirtyFields).length === inputPlaceHolder.length;
  const isPhoneNumberField = (name: string) => {
    return name === 'phoneNumber';
  };
  const haveLabel = inputPlaceHolder.some((item) => item.label);
  const watchPw = watch('pw', '');
  const checkPasswordConfirmation = (value: string) => {
    return value === watchPw || '비밀번호가 일치하지 않습니다.';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 self-stretch md:gap-[60px]">
      <div>
        {inputPlaceHolder.map((item, index) => (
          <div
            key={index}
            className={`mb-1 flex w-full items-center md:mb-3 ${
              item.label ? 'justify-between' : 'justify-center'
            } self-stretch`}>
            {item.label && <div className="prose-subtitle-S text-gray1 md:prose-subtitle-M">{item.label}</div>}
            <div className="flex flex-col">
              <div
                className={`${
                  errors[item.name] ? 'border-[1px]-red-500' : 'border-[1px]-gray-5'
                } flex h-[44px] items-center gap-2.5 rounded-lg border-[1px] px-2 py-2.5 ${
                  item.label ? 'w-[200px] md:w-[300px]' : 'w-[300px]'
                }`}>
                {React.createElement(item.icon, {
                  className: `w-6 h-6 flex-shrink-0 ${errors[item.name] ? 'text-red-500' : 'text-gray5'}`,
                })}
                <input
                  {...register(item.name, {
                    required: true,
                    ...(item.name === 'id' && {
                      pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                        message: '올바른 이메일 형식이 아닙니다.',
                      },
                    }),
                    ...(item.name === 'pw' && {
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>/?]).{8,}$/,
                        message: '영문, 숫자, 특수문자 포함 8글자 이상이어야 합니다.',
                      },
                    }),
                    ...(item.name === 'pwConfirm' && {
                      validate: checkPasswordConfirmation,
                    }),
                    ...(item.name === 'name' && {
                      pattern: {
                        value: /^[A-Za-z가-힣]+$/,
                        message: '영문 또는 한글만 입력해주세요.',
                      },
                    }),
                    ...(item.name === 'phoneNumber' && {
                      pattern: {
                        value: /^[0-9]{1,11}$/,
                        message: '하이픈(-)을 제외한 숫자만 입력해주세요.',
                      },
                    }),
                    ...(item.name === 'nickName' && {
                      pattern: {
                        value: /^[A-Za-z가-힣]{1,10}$/,
                        message: '영문 또는 한글로 10글자 이내로 입력해주세요.',
                      },
                    }),
                  })}
                  type={item.type}
                  className={`${item.label ? 'prose-body-XS md:prose-body-S' : 'prose-body-S'} outline-none`}
                  placeholder={item.content}
                  maxLength={isPhoneNumberField(item.name) ? 11 : undefined}></input>
              </div>
              {errors[item.name] && (
                <div className="prose-body-XXS text-red-500 md:prose-body-XS">&bull; {errors[item.name]?.message}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {haveLabel ? (
          <button
            type="submit"
            disabled={!isFormValid}
            className="prose-btn-M w-[300px] rounded-lg bg-orange2 py-3 text-white md:prose-btn-L hover:bg-orange1 disabled:bg-gray6">
            가입하기
          </button>
        ) : (
          <button
            type="submit"
            disabled={!isFormValid}
            className="prose-btn-M w-[300px] rounded-lg bg-orange2 py-3 text-white md:prose-btn-L hover:bg-orange1 disabled:bg-gray6">
            로그인
          </button>
        )}
      </div>
    </form>
  );
};

export default AuthInput;
