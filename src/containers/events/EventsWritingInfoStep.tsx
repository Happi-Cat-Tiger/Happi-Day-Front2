import AddressInput from '@/components/WriteForm/AddressInput';
import DurationInput from '@/components/WriteForm/DurationInput';
import HashtagInput from '@/components/WriteForm/HashtagInput';
import LocationInput from '@/components/WriteForm/LocationInput';
import PosterUploader from '@/components/WriteForm/PosterUploader';
import ThumbnailUploader from '@/components/WriteForm/ThumbnailUploader';
import React from 'react';

const EventsWritingInfoStep = () => {
  return (
    <div className="flex h-[660px] w-full flex-col gap-4 overflow-auto border border-gray-200 p-2 md:p-4">
      <HashtagInput />
      <LocationInput />
      <DurationInput />
      <ThumbnailUploader />
      <PosterUploader />
      <AddressInput />
    </div>
  );
};

export default EventsWritingInfoStep;
