'use client';
import Modal from '@/components/Modal/Modal';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import React from 'react';
export default function MypageLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <html lang="en">
      <body>
        <div className="prose-h1 underline">
          <Modal isOpen={true} buttonText={'확인'} onClose={() => router.push('/auth/signUp')} title={'주문내역'}>
            <div>
              <p>주문이 완료되었습니다</p>
            </div>
          </Modal>
        </div>
      </body>
    </html>
  );
}
