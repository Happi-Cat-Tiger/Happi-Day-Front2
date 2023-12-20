import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

interface CardProps {
  cardType: 'events' | 'goods' | 'sales';
  cardTitle: string;
  cardArt: string;
  cardLocation?: string;
  cardStart: string;
  cardEnd: string;
  cardAddress?: string;
  joinMember?: number;
  cardLike: number;
  cardComments: number;
  cardView: number;
}

const Card = ({
  cardType,
  cardTitle,
  cardArt,
  cardLocation,
  cardStart,
  cardEnd,
  cardAddress,
  joinMember,
  cardLike,
  cardComments,
  cardView,
}: CardProps) => {
  return (
    <div className="flex h-[300px] w-[224px] cursor-pointer flex-col gap-[12px] p-[12px] shadow-xl">
      <Image src={logo} alt="card" className="flex-1" />
      <div className="flex flex-1 flex-col items-center justify-center gap-1 border-t-[1px] border-black">
        <span className="prose-h6">{cardTitle}</span>
        <span className="prose-body-S text-orange2">{cardArt}</span>
        {cardType === 'events' && <span className="prose-body-S">{cardLocation}</span>}
        <span className="prose-body-XS">{`${cardStart} ~ ${cardEnd}`}</span>
        <div className="flex w-full flex-row justify-between text-gray5">
          {cardType === 'events' ? (
            <span className="prose-body-XXS">{cardAddress}</span>
          ) : (
            <span className="prose-body-XXS">참여중인 인원 {joinMember}명</span>
          )}
          <div className="prose-body-XXS flex gap-[8px]">
            <span>♥️{cardLike}</span>
            <span>💬{cardComments}</span>
            <span>👁️{cardView}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
