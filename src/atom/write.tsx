import { atom, RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const writeInitState = {
  category: { id: 0, label: '카테고리|' },
  articleTitle: '',
  editValue: '',
};
export const writeState = atom({
  key: `writeState`,
  default: writeInitState,
});

interface WritingInfoState {
  hashtag: string;
  thumbnailImage: File | null;
  eventAddress: { address: string; detailAddress: string };
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
  poster: File | null;
}
export const writingInfoInitState: WritingInfoState = {
  hashtag: '',
  thumbnailImage: null,
  eventAddress: { address: '', detailAddress: '' },
  location: '',
  startTime: new Date(),
  endTime: new Date(),
  productOptions: [],
  shippingOptions: [],
  bankAccount: { bank: '', name: '', number: '' },
  poster: null,
};

export const writingInfoState = atom<WritingInfoState>({
  key: `writingInfoState`,
  default: writingInfoInitState,
});
