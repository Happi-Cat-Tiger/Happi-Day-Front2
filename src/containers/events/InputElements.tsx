import React from 'react';

const InputElements = () => {
  return (
    <div className="my-[60px] flex justify-between">
      <div className="flex border-2">
        <div>
          <select>
            <option>최신순</option>
            <option>오래된순</option>
          </select>
        </div>
        <div>
          <div>
            <input type="checkbox" />
            <label>내가 구독한 아티스트만 보기</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>진행중인 이벤트만 보기</label>
          </div>
        </div>
      </div>
      <div>
        <input type="search" placeholder="Search" className="border-2" />
      </div>
    </div>
  );
};

export default InputElements;
