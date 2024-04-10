import { atom, RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const boardSearchState = atom({
  key: 'boardSearchState',
  default: {
    searchValue: '',
    sort: 'new',
    searchFilter: 'title',
  },
});
