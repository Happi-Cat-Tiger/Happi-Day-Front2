import Card from '@/components/Card';

export default function Home() {
  return (
    <div className="my-10 h-auto w-screen">
      <div className="m-auto flex flex-col gap-16 md:max-w-[1024px]">
        <div className="h-[200px] bg-orange-100 md:max-w-[1024px]">구독 배너</div>
        <div className="flex h-[386px] flex-col justify-between gap-[35px]">
          <div className="flex justify-between">
            <h2 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 이벤트</h2>
            <button>More</button>
          </div>
          <div className="flex justify-between">
            <Card
              cardType={'events'}
              cardTitle={'방탄소년단 생일 카페'}
              cardArt={'방탄소년단'}
              cardLocation={'용산 슈퍼스타 떡볶이'}
              cardStart={'2023.12.04'}
              cardEnd={'2023.12.05'}
              cardAddress={'서울시 용산구'}
              cardLike={5}
              cardComments={3}
              cardView={7}
            />
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
          </div>
        </div>
        <div className="flex h-[386px] flex-col justify-between gap-[35px]">
          <div className="flex justify-between">
            <h2 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 굿즈</h2>
            <button>More</button>
          </div>
          <div className="flex justify-between">
            <Card
              cardType={'goods'}
              cardTitle={'정국 포토카드'}
              cardArt={'방탄소년단'}
              cardStart={'2023.12.04'}
              cardEnd={'2023.12.05'}
              joinMember={55}
              cardLike={5}
              cardComments={3}
              cardView={7}
            />
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
          </div>
        </div>
        <div className="flex h-[386px] flex-col justify-between gap-[35px]">
          <div className="flex justify-between">
            <h2 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 공구</h2>
            <button>More</button>
          </div>
          <div className="flex justify-between">
            <Card
              cardType={'sales'}
              cardTitle={'카리나 인형 키링'}
              cardArt={'에스파'}
              cardStart={'2023.12.04'}
              cardEnd={'2023.12.05'}
              joinMember={30}
              cardLike={5}
              cardComments={3}
              cardView={7}
            />
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
          </div>
        </div>
        <div className="flex h-[476px] bg-purple-100">
          <div className="w-[60%] bg-red-500">
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
          <div className="w-[40%] bg-yellow-500">이미지</div>
        </div>
      </div>
    </div>
  );
}
