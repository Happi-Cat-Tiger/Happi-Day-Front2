export const REACT_QUERY_FETCH_OPTIONS = {
  suspense: true,
  useErrorBoundary: true,
  retry: false,
  // staleTime: 0,
  // cacheTime: 0,
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000,
  enabled: true,
};

export const REACT_QUERY_MUTATE_OPTIONS = {
  useErrorBoundary: true,
  retry: false,
};
