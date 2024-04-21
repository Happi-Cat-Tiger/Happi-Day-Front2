import { writingInfoState } from '@/atom/write';
import React from 'react';
import { useRecoilState } from 'recoil';

const BankAccountInput = () => {
  const [writingInfoValue, setWritingInfoValue] = useRecoilState(writingInfoState);

  const { accountName, accountUser, accountNumber } = writingInfoValue;

  return (
    <div className="flex flex-col gap-2">
      <div className="prose-h6 md:prose-h5">
        <span>계좌 등록</span> <span className="text-red-600">*</span>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          defaultValue={accountName}
          onChange={(e) =>
            setWritingInfoValue({
              ...writingInfoValue,
              accountName: e.target.value,
            })
          }
          className="text-input w-[300px]"
          placeholder="은행 이름"
        />
        <input
          type="text"
          defaultValue={accountUser}
          onChange={(e) =>
            setWritingInfoValue({
              ...writingInfoValue,
              accountUser: e.target.value,
            })
          }
          className="text-input w-[100px]"
          placeholder="예금주명"
        />
      </div>
      <input
        type="number"
        defaultValue={accountNumber ?? undefined}
        onChange={(e) =>
          setWritingInfoValue({
            ...writingInfoValue,
            accountNumber: e.target.value,
          })
        }
        className="text-input"
        placeholder={`계좌번호 ("-" 제외하고 숫자만 입력)`}
      />
    </div>
  );
};

export default BankAccountInput;
