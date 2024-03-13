import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSubscribedListApi, getTeamInfoApi, getArtistInfoApi } from '@/api/artist/artistApi';
import { SubscribedList, ArtistInfo, TeamInfo } from '@/types/artist';

export const usegetSubscribedListService = () => {
  const query = useQuery<SubscribedList>({
    queryKey: ['artist'],
    queryFn: () => getSubscribedListApi(),
  });
  return query;
};

export const getTeamInfoService = ({ teamId, type }: { teamId: number; type: string }) => {
  const query = useQuery<TeamInfo, AxiosError>({
    queryKey: ['artist'],
    queryFn: () => getTeamInfoApi({ teamId }),
  });
  if (type == 'team') {
    return query;
  } else {
    return;
  }
};

export const getArtistInfoService = ({ artistId, type }: { artistId: number; type: string }) => {
  const query = useQuery<ArtistInfo, AxiosError>({
    queryKey: ['artist'],
    queryFn: () => getArtistInfoApi({ artistId }),
  });
  if (type == 'artist') {
    return query;
  } else {
    return;
  }
};
