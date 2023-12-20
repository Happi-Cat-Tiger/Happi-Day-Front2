import React from 'react';

interface LoginButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const LoginButton = ({ disabled, onClick }: LoginButtonProps) => {
  const label = '로그인';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-[300px] py-3 prose-btn-M text-white bg-orange2 rounded-lg hover:bg-orange1 disabled:bg-gray6 md:prose-btn-L">
      {label}
    </button>
  );
};

export default LoginButton;
