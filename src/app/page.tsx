import Image from 'next/image';
import logo from '../../public/images/logo.png';

export default function Home() {
  return (
    <div className="my-10 h-auto w-screen">
      <div className="gap-16 m-auto flex flex-col md:max-w-[1280px]">
        <div className="h-[200px] bg-orange-100 md:max-w-[1280px]">구독 배너</div>
        <div className="flex h-[386px] flex-col justify-between">
          <div className="flex justify-between">
            <h2 className="p-2 prose-h4 border-b-[3px] border-orange2">인기 이벤트</h2>
            <button>More</button>
          </div>
          <div className="flex justify-between">
            <div className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-xl">
              <Image src={logo} alt="card" className="flex-1 bg-red-200" />
              <div className="gap-1 flex flex-1 flex-col items-center justify-center border-t-[1px] border-black">
                <span className="prose-h6">방탄소년단 생일 카페</span>
                <span className="prose-body-S text-orange2">방탄소년단</span>
                <span className="prose-body-S">용산 슈퍼스타 떡볶이</span>
                <span className="prose-body-XS">2023.12.04 ~ 2023.12.05</span>
                <div className="flex w-full flex-row justify-between text-gray5">
                  <span className="prose-body-XXS">서울시 용산구</span>
                  <div className="prose-body-XXS flex gap-[8px]">
                    <span>10</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-xl">
              <Image src={logo} alt="card" className="flex-1 bg-red-200" />
              <div className="gap-1 flex flex-1 flex-col items-center justify-center border-t-[1px] border-black">
                <span className="prose-h6">방탄소년단 생일 카페</span>
                <span className="prose-body-S text-orange2">방탄소년단</span>
                <span className="prose-body-S">용산 슈퍼스타 떡볶이</span>
                <span className="prose-body-XS">2023.12.04 ~ 2023.12.05</span>
                <div className="flex w-full flex-row justify-between text-gray5">
                  <span className="prose-body-XXS">서울시 용산구</span>
                  <div className="prose-body-XXS flex gap-[8px]">
                    <span>10</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-xl">
              <Image src={logo} alt="card" className="flex-1 bg-red-200" />
              <div className="gap-1 flex flex-1 flex-col items-center justify-center border-t-[1px] border-black">
                <span className="prose-h6">방탄소년단 생일 카페</span>
                <span className="prose-body-S text-orange2">방탄소년단</span>
                <span className="prose-body-S">용산 슈퍼스타 떡볶이</span>
                <span className="prose-body-XS">2023.12.04 ~ 2023.12.05</span>
                <div className="flex w-full flex-row justify-between text-gray5">
                  <span className="prose-body-XXS">서울시 용산구</span>
                  <div className="prose-body-XXS flex gap-[8px]">
                    <span>10</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-xl">
              <Image src={logo} alt="card" className="flex-1 bg-red-200" />
              <div className="gap-1 flex flex-1 flex-col items-center justify-center border-t-[1px] border-black">
                <span className="prose-h6">방탄소년단 생일 카페</span>
                <span className="prose-body-S text-orange2">방탄소년단</span>
                <span className="prose-body-S">용산 슈퍼스타 떡볶이</span>
                <span className="prose-body-XS">2023.12.04 ~ 2023.12.05</span>
                <div className="flex w-full flex-row justify-between text-gray5">
                  <span className="prose-body-XXS">서울시 용산구</span>
                  <div className="prose-body-XXS flex gap-[8px]">
                    <span>10</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[386px] flex-col justify-between">
          <div className="flex justify-between">
            <h2 className="p-2 prose-h4 border-b-[3px] border-orange2">인기 굿즈</h2>
            <button>More</button>
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
        </div>
        <div className="flex h-[386px] flex-col justify-between">
          <div className="flex justify-between">
            <h2 className="p-2 prose-h4 border-b-[3px] border-orange2">인기 공구</h2>
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
