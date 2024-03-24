import React from 'react';
import ArtistProfileCard from '@/components/Card/ArtistProfileCard';
import ArtistProfileList from '@/components/List/ArtistProfileList';
import { usegetSubscribedListService } from '@/hooks/queries/artist/artistService';

const SubscribedArtists = () => {
  const { data: subscribedListData, isLoading } = usegetSubscribedListService();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ArtistProfileList>
      {subscribedListData?.subscribedArtists.map((item) => (
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
      {subscribedListData?.subscribedTeams.map((item) => (
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
    </ArtistProfileList>
  );
};

export default SubscribedArtists;

const subscribedMockData = {
  subscribedArtists: [
    { id: 1, name: '백예린', profileUrl: 'https://source.unsplash.com/random/400x400/?singer' },
    { id: 2, name: '카더가든', profileUrl: 'https://source.unsplash.com/random/400x300/?singer' },
    { id: 3, name: '정국', profileUrl: 'https://source.unsplash.com/random/400x500/?singer' },
    { id: 4, name: '창섭', profileUrl: 'https://source.unsplash.com/random/250x250/?singer' },
  ],
  subscribedTeams: [
    { id: 1, name: 'SHINee', logoUrl: 'https://source.unsplash.com/random/600x400/?singer' },
    { id: 2, name: '아이브', logoUrl: 'https://source.unsplash.com/random/200x230/?singer' },
    { id: 3, name: '세븐틴', logoUrl: 'https://source.unsplash.com/random/300x300/?singer' },
    { id: 4, name: 'NCT 127', logoUrl: 'https://source.unsplash.com/random/220x240/?singer' },
    { id: 5, name: '시크릿', logoUrl: 'https://source.unsplash.com/random/200x220/?singer' },
    { id: 6, name: '동방신기', logoUrl: 'https://source.unsplash.com/random/190x220/?singer' },
  ],
};
