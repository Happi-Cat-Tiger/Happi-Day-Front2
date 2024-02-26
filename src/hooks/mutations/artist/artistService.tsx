import { useMutation } from '@tanstack/react-query';
import { hdQueryClient } from '@/shared/hdQueryClient';
import {
  postSubscribeTeamApi,
  postSubscribeArtistApi,
  postCancelSubscriptionTeamApi,
  postCancelSubscriptionArtistApi,
  putEditTeamApi,
  putEditArtistApi,
  deleteTeamApi,
  deleteArtistApi,
  postUploadTeamApi,
  postUploadArtistApi,
} from '@/api/artist/artistApi';

export const postSubscribeTeamService = ({ teamId }: { teamId: number }) => {
  const mutation = useMutation({
    mutationFn: postSubscribeTeamApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist', 'subscribe', teamId] });
    },
  });
  return { mutation };
};

export const postSubscribeArtistService = ({ artistId }: { artistId: number }) => {
  const mutation = useMutation({
    mutationFn: postSubscribeArtistApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist', 'subscribe', artistId] });
    },
  });
  return { mutation };
};

export const postCancelSubscriptionTeamService = ({ teamId }: { teamId: number }) => {
  const mutation = useMutation({
    mutationFn: postCancelSubscriptionTeamApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist', 'subscribe', teamId] });
    },
  });
  return { mutation };
};

export const postCancelSubscriptionArtistService = ({ artistId }: { artistId: number }) => {
  const mutation = useMutation({
    mutationFn: postCancelSubscriptionArtistApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist', 'subscribe'] });
    },
  });
  return { mutation };
};

export const putEditTeamService = ({
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
  const mutation = useMutation({
    mutationFn: putEditTeamApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist'] });
    },
  });
  return { mutation };
};

export const putEditArtistService = ({
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
  const mutation = useMutation({
    mutationFn: putEditArtistApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist'] });
    },
  });
  return { mutation };
};

export const deleteTeamService = ({ teamId }: { teamId: number }) => {
  const mutation = useMutation({
    mutationFn: deleteTeamApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist'] });
    },
  });
  return { mutation };
};

export const deleteArtistService = ({ artistId }: { artistId: number }) => {
  const mutation = useMutation({
    mutationFn: deleteArtistApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist'] });
    },
  });
  return { mutation };
};

export const postUploadTeamService = ({
  imageUrl,
  name,
  description,
}: {
  imageUrl: string;
  name: string;
  description: string;
}) => {
  const mutation = useMutation({
    mutationFn: postUploadTeamApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist'] });
    },
  });
  return { mutation };
};

export const postUploadArtistService = ({
  imageUrl,
  name,
  description,
}: {
  imageUrl: string;
  name: string;
  description: string;
}) => {
  const mutation = useMutation({
    mutationFn: postUploadArtistApi,
    onSuccess: () => {
      hdQueryClient.invalidateQueries({ queryKey: ['artist'] });
    },
  });
  return { mutation };
};
