'use client';
import StyledButton from '@/components/Button/StyledButton';

export default function Home() {
  return (
    <div className="my-10 h-auto">
      <div className="m-auto flex flex-col gap-16 md:max-w-[1024px]">
        <div className="h-[200px] bg-orange-100 md:max-w-[1024px]">구독 배너</div>
        <div className="flex h-[386px] flex-col justify-between gap-[35px]">
          <div className="flex items-center justify-between">
            <h2 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 이벤트</h2>
            <StyledButton
              label="More+"
              onClick={() => null}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="flex justify-between">
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
          </div>
        </div>
        <div className="flex h-[386px] flex-col justify-between gap-[35px]">
          <div className="flex items-center justify-between">
            <h2 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 굿즈</h2>
            <StyledButton
              label="More+"
              onClick={() => null}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="flex justify-between">
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
          </div>
        </div>
        <div className="flex h-[386px] flex-col justify-between gap-[35px]">
          <div className="flex items-center justify-between">
            <h2 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 공구</h2>
            <StyledButton
              label="More+"
              onClick={() => null}
              className="prose-subtitle-M rounded-[16px] bg-orange2 px-[13px] py-[4px] text-white"
            />
          </div>
          <div className="flex justify-between">
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
            <div className="h-[300px] w-[224px] border-2 border-black">카드</div>
          </div>
        </div>
        <div className="flex h-[476px] gap-[24px]">
          <div className="flex w-[590px] flex-col items-start gap-[35px]">
            <h2 className="prose-h3 border-b-[3px] border-orange2 p-[8px]">인기 게시글</h2>
            <ul className="flex h-full w-full flex-col justify-between">
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
              <li className="flex h-[65px] items-center justify-between border-b-[1px] px-[16px]">
                <div className="flex w-full flex-row gap-[8px]">
                  <button className="">자유</button>
                  <div className="flex-1 ">콘서트 같이 가실분(1)</div>
                </div>
                <div className="prose-body-XXS flex w-[194px] gap-[8px] ">
                  <span>💬닉네임</span>
                  <span>💬12.01</span>
                  <span>💬50</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-[410px] border-[2px]">이미지</div>
        </div>
      </div>
    </div>
  );
}
