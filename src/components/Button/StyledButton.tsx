import React from 'react';
import { IconType } from 'react-icons';

interface StyledButtonProps {
  icon?: React.ReactNode;
  label: string;
  disabled?: boolean;
  onClick: () => void;
  className: string;
}
const StyledButton = ({ icon, label, disabled, onClick, className }: StyledButtonProps) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={className}>
      <div className="flex flex-row justify-center gap-1">
        {icon && icon}
        {label}
      </div>
    </button>
  );
};

export default StyledButton;
