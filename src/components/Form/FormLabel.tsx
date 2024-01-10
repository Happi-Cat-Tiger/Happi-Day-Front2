import React from 'react';

interface Props {
  label: string;
}
const FormLabel = ({ label }: Props) => {
  return <div className="prose-h6  text-gray2">{label}</div>;
};

export default FormLabel;
