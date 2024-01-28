'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  data: { label: string; onClick: () => void }[];
}

const MobileModal = ({ isOpen, setIsOpen, data }: ModalProps) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Dialog as="div" className="fixed inset-0 z-10  " onClose={() => {}} open={isOpen}>
      <Dialog.Panel>
        <div className="max-h-[500px] px-10 text-center md:max-h-[700px] ">
          <Dialog.Overlay className="fixed inset-0" />

          <span className="inline-block h-screen  align-middle " aria-hidden="true"></span>

          <div className=" my-8 inline-block w-full max-w-max transform items-center justify-center space-y-4  overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
            {data?.map((item) => (
              <>
                <div
                  className=" text-m max-h-[400px] min-w-[210px] overflow-y-auto text-red-400 md:max-h-[600px] md:min-w-[250px]"
                  onClick={() => {
                    item.onClick();
                    handleCloseModal();
                  }}>
                  {item.label}
                </div>
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
