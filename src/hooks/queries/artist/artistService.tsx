import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getSubscribedListApi, getTeamInfoApi, getArtistInfoApi } from '@/api/artist/artistApi';
import { SubscribedList, ArtistInfo, TeamInfo } from '@/types/artist';

export const getSubscribedListService = () => {
  return useQuery<SubscribedList, AxiosError>({
    queryKey: ['artist'],
    queryFn: () => getSubscribedListApi(),
  });
};

export const getTeamInfoService = ({ teamId, type }: { teamId: number; type: string }) => {
  const { data } = useQuery<TeamInfo, AxiosError>({
    queryKey: ['artist'],
    queryFn: () => getTeamInfoApi({ teamId }),
  });
  if (type == 'team') {
    return data;
  } else {
    return;
  }
};

export const getArtistInfoService = ({ artistId, type }: { artistId: number; type: string }) => {
  const { data } = useQuery<ArtistInfo, AxiosError>({
    queryKey: ['artist'],
    queryFn: () => getArtistInfoApi({ artistId }),
  });
  if (type == 'artist') {
    return data;
  } else {
    return;
  }
};
