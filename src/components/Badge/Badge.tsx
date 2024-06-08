import React from 'react';

const Badge = ({ state }: { state: string }) => {
  let style = '';
  if (state === '진행 예정') {
    style = 'bg-light-purple';
  } else if (state === '진행중') {
    style = 'bg-orange1';
  } else if (state === '종료') {
    style = 'bg-gray-700';
  }

  return (
    <div className={`rounded-[5px] p-[3px] px-[10px] ${style}`}>
      <span className="prose-body-XS text-white">{state}</span>
    </div>
  );
};

export default Badge;
