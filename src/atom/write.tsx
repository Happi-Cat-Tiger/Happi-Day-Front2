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

interface ProductOption {
  index: string;
  label: string;
  stock: string;
  price: string;
}

interface ShippingOptions {
  index: string;
  label: string;
  price: string;
}

interface WritingInfoState {
  hashtag: string[];
  thumbnailImage: File | null;
  titleProduct: { label: string; price: string };
  eventAddress: { address: string; detailAddress: string };
  location: string;
  startTime: Date | null;
  endTime: Date | null;
  productOptions: ProductOption[];
  shippingOptions: ShippingOptions[];
  bankAccount: {
    bank: string;
    name: string;
    number: string;
  };
  poster: File | null;
  urlAddress: '';
}

export const writingInfoInitState: WritingInfoState = {
  hashtag: [],
  thumbnailImage: null,
  titleProduct: { label: '', price: '' },
  eventAddress: { address: '', detailAddress: '' },
  location: '',
  startTime: new Date(),
  endTime: new Date(),
  productOptions: [],
  shippingOptions: [],
  bankAccount: { bank: '', name: '', number: '' },
  poster: null,
  urlAddress: '',
};

export const writingInfoState = atom<WritingInfoState>({
  key: `writingInfoState`,
  default: writingInfoInitState,
});
