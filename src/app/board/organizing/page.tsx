import Card from '@/components/Card';

const OrganizingPage = () => {
  return (
    <div className="grid grid-cols-2 place-items-center md:grid-cols-5">
      {new Array(10).fill(0).map((v, i) => (
        <Card
          key={i}
          id={1}
          cardType="events"
          thumbnailUrl=""
          title="카드"
          artist="세븐틴"
          location="장소"
          startTime="2020"
          endTime="2021"
          address="지역"
          joinMember={10}
          likeCount={100}
          commentCount={11}
          viewCount={66}
        />
      ))}
    </div>
  );
};

export default OrganizingPage;
