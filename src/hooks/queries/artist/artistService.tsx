import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSubscribedListApi, getTeamInfoApi, getArtistInfoApi } from '@/api/artist/artistApi';
import { SubscribedList, ArtistInfo, TeamInfo } from '@/types/artist';

export const usegetSubscribedListService = () => {
  const query = useQuery<SubscribedList>({
    queryKey: ['artist', 'subscribed'],
    queryFn: () => getSubscribedListApi(),
  });
  return query;
};

export const getTeamInfoService = ({ teamId, type }: { teamId: number; type: string }) => {
  return useQuery<TeamInfo>({
    queryKey: ['artist'],
    queryFn: () => getTeamInfoApi({ teamId }),
  });
};

export const getArtistInfoService = ({ artistId, type }: { artistId: number; type: string }) => {
  return useQuery<ArtistInfo>({
    queryKey: ['artist', 'team'],
    queryFn: () => getArtistInfoApi({ artistId }),
  });
};
