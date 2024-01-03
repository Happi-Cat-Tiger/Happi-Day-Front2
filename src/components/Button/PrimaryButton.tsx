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
      className="px-5 py-3 prose-btn-M text-white bg-orange2 rounded-2xl hover:bg-orange1 disabled:bg-gray6 md:px-6 md:py-4 md:prose-btn-L focus:outline-none">
      {label}
    </button>
  );
};

export default PrimaryButton;
