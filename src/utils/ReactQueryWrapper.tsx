'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

interface ReactQueryWrapperProps {
  children: React.ReactNode;
}

export default function ReactQueryWrapper({ children }: ReactQueryWrapperProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
