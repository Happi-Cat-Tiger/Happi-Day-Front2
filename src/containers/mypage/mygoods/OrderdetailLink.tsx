import React from 'react';
import Link from 'next/link';

export const OrderDetailLink = ({
  orderId,
  salesId,
  label,
  href,
  type,
}: {
  orderId: number;
  salesId: number;
  label: string;
  href: string;
  type: string;
}) => (
  <Link href={`${href}/${salesId}/${orderId}/${type}`} passHref>
    {label}
  </Link>
);
