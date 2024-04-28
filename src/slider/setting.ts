export const settings = {
  dots: true, // 슬라이더 하단 점
  infinite: false, // 마지막 콘텐츠와 처음 콘텐츠 연결
  speed: 500, // 콘텐츠 전환 속도. 작아질수록 속도가 빠르다
  slidesToShow: 5, // 보여지는 컨텐츠 개수
  slideToScroll: 1, // 한번에 넘어가는 콘텐츠의 개수
  arrows: true, // 좌우 화살표
  draggable: false, // 슬라이더 드래그 활성화
  fade: false, // fade 효과
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 910,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
