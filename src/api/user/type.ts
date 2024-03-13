export interface UpdateProfilePayload {
  nickName?: string;
  phone?: string;
  profileImage?: string;
}

export interface ProfileResponse {
  id: number;
  realName: string;
  userType: 'USER' | 'ADMIN';
  userName: string;
  phone: string;
  profileImage: string;
  nickname: string;
}
