import { atom } from 'recoil';

export const checkBoxState = atom({
  key: 'checkBoxState',
  default: [false, false],
});
