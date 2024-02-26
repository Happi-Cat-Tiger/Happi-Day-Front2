import React, { useState } from 'react';

interface CategoryDropdownProps {
  dropdownOpt: { id: number; label: string }[];
  dropValue: { id: number; label: string };
  handleChangeCategory: (value: { id: number; label: string }) => void;
}

const CategoryDropdown = ({ dropdownOpt, dropValue, handleChangeCategory }: CategoryDropdownProps) => {
  const [isDrop, setIsDrop] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className="prose-body-S relative w-[160px] truncate rounded-lg border border-orange2 bg-white px-2 py-2 text-left hover:bg-[#F5F5F5]"
        onClick={() => setIsDrop(!isDrop)}>
        {dropValue.label}
        <div className="absolute inset-y-2 right-1">▼</div>
      </button>
      <div
        className={`absolute top-0 z-10 w-[160px] translate-y-12 divide-y divide-gray-100 rounded-lg bg-white shadow ${
          isDrop ? 'box' : 'hidden'
        }`}>
        <ul className="py-2 text-sm text-gray-700">
          {dropdownOpt.map((item: { id: number; label: string }) => (
            <li
              key={item.id}
              className="block px-4 py-2 hover:bg-[#A0C3FF]/[0.1]"
              onClick={() => {
                handleChangeCategory(item);
                setIsDrop(false);
              }}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryDropdown;
