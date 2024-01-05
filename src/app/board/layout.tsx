'use client';
import HorizontalLinkList from '@/components/List/HorizontalLinkList';
import { BOARD_CATEGORY } from '@/constants/board';
import Image from 'next/image';
import SubBanner from 'public/images/subscriptionBanner.png';
import { usePathname } from 'next/navigation';

const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const secondPath = pathname.split('/')[2];
  const isWrite = secondPath === 'write';
  return (
    <div className="mx-auto my-[40px] flex h-full w-full flex-col items-center justify-center md:my-[60px] md:max-w-[1280px]">
      <div className="flex w-full flex-col gap-[40px] px-2 md:gap-[60px] md:px-0">
        {!isWrite && (
          <>
            <Image src={SubBanner} alt="구독 배너" className="h-auto w-screen" priority />
            <HorizontalLinkList category={BOARD_CATEGORY} />
          </>
        )}

        {children}
      </div>
    </div>
  );
};

export default BoardLayout;
