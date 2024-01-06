import React from 'react';
import { useForm } from 'react-hook-form';

interface InputPlaceholder {
  name: string;
  label: string;
  type: string;
  icon: React.ElementType;
  content: string;
}

interface AuthInputProps {
  inputPlaceHolder: InputPlaceholder[];
}

const AuthInput = ({ inputPlaceHolder }: AuthInputProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex-column items-end self-stretch">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register('test1')} type="text" className="border border-gray-100"></input>
        <input {...register('test2')} type="text" className="border border-gray-100"></input>
        {/* {inputPlaceHolder.map((item, index) => (
          <div
            key={index}
            className={`mb-1 md:mb-3 flex w-full items-center justify-${
              item.label ? 'between' : 'center'
            } self-stretch`}>
            {item.label && <div className="prose-subtitle-S text-gray1 md:prose-subtitle-M">{item.label}</div>}
            <div
              className={`px-2 py-2.5 gap-2.5 border-[1px]-gray-5 border-gray-5 flex h-[44px] items-center rounded-lg border-[1px] ${
                item.label ? 'w-[200px] md:w-[300px]' : 'w-[300px]'
              }
          `}>
              {React.createElement(item.icon, { className: 'w-6 h-6 flex-shrink-0 text-gray5' })}
              <input
                {...register(item.name)}
                type={item.type}
                className={`${item.label ? 'prose-body-XS md:prose-body-S' : 'prose-body-S'} outline-none`}
                placeholder={item.content}></input>
            </div>
          </div>
        ))} */}
      </form>
    </div>
  );
};

export default AuthInput;
