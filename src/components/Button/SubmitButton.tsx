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
      className="w-[300px] py-3 prose-btn-M text-white bg-orange2 rounded-lg hover:bg-orange1 disabled:bg-gray6 md:prose-btn-L">
      {label}
    </button>
  );
};

export default SubmitButton;
