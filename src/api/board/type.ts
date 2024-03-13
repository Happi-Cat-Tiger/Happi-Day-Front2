export interface PostContent {
  id: number;
  category: string;
  title: string;
  nickname: string;
  date: string;
  commentNum: number;
  thumbnailUrl: string;
  viewCount: number;
}

export interface BoardAllResponse {
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

export interface BoardArticleResponse {
  artists: any[];
  comments: any[];
  content: string;
  hashtags: string[];
  imageUrl: string[];
  likeUsersNum: number;
  teams: any[];
  title: string;
  updatedAt: string;
  user: string;
  viewCount: number;
}

export interface BoardWritePayload {
  title: string;
  content: string;
  hashtag: string[];
  address: string;
  detailAddress: string;
  thumbnailImage: File | null;
  imageFile: File[] | null;
}

export interface BoardWritePostPayload extends BoardWritePayload {
  categoryId: number;
}
export interface BoardWritePatchPayload extends BoardWritePayload {
  articleId: number | null;
}
