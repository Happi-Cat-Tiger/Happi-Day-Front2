'use client';

import React, { Component, ReactNode, useState } from 'react';
import { Dialog } from '@headlessui/react';
import PrimaryButton from '../Button/PrimaryButton';

interface ModalProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  onClose?: () => void;
  children: ReactNode;
  title?: string;
  buttonLabel?: string;
  buttonDisabled?: boolean;
}

/*  1. isOpen 값으로 true를 넘기면 모달창이 보입니다

    2. onClose 값으로는 모달창이 닫힐때 동작하는 함수를 props로 전달 합니다. (전달 안하면 모달창 닫히는 걸로 끝)
      ex) 주문완료 모달창의 [주문내역확인] 버튼을 클릭하면 주문내역 페이지로 이동합니다.
      예시 코드)   
          <Modal isOpen={true} buttonText={'주문내역확인'} onClose={() => router.push('/auth/signUp')}>
            <div> 주문이 완료되었습니다</div>
          </Modal>
      물론 함수 api 호출과 동시에 이뤄진다면 각자 함수만들어서 onClose로 전달하시면 됩니다.

    3. router.push() 사용시 모달창이 열리는 페이지에서 아래 코드를 필수로 선언해줍니다.
        import { useRouter, usePathname, useSearchParams } from 'next/navigation';
        const router = useRouter();
        const pathname = usePathname();
        const searchParams = useSearchParams();

    4. 버튼 두개가 필요한 모달창은 필요한 분께서 따로 만들어주세요

    5. submitButton이 필요하면 children으로 같이 넘겨줘야합니다.

*/
const TwoButtonModal = ({ isOpen, setOpen, onClose, children, title, buttonLabel, buttonDisabled }: ModalProps) => {
  // const [open, setOpen] = useState(isOpen);
  const handleCloseModal = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    } else return;
  };

  return (
    <Dialog as="div" className="fixed inset-0 z-10  " onClose={() => {}} open={isOpen}>
      <div className="max-h-[500px] px-10 text-center md:max-h-[700px] ">
        <Dialog.Overlay className="fixed inset-0" />

        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        <div className="my-8 inline-block w-full max-w-max transform items-center justify-center overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all  ">
          <Dialog.Title as="h3" className="mb-5 text-lg font-medium leading-6 text-gray-900">
            {title}
          </Dialog.Title>
          <div className="mb-8 mt-2 ">
            <div className="text-m max-h-[400px] min-w-[210px] overflow-y-auto text-gray-500 md:max-h-[600px] md:min-w-[250px]">
              {children}
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-center gap-3">
            {buttonLabel && (
              <PrimaryButton onClick={() => handleCloseModal()} label={buttonLabel} disabled={buttonDisabled} />
            )}
            <PrimaryButton onClick={() => setOpen(false)} label="취소" />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default TwoButtonModal;
