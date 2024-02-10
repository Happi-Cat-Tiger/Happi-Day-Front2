'use client';

import React from 'react';
import { Dialog } from '@headlessui/react';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  list: { id: number; label: string; onClick: () => void }[];
}

const MobileModal = ({ isOpen, setIsOpen, list }: ModalProps) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Dialog as="div" className="fixed inset-0 z-10  " onClose={() => {}} open={isOpen}>
      <Dialog.Panel>
        <div className="max-h-[500px] px-10 text-center md:max-h-[700px] ">
          <Dialog.Overlay className="fixed inset-0" />

          <span className="inline-block h-screen  align-middle " aria-hidden="true"></span>

          <div className="  inline-block w-full max-w-max transform cursor-pointer items-center justify-center  space-y-4 overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
            {list?.map((item) => (
              <>
                <div
                  key={item.id}
                  className=" text-m max-h-[400px] min-w-[210px] overflow-y-auto text-red-400 md:max-h-[600px] md:min-w-[250px]"
                  onClick={() => {
                    item.onClick();
                    handleCloseModal();
                  }}>
                  {item.label}
                </div>
                <div className="my-8 h-1 w-full border-t"></div>
              </>
            ))}

            <div className="text-m  text-gray1">
              <div
                onClick={() => {
                  handleCloseModal();
                }}>
                닫기
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileModal;
