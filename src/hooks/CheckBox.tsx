import React from 'react';
import { IoCheckboxOutline, IoCheckbox } from 'react-icons/io5';

interface CheckBoxData {
  id: number;
  title: string;
  content: string;
  isChecked: boolean;
}

interface CheckBoxProps {
  checkBoxData: CheckBoxData;
  handleAgreementChange: (id: number, isChecked: boolean) => void;
  toggleAllAgreements: (isChecked: boolean) => void;
}

const CheckBox = ({ checkBoxData, handleAgreementChange, toggleAllAgreements }: CheckBoxProps) => {
  const { id, title, isChecked } = checkBoxData;

  const handleClick = () => {
    id !== 1 ? handleAgreementChange(id, !isChecked) : toggleAllAgreements(!isChecked);
  };

  return (
    <div key={id} className="gap-2 flex cursor-pointer items-center" onClick={handleClick}>
      {isChecked ? (
        <IoCheckbox className="h-6 w-6 text-orange2" />
      ) : (
        <IoCheckboxOutline className="h-6 w-6 text-orange2" />
      )}
      <div className="prose-subtitle-M text-black md:prose-subtitle-L">{title}</div>
    </div>
  );
};

export default CheckBox;
