import React, { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';
import { eventsCardState } from '@/atom/eventsAtom';
const HashtagInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { hashtag } = writingInfoValue;

  // 임시로 생성한 이벤트 hashtags값
  const [eventsCardValue, setEventsCardValue] = useRecoilState(eventsCardState);

  const handleChangeHashtag = (e: ChangeEvent<HTMLInputElement>) => {
    setWritingInfoValue({
      ...writingInfoValue,
      hashtag: e.target.value,
    });
    // 임시로 생성한 이벤트 hashtags값
    setEventsCardValue({ ...eventsCardValue, hashtags: e.target.value });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>해시태그 등록</span> <span className="text-red-600">*</span>
      </div>
      <input
        defaultValue={hashtag}
        onChange={(e) => handleChangeHashtag(e)}
        type="text"
        className="text-input"
        placeholder="#해시태그를 입력해주세요 ex) #해시태그"
        spellCheck="false"
      />
    </div>
  );
};

export default HashtagInput;
