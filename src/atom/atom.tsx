import { atom } from 'recoil';

export const allAgreeState = atom({
  key: 'allAgreeState',
  default: false,
});

export const singleAgreeState = atom({
  key: 'singleAgreeState',
  default: {
    termsAgreed: false,
    personalInfoAgreed: false,
  },
});
