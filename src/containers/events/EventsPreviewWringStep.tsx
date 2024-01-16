import React from 'react';
import { useRecoilState } from 'recoil';
import { eventsState } from '@/atom/eventsWrite';

const EventsPreviewWringStep = () => {
  const [eventsWriteValue] = useRecoilState(eventsState);
  return (
    <div className="flex h-[500px] w-full flex-col gap-4 overflow-auto border p-2 text-center shadow-inner md:p-4">
      <p className=" prose-h4 md:prose-h3">{eventsWriteValue.eventsTitle}</p>
      <div className="prose-body-XS flex items-center justify-center gap-2 md:prose-body-S">step2 데이터</div>
      <hr />
      <p className=" prose-body-XS text-left text-gray4 md:prose-body-S"></p>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: eventsWriteValue.eventsEditValue }}
        className="prose-body-M md:prose-body-L"></div>
    </div>
  );
};

export default EventsPreviewWringStep;
