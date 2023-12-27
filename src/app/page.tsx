import Card from '@/components/Card';

export default function Home() {
  return (
    <div>
      <Card
        id={1}
        cardType="events"
        thumbnailUrl=""
        title="카드 제목"
        artist="아티스트"
        location="위치"
        startTime="시작일"
        endTime="종료일"
        address="주소"
        joinMember={1}
        likeCount={1}
        commentCount={1}
        viewCount={1}
      />
    </div>
  );
}
