export interface AuthSigninPayload {
  username: string;
  password: string;
}

export interface AuthSignupPayload {
  username: string;
  password: string;
  nickname: string;
  realname: string;
  phone: string;
  termsPrivacy: boolean;
  termsService: boolean;
}
