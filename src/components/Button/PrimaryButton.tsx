import React from 'react';

interface PrimaryButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}
const PrimaryButton = ({ label, disabled, onClick }: PrimaryButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="prose-btn-M rounded-2xl bg-orange2 px-5 py-3 text-white md:prose-btn-L hover:bg-orange1 focus:outline-none disabled:bg-gray6 md:px-6 md:py-4">
      {label}
    </button>
  );
};

export default PrimaryButton;
