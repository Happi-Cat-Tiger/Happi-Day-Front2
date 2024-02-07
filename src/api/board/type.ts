export interface PostContent {
  id: number;
  category: string;
  title: string;
  nickname: string;
  date: string;
  commentNum: number;
  thubnailUrl: string;
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
