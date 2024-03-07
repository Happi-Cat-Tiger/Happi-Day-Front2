'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { hdQueryClient } from '@/shared/hdQueryClient';

interface ReactQueryWrapperProps {
  children: React.ReactNode;
}

export default function ReactQueryWrapper({ children }: ReactQueryWrapperProps) {
  const [queryClient] = useState(() => hdQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
