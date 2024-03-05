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

// 카테고리별(굿즈/공구) 글 전체조회
export type SalesCategoriesList = {
  categoryId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  artist: string;
  startTime: Date;
  endTime: Date;
  joinMember: number;
  like: number;
  comment: number;
  view: number;
  joinCount: number;
};

// 판매글 상세보기 (단일 조회)
export type SalesArticle = {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  salesStatus: number;
  products: string;
  artists: string;
  teams: string;
  hashtags: string[];
  likeNum: number;
  imageList: File[] | null;
  deliveries: string[];
  startTime: Date;
  endTime: Date;
  viewCount: string;
};
