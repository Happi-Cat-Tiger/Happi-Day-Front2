import React, { forwardRef, LegacyRef } from 'react';

interface LinkButtonProps {
  label: string;
  href: string;
  className: string;
}
// Link 태그와 같이 쓰이는 custom 버튼

const LinkButton = forwardRef(({ label, href, className }: LinkButtonProps, ref: LegacyRef<HTMLAnchorElement>) => {
  return (
    <a href={href} ref={ref} className={className}>
      {label}
    </a>
  );
});

export default LinkButton;
