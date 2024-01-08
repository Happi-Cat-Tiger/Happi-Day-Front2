import React, { useState } from 'react';
import StyledButton from '../Button/StyledButton';

interface CategoryDropdownProps {
  dropdownOpt: string[];
  dropValue: string;
  handleChangeCategory: (value: string) => void;
}

const CategoryDropdown = ({ dropdownOpt, dropValue, handleChangeCategory }: CategoryDropdownProps) => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  return (
    <>
      <StyledButton
        className=" w-[160px] truncate rounded-lg border border-orange2 bg-white py-2 hover:bg-[#F5F5F5]"
        onClick={() => setIsDrop(!isDrop)}
        label={dropValue}
      />
      <div
        className={`absolute top-0 z-10 w-[160px] translate-y-12 divide-y divide-gray-100 rounded-lg bg-white shadow ${
          isDrop ? 'box' : 'hidden'
        }`}>
        <ul className="py-2 text-sm text-gray-700">
          {dropdownOpt.map((item, i) => (
            <li
              key={i}
              className="block px-4 py-2 hover:bg-[#A0C3FF]/[0.1]"
              onClick={() => {
                handleChangeCategory(item);
                setIsDrop(false);
              }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryDropdown;
