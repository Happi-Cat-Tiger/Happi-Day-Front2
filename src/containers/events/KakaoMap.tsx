import React from 'react';
import Script from 'next/script';
import { StaticMap } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_KEY}&autoload=false`;

interface Location {
  lat: number;
  lng: number;
}
const center: Location = { lat: 33.450701, lng: 126.570667 };

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <StaticMap
        center={center}
        marker={{ position: center }}
        style={{ width: '200px', height: '200px' }}
        level={3}></StaticMap>
    </>
  );
};

export default KakaoMap;
