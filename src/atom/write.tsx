import { atom, RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const writeState = atom({
  key: `writeState`,
  default: { category: '카테고리|▼', articleTitle: '', editValue: '' },
});

interface WritingInfoState {
  hashtag: string;
  thumbnailImage: {};
  eventAddress: string;
  location: string;
  startTime: Date | null;
  endTime: Date | null;
  productOptions: {}[];
  shippingOptions: {}[];
  bankAccount: {
    bank: string;
    name: string;
    number: string;
  };
  poster: {};
}
export const writingInfoState = atom<WritingInfoState>({
  key: `writingInfoState`,
  default: {
    hashtag: '',
    thumbnailImage: {},
    eventAddress: '',
    location: '',
    startTime: new Date(),
    endTime: new Date(),
    productOptions: [],
    shippingOptions: [],
    bankAccount: { bank: '', name: '', number: '' },
    poster: {},
  },
});
