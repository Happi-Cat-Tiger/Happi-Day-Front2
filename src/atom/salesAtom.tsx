import { atom } from 'recoil';

export const salesSearchState = atom({
  key: 'salesSearchState',
  default: '',
});

export const salesSortState = atom({
  key: 'salesSortState',
  default: 'new',
});

export const handleOptionSelectState = atom({
  key: 'handleOptionSelectState',
  default: false,
});

export const handleInputSelectState = atom({
  key: 'handleInputSelectState',
  default: false,
});
