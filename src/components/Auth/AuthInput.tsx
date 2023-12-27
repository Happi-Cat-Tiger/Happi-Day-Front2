import React from 'react';

interface InputPlaceholder {
  title: string;
  icon: React.ElementType;
  content: string;
}

interface AuthInputProps {
  inputPlaceHolder: InputPlaceholder[];
}

export default function AuthInput({ inputPlaceHolder }: AuthInputProps) {
  return (
    <div className="flex-column items-end self-stretch">
      {inputPlaceHolder.map((item, index) => (
        <div key={index} className="mb-1 md:mb-3 flex w-full items-center justify-between self-stretch">
          <div className="prose-subtitle-S text-gray1 md:prose-subtitle-M">{item.title}</div>
          <div className="px-2 py-2.5 gap-2.5 border-[1px]-gray-5 border-gray-5 flex h-[44px] w-[200px] items-center rounded-lg border-[1px] md:w-[300px]">
            {React.createElement(item.icon, { className: 'w-6 h-6 flex-shrink-0 text-gray5' })}
            <input className="prose-body-XS outline-none md:prose-body-S" placeholder={item.content}></input>
          </div>
        </div>
      ))}
    </div>
  );
}
