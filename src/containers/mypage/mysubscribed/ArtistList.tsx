'use client';

import React, { useMemo, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import ArtistProfileCard from '@/components/Card/ArtistProfileCard';
import { ArtistListType } from '@/types/artist';
import { getArtistListApi } from '@/api/artist/artistApi';
import useIntersectingState from '@/hooks/useIntersectingState';

/** 무한스크롤 */
const useInfiniteArtists = () => {
  return useInfiniteQuery<ArtistListType>({
    queryKey: ['artist'],
    queryFn: ({ pageParam }) => getArtistListApi(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.number + 1;
      if (!!nextPage) return nextPage;
      else return undefined;
    },
  });
};
const ArtistList = () => {
  const [isIntersecting, observerRef] = useIntersectingState<HTMLDivElement>();
  const { data, fetchNextPage, isFetching } = useInfiniteArtists();
  const artistList = data && useMemo(() => data?.pages.flatMap((artistList) => artistList.content), [data.pages]);

  useEffect(() => {
    if (!isIntersecting || data === undefined) return;

    fetchNextPage();
  }, [isIntersecting]);

  return (
    <>
      <div className="flex flex-wrap">
        {artistList?.map((item) => (
          <ArtistProfileCard
            key={item.id}
            id={item.id}
            type={'artist'}
            imageUrl={item.profileUrl}
            imageAlt={item.name}
            size={'m'}
            title={item.name}
          />
        ))}
      </div>
      <div aria-hidden ref={observerRef} />
      <div className="flex h-16 items-center justify-center">
        {isFetching && (
          <div className=" h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        )}
      </div>
    </>
  );
};

export default ArtistList;

// const artistListMockData = [
//   { id: 1, name: '유리', profileUrl: 'https://source.unsplash.com/random/300x300/?singer' },
//   { id: 2, name: '태연', profileUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 3, name: '뷔(V)', profileUrl: 'https://source.unsplash.com/random/500x500/?singer' },
//   { id: 4, name: '지민', profileUrl: 'https://source.unsplash.com/random/150x150/?singer' },
//   { id: 5, name: '유리', profileUrl: 'https://source.unsplash.com/random/300x300/?singer' },
//   { id: 6, name: '태연', profileUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 7, name: '뷔(V)', profileUrl: 'https://source.unsplash.com/random/500x500/?singer' },
//   { id: 8, name: '지민', profileUrl: 'https://source.unsplash.com/random/150x150/?singer' },
//   { id: 9, name: '유리', profileUrl: 'https://source.unsplash.com/random/300x300/?singer' },
//   { id: 10, name: '태연', profileUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 11, name: '뷔(V)', profileUrl: 'https://source.unsplash.com/random/500x500/?singer' },
//   { id: 12, name: '지민', profileUrl: 'https://source.unsplash.com/random/150x150/?singer' },
//   { id: 13, name: '유리', profileUrl: 'https://source.unsplash.com/random/300x300/?singer' },
//   { id: 14, name: '태연', profileUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 15, name: '뷔(V)', profileUrl: 'https://source.unsplash.com/random/500x500/?singer' },
//   { id: 16, name: '지민', profileUrl: 'https://source.unsplash.com/random/150x150/?singer' },
//   { id: 17, name: '유리', profileUrl: 'https://source.unsplash.com/random/300x300/?singer' },
//   { id: 18, name: '태연', profileUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 19, name: '뷔(V)', profileUrl: 'https://source.unsplash.com/random/500x500/?singer' },
//   { id: 20, name: '지민', profileUrl: 'https://source.unsplash.com/random/150x150/?singer' },
//   { id: 21, name: '유리', profileUrl: 'https://source.unsplash.com/random/300x300/?singer' },
//   { id: 22, name: '태연', profileUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 23, name: '뷔(V)', profileUrl: 'https://source.unsplash.com/random/500x500/?singer' },
//   { id: 24, name: '지민', profileUrl: 'https://source.unsplash.com/random/150x150/?singer' },
// ];
