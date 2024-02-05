'use client'; // Error components must be Client Components

import PrimaryButton from '@/components/Button/PrimaryButton';
import { getErrorMessage } from '@/services/getErrorMessage';
import { useEffect } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // 에러 내보내기 예시
  const errorMsg = getErrorMessage({ tag: 'common', errorCode: 'NO_SUCH_ELEMENT', status: 204 });

  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <AiOutlineWarning className="h-10 w-10 text-red-500" />
        <h1 className="text-2xl font-bold">{errorMsg}</h1>
        <p className="text-gray-500">죄송합니다. 요청을 응답할 수 없습니다. 다시 시도해주세요</p>
        <div className="flex gap-5">
          <PrimaryButton label="다시시도" onClick={() => reset()} />
          <PrimaryButton label="뒤로가기" onClick={() => window.history.back()} />
        </div>
      </div>
    </div>
  );
};

export default Error;
