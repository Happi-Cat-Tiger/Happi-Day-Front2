import apiInstance from '@/api/api';
import { ArtistListType, TeamListType, SubscribedList } from '@/types/artist';

export const getArtistListApi = async (pageParam: number | unknown) => {
  const { data } = await apiInstance.get<ArtistListType>(`/artists?page=${pageParam}&size=24`);
  return data;
};

export const getTeamListApi = async (pageParam: number | unknown) => {
  const { data } = await apiInstance.get<TeamListType>(`/teams?page=${pageParam}&size=24`);
  return data;
};

export const getSubscribedListApi = async () => {
  const { data } = await apiInstance.get<SubscribedList>('/subscriptions');
  return data;
};

export const getTeamInfoApi = async ({ teamId }: { teamId: number }) => {
  const { data } = await apiInstance.get(`/teams/${teamId}`);
  return data;
};

export const getArtistInfoApi = async ({ artistId }: { artistId: number }) => {
  const { data } = await apiInstance.get(`/artists/${artistId}`);
  return data;
};
export const postSubscribeTeamApi = async ({ teamId }: { teamId: number }) => {
  const { data } = await apiInstance.post(`/teams/${teamId}/subscribe`);
  return data;
};

export const postSubscribeArtistApi = async ({ artistId }: { artistId: number }) => {
  const { data } = await apiInstance.post(`/artists/${artistId}/subscribe`);
  return data;
};

export const postCancelSubscriptionTeamApi = async ({ teamId }: { teamId: number }) => {
  const { data } = await apiInstance.post(`/teams/${teamId}/unsubscribe`);
  return data;
};

export const postCancelSubscriptionArtistApi = async ({ artistId }: { artistId: number }) => {
  const { data } = await apiInstance.post(`/artists/${artistId}/unsubscribe`);
  return data;
};

export const putEditTeamApi = async ({
  teamId,
  imageUrl,
  name,
  description,
}: {
  teamId: number;
  imageUrl: string;
  name: string;
  description: string;
}) => {
  await apiInstance.put(`/team/${teamId}`), { imageUrl, name, description };
};

export const putEditArtistApi = async ({
  artistId,
  imageUrl,
  name,
  description,
}: {
  artistId: number;
  imageUrl: string;
  name: string;
  description: string;
}) => {
  await apiInstance.put(`/artists/${artistId}`), { imageUrl, name, description };
};

export const deleteTeamApi = async ({ teamId }: { teamId: number }) => {
  const { data } = await apiInstance.delete(`/team/${teamId}`);
  return data;
};

export const deleteArtistApi = async ({ artistId }: { artistId: number }) => {
  const { data } = await apiInstance.delete(`/artists/${artistId}`);
  return data;
};

export const postUploadTeamApi = async ({
  imageUrl,
  name,
  description,
}: {
  imageUrl: string;
  name: string;
  description: string;
}) => {
  await apiInstance.post('/teams'), { imageUrl, name, description };
};

export const postUploadArtistApi = async ({
  imageUrl,
  name,
  description,
}: {
  imageUrl: string;
  name: string;
  description: string;
}) => {
  await apiInstance.post('/artists'), { imageUrl, name, description };
};
