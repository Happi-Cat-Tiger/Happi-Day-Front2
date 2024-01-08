import { atom, RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const writeState = atom({
  key: `writeState`,
  default: { category: '카테고리|▼', articleTitle: '', editValue: '' },
});

export const writingInfoState = atom({
  key: `writingInfoState`,
  default: { hashtag: '' },
});
