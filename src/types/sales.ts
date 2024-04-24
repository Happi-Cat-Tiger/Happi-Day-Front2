export type SalesPostList = {
  id: number;
  salesCategory: string;
  title: string;
  orderCount: number;
  createdAt: string;
};

export type SalesProductList = {
  id: number;
  username: string;
  orderedProducts: object;
  price: number;
  orderStatus: string;
  orderAt: string;
};

export interface PostContent {
  salesCategory: string;
  id: number;
  thumbnailImage: string;
  name: string;
  artists: string[];
  startTime: Date;
  endTime: Date;
  orderNum: number;
  likeNum: number;
  viewCount: number;
  teams?: [];
  hashtags: [];
  nickname: string;
}

// 카테고리별(굿즈/공구) 글 전체조회
export interface SalesAllResponse {
  content: PostContent[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    umpaged: boolean;
  };
  size: number;
  sort: { empty: boolean; sorted: boolean; unsorted: boolean };
  totalElements: number;
  totalPages: number;
}

interface ProductOption {
  id: number;
  name: string;
  price: number;
  productStatus: string;
  stock: number;
}

interface ShippingOptions {
  id: number;
  name: string;
  price: number;
}

// 판매글 상세보기 (단일 조회)
export interface SalesArticleResponse {
  id: number;
  salesCategory: string;
  user: string;
  name: string;
  description: string;
  salesStatus: string;
  products: ProductOption[];
  artists: string[];
  teams?: string[];
  hashtags: string[];
  likeNum: number;
  imageList: string[];
  thumbnailImage: string[];
  deliveries: ShippingOptions[];
  startTime: Date;
  endTime: Date;
  viewCount: number;
  namePrice: number;
  accountName: string;
  accountUser: string;
  accountNumber: string;
}

export interface SalesWritePayload {
  name: string;
  description: string;
  hashtags: string[];
  products: ProductOption[];
  thumbnailImage: File | null;
  imageList: File[] | null;
  startTime?: Date;
  endTime: Date;
  namePrice: number;
  accountName: string;
  accountUser: string;
  accountNumber: string;
  deliveries: ShippingOptions[];
}

export interface SalesWritePostPayload extends SalesWritePayload {
  categoryId: number;
}

export interface SalesWritePatchPayload extends SalesWritePayload {
  salesId: number | null;
}
