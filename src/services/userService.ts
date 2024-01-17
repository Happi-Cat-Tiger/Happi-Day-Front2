// import { api, createQueryService } from '../shared';
import axios from 'axios';
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from 'react-query';
import { UserType } from '../types/user';

export interface Profile {
  userId: number;
  userType: 'admin' | 'client';
  name: string | null;
  email: string;
  phone: string | null;
  image: string | null;
  /**
   * 본인인증 여부
   */
  isVerified: boolean;
  birthDate: string | null;
  isDomestic: boolean | null;
}

export const getUserProfileService = createQueryService<{ type: UserType; id: number }, Profile>(
  ['userProfile', 'detail'],
  ({ type, id }) => {
    if (type === 'lawyer') return api.get(`lawyers/${id}/profile`);
    return api.get(`user/info`);
  },
);

export const getClientProfileService = createQueryService<number, Profile>(['userProfile', 'detail'], (id) =>
  api.get(`clients/${id}/profile`),
);

export const getLawyerProfileService = createQueryService<number, Profile>(['userProfile', 'detail'], (id) =>
  api.get(`lawyers/${id}/profile`),
);
