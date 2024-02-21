import React from 'react';

interface CheckBoxProps {
  title: string;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const CheckBox = ({ title, onCheck, isChecked }: CheckBoxProps) => {
  return (
    <label className="flex items-center">
      <input
        onChange={(e) => {
          onCheck(e);
        }}
        checked={isChecked}
        id="yellow-checkbox"
        type="checkbox"
        value={title}
        className="h-4 w-4 rounded-sm"
      />
      <div className="ml-2 text-gray-900 md:prose-subtitle-L ">{title}</div>
    </label>
  );
};
export default CheckBox;
