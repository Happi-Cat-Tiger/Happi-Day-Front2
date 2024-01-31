import { useSearchParams } from 'next/navigation';

export const getSearchParamsAsNumber = (paramName: string): number | null => {
  const params = useSearchParams();
  const paramValue = params.get(paramName);
  return paramValue ? parseInt(paramValue, 10) : null;
};
