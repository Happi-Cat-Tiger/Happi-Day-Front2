import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const FormErrorMessage = ({ children }: Props) => {
  return <p className="prose-body-XS text-red-600">{children}</p>;
};

export default FormErrorMessage;
