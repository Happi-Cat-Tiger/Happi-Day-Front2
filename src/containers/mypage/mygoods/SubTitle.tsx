import React from 'react';

const SubTitle = ({ label }: { label: string | number }) => {
  return <div className=" prose-subtitle-L border-b-[2px] border-gray2 pb-2 font-semibold">{label}</div>;
};

export default SubTitle;
