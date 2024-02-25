import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Label = ({ children }: Props) => {
  return <div className="prose-h6  text-gray2">{children}</div>;
};

export default Label;
