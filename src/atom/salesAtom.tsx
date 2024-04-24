import { atom } from 'recoil';

// 상세페이지 옵션 선택
export const handleOptionSelectState = atom({
  key: 'handleOptionSelectState',
  default: false,
});

// 상세페이지 유저정보 입력
export const handleInputSelectState = atom({
  key: 'handleInputSelectState',
  default: false,
});

// 굿즈/공구 카테고리
export const categoryIdState = atom({
  key: 'categoryIdState',
  default: 1,
});

// 굿즈/공구 검색
export const salesSearchState = atom({
  key: 'salesSearchState',
  default: '',
});

// 굿즈/공구 검색 필터
export const salesSearchFilter = atom({
  key: 'salesSearchFilter',
  default: 'title',
});

// 굿즈/공구 정렬
export const salesSortList = atom({
  key: 'salesSortList',
  default: 'new',
});
