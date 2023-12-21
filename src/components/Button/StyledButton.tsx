import React from 'react';

interface StyledButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  className: string;
}
const StyledButton = ({ label, disabled, onClick, className }: StyledButtonProps) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={className}>
      {label}
    </button>
  );
};

export default StyledButton;
