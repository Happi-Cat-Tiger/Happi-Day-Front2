import HorizontalLinkList from '@/components/List/HorizontalLinkList';
import { BOARD_CATEGORY } from '@/constants/board';
import Image from 'next/image';
import SubBanner from 'public/images/subscriptionBanner.png';
const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-[60px] flex h-full w-full flex-col items-center justify-center md:max-w-[1280px]">
      <div className="flex w-full flex-col gap-[60px] px-2 md:px-0">
        <Image src={SubBanner} alt="구독 배너" className="h-auto w-screen" priority />
        <HorizontalLinkList category={BOARD_CATEGORY} />
        {children}
      </div>
    </div>
  );
};

export default BoardLayout;
