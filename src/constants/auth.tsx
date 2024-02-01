import { AuthInputPlaceholder } from '@/types/auth';
import { AiOutlineUser, AiOutlineLock, AiOutlinePhone } from 'react-icons/ai';

export const SIGN_IN: { INPUT_PLACE_HOLDER: AuthInputPlaceholder[] } = {
  INPUT_PLACE_HOLDER: [
    { label: '', name: 'id', type: 'text', icon: AiOutlineUser, content: 'example@happiday.com' },
    { label: '', name: 'pw', type: 'password', icon: AiOutlineLock, content: '비밀번호' },
  ],
};

export const SIGN_UP: { INPUT_PLACE_HOLDER: AuthInputPlaceholder[] } = {
  INPUT_PLACE_HOLDER: [
    { label: '아이디', name: 'id', type: 'text', icon: AiOutlineUser, content: 'example@happiday.com' },
    { label: '비밀번호', name: 'pw', type: 'password', icon: AiOutlineLock, content: '********' },
    { label: '비밀번호 확인', name: 'pwConfirm', type: 'password', icon: AiOutlineLock, content: '********' },
    { label: '이름', name: 'name', type: 'text', icon: AiOutlineUser, content: '홍길동' },
    { label: '휴대폰 번호', name: 'phoneNumber', type: 'text', icon: AiOutlinePhone, content: '01012345678' },
    { label: '닉네임', name: 'nickName', type: 'text', icon: AiOutlineUser, content: 'ex)해피데이' },
  ],
};

export const AUTH_REACT_HOOK_FORM: { VALIDATION_PATTERNS: { [key: string]: { value: RegExp; message: string } } } = {
  VALIDATION_PATTERNS: {
    id: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      message: '올바른 이메일 형식이 아닙니다.',
    },
    pw: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>/?]).{8,}$/,
      message: '영문, 숫자, 특수문자 포함 8글자 이상이어야 합니다.',
    },
    name: {
      value: /^[A-Za-z가-힣]+$/,
      message: '영문 또는 한글만 입력해주세요.',
    },
    phoneNumber: {
      value: /^[0-9]{1,11}$/,
      message: '하이픈(-)을 제외한 숫자만 입력해주세요.',
    },
    nickName: {
      value: /^[A-Za-z가-힣]{1,10}$/,
      message: '영문 또는 한글로 10글자 이내로 입력해주세요.',
    },
  },
};
