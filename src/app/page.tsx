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
      <div className="h-auto w-screen">
        <div className="gap-16 m-auto flex flex-col md:max-w-[1280px]">
          <div className="h-[200px] bg-orange-100 md:max-w-[1280px]">Banner</div>
          <div className="flex h-[386px] flex-col justify-between bg-red-50">
            <div className="flex justify-between">
              <h2>인기 이벤트</h2>
              <button>More</button>
            </div>
            <div className="flex justify-between">
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            </div>
          </div>
          <div className="flex h-[386px] flex-col justify-between bg-green-50">
            <div className="flex justify-between">
              <h2>인기 굿즈</h2>
              <button>More</button>
            </div>
            <div className="flex justify-between">
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            </div>
          </div>
          <div className="flex h-[386px] flex-col justify-between bg-blue-50">
            <div className="flex justify-between">
              <h2>인기 공구</h2>
              <button>More</button>
            </div>
            <div className="flex justify-between">
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
              <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            </div>
          </div>
          <div className="flex h-[476px] bg-purple-100">
            <div className="w-[60%] bg-red-50">
              <div>인기 게시글</div>
              <ul>
                <li>게시글</li>
                <li>게시글</li>
                <li>게시글</li>
                <li>게시글</li>
                <li>게시글</li>
                <li>게시글</li>
              </ul>
            </div>
            <div className="w-[40%] bg-yellow-50">이미지</div>
          </div>
        </div>
      </div>
    </div>
  );
}
