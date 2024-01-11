'use client';
import React, { FC, InputHTMLAttributes, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isReadOnly: boolean;
  value: string | number;
  type: 'number' | 'text' | 'email';
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<Props> = ({ isReadOnly, value, type, placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    // if (onChange) {
    //   onChange(event); // 상위 컴포넌트로 변경된 값을 전달
    // }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type={type}
        readOnly={isReadOnly}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="outline-none"
      />
    </div>
  );
};

export default Input;
