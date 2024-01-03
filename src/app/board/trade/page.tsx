import Card from '@/components/Card';

const TradePage = () => {
  return (
    <div>
      <Card
        id={1}
        cardType="events"
        thumbnailUrl=""
        title="카드"
        artist="세븐틴"
        location="대구"
        startTime="2020"
        endTime="2021"
        address="지약"
        joinMember={10}
        likeCount={100}
        commentCount={11}
        viewCount={66}
      />
    </div>
  );
};

export default TradePage;
