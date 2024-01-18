import { atom, RecoilEnv } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const writeInitState = {
  category: '카테고리|',
  articleTitle: '',
  editValue: '',
};
export const writeState = atom({
  key: `writeState`,
  default: writeInitState,
});

interface WritingInfoState {
  hashtag: string;
  thumbnailImage: { imageUrl: string; name: string; size: string; type: string };
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
  poster: { imageUrl: string; name: string; size: string; type: string };
}
export const writingInfoInitState: WritingInfoState = {
  hashtag: '',
  thumbnailImage: { imageUrl: '', name: '', size: '', type: '' },
  eventAddress: { address: '', detailAddress: '' },
  location: '',
  startTime: new Date(),
  endTime: new Date(),
  productOptions: [],
  shippingOptions: [],
  bankAccount: { bank: '', name: '', number: '' },
  poster: { imageUrl: '', name: '', size: '', type: '' },
};

export const writingInfoState = atom<WritingInfoState>({
  key: `writingInfoState`,
  default: writingInfoInitState,
});
