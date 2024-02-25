import React from 'react';

interface Props {
  label: string;
}
const Title = ({ label }: Props) => {
  return (
    <div className="w-full bg-orange2">
      <div className="prose mx-auto flex max-w-[767px] justify-items-start px-5 md:max-w-[1280px]">
        <h3 className="text-white">{label}</h3>
      </div>
    </div>
  );
};

export default Title;
