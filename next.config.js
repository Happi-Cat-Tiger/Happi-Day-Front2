/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: [
      'localhost',
      '*',
      'happi-day.s3.ap-northeast-2.amazonaws.com',
      'www.fitpetmall.com',
      'blog.kakaocdn.net',
      'ichef.bbci.co.uk',
      't1.daumcdn.net',
      'img1.daumcdn.net',
    ],
  },
};
