import React, { FC, InputHTMLAttributes, useState } from 'react';

interface OnChangeHandler {
  (newValue: string): void;
}
interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  isReadOnly: boolean;
  value: string;
  type: 'number' | 'text' | 'email';
  placeholder?: string;
  onChange: OnChangeHandler;
}

const Input: FC<Props> = ({ isReadOnly, value, type, placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // 외부로 입력된 값을 전달
    onChange(newValue);
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
