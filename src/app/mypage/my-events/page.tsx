'use client';
import React from 'react';
import Card from '@/components/Card';
import { getAllEvents } from '@/hooks/queries/events/eventsService';

const Page = () => {
  const { data } = getAllEvents();
  const apiData = data?.content;
  return (
    <div className="w-full">
      <div className="mx-auto my-10 flex px-5">
        <div className={`grid grid-cols-4 grid-rows-2 justify-items-center gap-[10px] `}>
          {apiData.map((el, idx: number) => (
            <Card
              key={idx}
              id={el.id}
              cardType="events"
              thumbnailUrl={el.thumbnailUrl}
              title={el.title}
              artist={el.artists}
              hashtags={el.hashtags}
              location={el.location}
              startTime={el.startTime}
              endTime={el.endTime}
              address={el.location}
              likeCount={el.likeCount}
              commentCount={el.commentCount}
              viewCount={el.viewCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
