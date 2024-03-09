'use client';
import React, { useMemo, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import ArtistProfileCard from '@/components/Card/ArtistProfileCard';
import { getTeamListApi } from '@/api/artist/artistApi';
import useIntersectingState from '@/hooks/useIntersectingState';

/** 무한스크롤 */
const useInfiniteTeams = () => {
  const query = useInfiniteQuery({
    queryKey: ['team', 'list'],
    queryFn: ({ pageParam }) => getTeamListApi(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.number + 1;
      if (!!nextPage) return nextPage;
      else return undefined;
    },
  });
  return query;
};

const TeamList = () => {
  const { data, fetchNextPage, isFetching } = useInfiniteTeams();
  const [isIntersecting, observerRef] = useIntersectingState<HTMLDivElement>();

  const teamList = useMemo(() => data?.pages.flatMap((page) => page.content), [data?.pages]);

  const isLastPage: boolean = teamList && data?.pages[0].last;

  useEffect(() => {
    if (!isIntersecting || data === undefined) return;

    fetchNextPage();
  }, [isIntersecting]);

  return (
    <>
      <div className="flex flex-wrap">
        {teamList?.map((item) => (
          <ArtistProfileCard
            key={item.id}
            id={item.id}
            type={'team'}
            imageUrl={item.logoUrl}
            imageAlt={item.name}
            size={'m'}
            title={item.name}
          />
        ))}
      </div>
      {!isLastPage && <div aria-hidden ref={observerRef} />}
      <div className="flex h-16 items-center justify-center">
        {isFetching && (
          <div className=" text- h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        )}
      </div>
    </>
  );
};

export default TeamList;

// const teamListMockData = [
//   { id: 1, name: '검정치마', logoUrl: 'https://source.unsplash.com/random/570x570/?singer' },
//   { id: 2, name: '아이들', logoUrl: 'https://source.unsplash.com/random/800x900/?singer' },
//   { id: 3, name: '방탄소년단', logoUrl: 'https://source.unsplash.com/random/1000x1000/?singer' },
//   { id: 4, name: '인피니트', logoUrl: 'https://source.unsplash.com/random/300x400/?singer' },
//   { id: 5, name: '소녀시대', logoUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 6, name: '너드커넥션', logoUrl: 'https://source.unsplash.com/random/250x250/?singer' },
//   { id: 7, name: 'oasis', logoUrl: 'https://source.unsplash.com/random/350x400/?singer' },
//   { id: 8, name: 'Radiohead', logoUrl: 'https://source.unsplash.com/random/400x450/?singer' },
//   { id: 9, name: '검정치마', logoUrl: 'https://source.unsplash.com/random/570x5700/?singer' },
//   { id: 10, name: '아이들', logoUrl: 'https://source.unsplash.com/random/800x900/?singer' },
//   { id: 11, name: '방탄소년단', logoUrl: 'https://source.unsplash.com/random/1000x1000/?singer' },
//   { id: 12, name: '인피니트', logoUrl: 'https://source.unsplash.com/random/300x400/?singer' },
//   { id: 13, name: '소녀시대', logoUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 14, name: '너드커넥션', logoUrl: 'https://source.unsplash.com/random/250x250/?singer' },
//   { id: 15, name: 'oasis', logoUrl: 'https://source.unsplash.com/random/350x400/?singer' },
//   { id: 16, name: 'Radiohead', logoUrl: 'https://source.unsplash.com/random/400x450/?singer' },
//   { id: 17, name: 'Radiohead', logoUrl: 'https://source.unsplash.com/random/400x450/?singer' },
//   { id: 18, name: '검정치마', logoUrl: 'https://source.unsplash.com/random/570x5700/?singer' },
//   { id: 19, name: '아이들', logoUrl: 'https://source.unsplash.com/random/800x900/?singer' },
//   { id: 20, name: '방탄소년단', logoUrl: 'https://source.unsplash.com/random/1000x1000/?singer' },
//   { id: 21, name: '인피니트', logoUrl: 'https://source.unsplash.com/random/300x400/?singer' },
//   { id: 22, name: '소녀시대', logoUrl: 'https://source.unsplash.com/random/200x200/?singer' },
//   { id: 23, name: '너드커넥션', logoUrl: 'https://source.unsplash.com/random/250x250/?singer' },
//   { id: 24, name: 'oasis', logoUrl: 'https://source.unsplash.com/random/350x400/?singer' },
// ];
