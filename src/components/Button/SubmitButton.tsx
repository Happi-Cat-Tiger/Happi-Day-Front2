import React from 'react';

interface SubmitButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}
const SubmitButton = ({ label, onClick, disabled }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className="prose-btn-M w-[300px] rounded-lg bg-orange2 py-3 text-white md:prose-btn-L hover:bg-orange1 disabled:bg-gray6">
      {label}
    </button>
  );
};

export default SubmitButton;
