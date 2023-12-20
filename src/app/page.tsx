export default function Home() {
  return (
    <div className="h-auto w-screen">
      <div className="m-auto flex flex-col gap-16 md:max-w-[1280px]">
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
  );
}
