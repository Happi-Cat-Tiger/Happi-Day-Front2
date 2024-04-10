'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { StaticMap } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_KEY}&autoload=false&libraries=services`;

const KakaoMap = ({ mapAddress }: { mapAddress: string }) => {
  interface Location {
    lat: number;
    lng: number;
  }

  const [coords, setCoords] = useState<Location>({
    lat: 0,
    lng: 0,
  });

  const center: Location = coords;
  const [kakaoLoaded, setKakaoLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = KAKAO_SDK_URL;
    script.async = true;
    script.type = 'text/javascript';
    script.onload = () => {
      setKakaoLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (kakaoLoaded) {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(mapAddress, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const { x, y } = result[0].road_address || result[0].address;
            setCoords({ lat: Number(y), lng: Number(x) });
          } else {
            console.error('Failed to convert address to coordinates:', status);
          }
        });
      });
    }
  }, [kakaoLoaded, mapAddress]);

  return (
    <>
      {kakaoLoaded && (
        <StaticMap
          center={center}
          marker={{ position: center }}
          style={{ width: '200px', height: '200px' }}
          level={3}
        />
      )}
    </>
  );
};

export default KakaoMap;
