import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { writingInfoState } from '@/atom/write';

const HashtagInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);
  const [hashtagValue, setHashtagValue] = useState('');
  const [hashtagList, setHashtagList] = useState<string[]>([]);

  const handleAddHashtag = () => {
    if (hashtagList.length < 3 && hashtagValue.trim().length <= 7) {
      const newHashtag = hashtagValue.trim(); // 입력값의 앞뒤 공백을 제거합니다.
      if (!hashtagList.includes(newHashtag)) {
        // 중복 여부를 확인합니다.
        setHashtagValue('');
        setHashtagList([...hashtagList, newHashtag]);
      } else {
        alert('해당 해시태그는 이미 등록되었습니다.');
      }
    }
  };

  useEffect(() => {
    setWritingInfoValue({
      ...writingInfoValue,
      hashtag: hashtagList,
    });
  }, [hashtagList, setWritingInfoValue]);

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>해시태그 등록</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          value={hashtagValue}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue.trim().length <= 7) {
              setHashtagValue(inputValue);
            }
          }}
          type="text"
          className="text-input"
          placeholder="아티스트 또는 팀이름은 필수 해시태그입니다. (7자 이하 5개까지 등록 가능)"
        />

        <button type="button" onClick={handleAddHashtag} disabled={!hashtagValue}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white md:h-10 md:w-10 md:text-xl">
            +
          </div>
        </button>
      </div>
      <ul className="prose-body-XS flex gap-2 md:prose-body-S">
        {hashtagList.map((hashtagItem, i) => (
          <li key={i} className="flex rounded-lg bg-[#F2F2F2] p-2">
            <p className="grow">#{hashtagItem}</p>
            <button
              type="button"
              onClick={() => {
                setHashtagList([...hashtagList.filter((hashtag) => hashtag !== hashtagItem)]);
              }}>
              <div className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-700 font-bold text-white">
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
