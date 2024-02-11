import React from 'react';
import { AuthInputPlaceholder } from '@/types/auth';
import { useForm } from 'react-hook-form';
import { AUTH_REACT_HOOK_FORM } from '@/constants/auth';
import { postSigninService } from '@/hooks/mutations/auth/authService';

interface AuthInputProps {
  inputPlaceHolder: AuthInputPlaceholder[];
}

type LoginFormValues = {
  id: string;
  pw: string;
};

type SignupFormValues = {
  id: string;
  name: string;
  nickname: string;
  phoneNumber: string;
  pw: string;
  pwConfirm: string;
};

type FormValues = {
  [key: string]: string;
};

const AuthInput = ({ inputPlaceHolder }: AuthInputProps) => {
  const signinMutation = postSigninService();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<FormValues>({ mode: 'onBlur' });

  const onSubmit = handleSubmit((data) => {
    // 회원가입 페이지에서의 api 동작 x
    if (inputPlaceHolder.length === 6) return;
    // 로그인 api
    signinMutation.mutate({ username: data.id, password: data.pw });
  });

  const isFormValid: boolean =
    Object.keys(errors).length === 0 && Object.keys(dirtyFields).length === inputPlaceHolder.length;
  const isHaveLabel: boolean = inputPlaceHolder.some((item) => item.label);
  const isPhoneNumberField = (name: string): boolean => {
    return name === 'phoneNumber';
  };
  const watchPw = watch('pw', '');
  const checkPasswordConfirmation = (value: string) => {
    return value === watchPw || '비밀번호가 일치하지 않습니다.';
  };

  const getPattern = (name: string) => AUTH_REACT_HOOK_FORM.VALIDATION_PATTERNS[name] || null;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10 self-stretch md:gap-[60px]">
      <div>
        {inputPlaceHolder.map((item, index) => {
          const getValidation = (item: any) => {
            if (item.name === 'pwConfirm') return { validate: checkPasswordConfirmation };
            const pattern = getPattern(item.name);
            return pattern ? { pattern } : null;
          };
          return (
            <div
              key={index}
              className={`mb-1 flex w-full items-center md:mb-3 ${
                item.label ? 'justify-between' : 'justify-center'
              } self-stretch`}>
              {item.label && <div className="prose-subtitle-S text-gray1 md:prose-subtitle-M">{item.label}</div>}
              <div className="flex flex-col">
                <div
                  className={`${
                    errors[item.name] ? 'border-red-500' : 'border-gray-5'
                  } flex h-[44px] items-center gap-2.5 rounded-lg border-[1px] px-2 py-2.5 ${
                    item.label ? 'w-[200px] md:w-[300px]' : 'w-[300px]'
                  }`}>
                  {React.createElement(item.icon, {
                    className: `w-6 h-6 flex-shrink-0 ${errors[item.name] ? 'text-red-500' : 'text-gray5'}`,
                  })}
                  <input
                    {...register(item.name, {
                      required: true,
                      ...getValidation(item),
                    })}
                    type={item.type}
                    className={`${item.label ? 'prose-body-XS md:prose-body-S' : 'prose-body-S'} outline-none`}
                    placeholder={item.content}
                    maxLength={isPhoneNumberField(item.name) ? 11 : undefined}
                  />
                </div>
                {errors[item.name] && (
                  <div className="prose-body-XXS text-red-500 md:prose-body-XS">
                    {errors[item.name]?.message as string}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          value={isHaveLabel ? '로그인' : '가입하기'}
          disabled={!isFormValid}
          className="prose-btn-M w-[300px] rounded-lg bg-orange2 py-3 text-white md:prose-btn-L hover:cursor-pointer hover:bg-orange1 disabled:bg-gray6"
        />
      </div>
    </form>
  );
};

export default AuthInput;
