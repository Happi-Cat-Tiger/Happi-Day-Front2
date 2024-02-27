import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';
import { v4 as uuidv4 } from 'uuid';

interface Hashtag {
  index: string;
  label: string;
}

const HashtagInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);
  const [hashtagValue, setHashtagValue] = useState<string>('');
  const [hashtagList, setHashtagList] = useState<Hashtag[]>([]);

  useEffect(() => {
    setWritingInfoValue({
      ...writingInfoValue,
      hashtag: hashtagList.map((hashtag) => hashtag.label),
    });
  }, [hashtagList, setWritingInfoValue]);

  const handleAddHashtag = () => {
    if (hashtagList.length < 3 && hashtagValue.length <= 7) {
      const newHashtag: Hashtag = { index: uuidv4(), label: hashtagValue };
      setHashtagValue('');
      setHashtagList([...hashtagList, newHashtag]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>해시태그 등록</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          value={hashtagValue}
          onChange={(e) => setHashtagValue(e.target.value)}
          type="text"
          className="text-input"
          placeholder="해시태그를 입력해주세요 (7자 이하, 3개까지 등록가능)"
        />
        <button type="button" onClick={handleAddHashtag} disabled={!hashtagValue}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white md:h-10 md:w-10 md:text-xl">
            +
          </div>
        </button>
      </div>
      <ul className="prose-body-XS flex flex-col gap-2 md:prose-body-S">
        {hashtagList.map((hashtagItem) => (
          <li key={hashtagItem.index} className="flex rounded-lg bg-[#F2F2F2] p-2">
            <p className="grow">#{hashtagItem.label}</p>
            <button
              type="button"
              onClick={() => {
                setHashtagList([...hashtagList.filter((hashtag) => hashtag.index !== hashtagItem.index)]);
              }}>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-700 font-bold text-white">
                -
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HashtagInput;
