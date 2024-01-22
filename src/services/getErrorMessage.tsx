type ErrorInfo = {
  tag: 'common' | 's3' | 'artist' | 'team' | 'event' | 'sales' | 'chat' | 'article' | 'user';
  errorCode: string;
  status?: number; // 예외적인 상황에 따라 status를 받을 수 있다면 추가
};

export const getErrorMessage = ({ tag, errorCode, status }: ErrorInfo) => {
  switch (tag) {
    case 'common':
      switch (errorCode) {
        case 'NO_SUCH_ELEMENT':
          return '해당 컨텐츠를 찾을 수 없습니다.';
        case 'MOVED_PERMANENT':
          return 'URL가 변경되었습니다.';
        case 'BAD_REQUEST':
          return '잘못된 요청입니다.';
        case 'FORBIDDEN':
          return '접근 권한이 없습니다.';
        case 'NOT_FOUND':
          return '해당 컨텐츠가 존재하지 않습니다.';
        case 'METHOD_NOT_ALLOWED':
          return '잘못된 접근 방식입니다.';
        case 'REQUEST_TIMEOUT':
          return '접근 요청시간이 만료되었습니다.';
        case 'INTERNAL_SERVER_ERROR':
          return '내부적인 서버 에러가 발생했습니다.';
        case 'NOT_IMPLEMENTED':
          return '구현되지 않은 기능입니다.';
        default:
          return '오류가 발생했습니다.';
      }
    case 's3':
      switch (errorCode) {
        case 'FILE_DELETE_BAD_REQUEST':
          return 'S3 이미지 삭제에 실패하였습니다.';
        case 'FILE_UPLOAD_BAD_REQUEST':
          return 'S3 이미지 업로드에 실패하였습니다.';
        case 'FILE_MISSING_EXTENSION':
          return '파일에 확장자가 없습니다.';
        case 'FILE_INVALID_EXTENSION':
          return '잘못된 파일 확장자입니다. 이미지만 허용됩니다.';
        default:
          return '오류가 발생했습니다.';
      }
    case 'artist':
      switch (errorCode) {
        case 'ARTIST_NOT_FOUND':
          return '해당 아티스트를 찾을 수 없습니다.';
        default:
          return '오류가 발생했습니다.';
      }
    case 'team':
      switch (errorCode) {
        case 'TEAM_NOT_FOUND':
          return '해당 팀을 찾을 수 없습니다.';
        default:
          return '오류가 발생했습니다.';
      }
    case 'event':
      switch (errorCode) {
        case 'EVENT_NOT_FOUND':
          return '해당 이벤트를 찾을 수 없습니다.';
        case 'EVENT_ALREADY_DELETED':
          return '삭제된 이벤트입니다.';
        case 'EVENT_COMMENT_NOT_FOUND':
          return '해당 이벤트 댓글을 찾을 수 없습니다.';
        case 'EVENT_COMMENT_ALREADY_DELETED':
          return '삭제된 댓글입니다.';
        case 'EVENT_NOT_ONGOING':
          return '종료된 이벤트입니다.';
        case 'EVENT_NOT_JOINED':
          return '참여하지 않은 이벤트입니다.';
        case 'REVIEW_ALREADY_SUBMITTED':
          return '이미 리뷰를 작성한 이벤트입니다.';
        default:
          return '오류가 발생했습니다.';
      }
    case 'sales':
      switch (errorCode) {
        case 'SALES_NOT_FOUND':
          return '존재하지 않는 판매글입니다.';
        case 'PRODUCT_NOT_FOUND':
          return '존재하지 않는 옵션입니다.';
        case 'ORDER_NOT_FOUND':
          return '존재하지 않는 주문입니다.';
        case 'ORDER_FAILED':
          return '취소할 수 없는 주문입니다.';
        case 'ORDER_CANT_DELETE':
          return '삭제할 수 없는 주문입니다.';
        case 'DELIVERY_NOT_FOUND':
          return '존재하지 않는 배달방법입니다.';
        case 'OUT_OF_STOCK':
          return '해당 상품은 품절입니다.';
        case 'START_TIME_ERROR':
          return '현재보다 이전 시간은 선택할 수 없습니다.';
        case 'END_TIME_ERROR':
          return '시작시간보다 이전 시간은 선택할 수 없습니다.';
        default:
          return '오류가 발생했습니다.';
      }
    case 'chat':
      switch (errorCode) {
        case 'CHATROOM_NOT_FOUND':
          return '존재하지 않는 채팅방입니다.';
        case 'CHATROOM_NOT_CREATED':
          return '채팅방을 만들 수 없습니다.';
        default:
          return '오류가 발생했습니다.';
      }
    case 'article':
      switch (errorCode) {
        case 'ARTICLE_NOT_FOUND':
          return '존재하지 않는 글입니다.';
        case 'CATEGORY_NOT_FOUND':
          return '카테고리를 찾을 수 없습니다.';
        case 'COMMENT_NOT_FOUND':
          return '존재하지 않는 댓글입니다.';
        default:
          return '오류가 발생했습니다.';
      }
    case 'user':
      switch (errorCode) {
        case 'USER_NOT_FOUND':
          return '존재하지 않는 유저입니다.';
        case 'USER_CONFLICT':
          return '이미 존재하는 유저입니다.';
        case 'PASSWORD_NOT_MATCHED':
          return '비밀번호가 일치하지 않습니다.';
        case 'MAIL_SEND_ERROR':
          return '이메일을 전송할 수 없습니다.';
        case 'MAIL_FORMAT_ERROR':
          return '이메일 주소 형식이 유효하지 않습니다.';
        case 'MAIL_ENCODING_ERROR':
          return '이메일 인코딩 중 오류가 발생했습니다.';
        case 'CODE_TIME_ERROR':
          return '코드의 인증시간이 다 되었습니다.';
        case 'CODE_NOT_MATCHED':
          return '코드가 일치하지 않습니다.';
        case 'NICKNAME_CONFLICT':
          return '중복된 닉네임입니다.';
        case 'PHONE_CONFLICT':
          return '중복된 전화번호입니다.';
        default:
          return '오류가 발생했습니다.';
      }
  }
};
