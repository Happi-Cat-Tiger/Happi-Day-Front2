import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { min: '360px' },
      md: { min: '768px' },
    },
    extend: {
      colors: {
        orange1: '#ff981f',
        orange2: '#ffb866',
        orange3: '#ffd8ab',
        pink: '#e85ecf',
        'light-purple': '#c688f6',
        'light-purple2': '#e4cfff',
        black: '#000',
        gray1: '#1F2937',
        gray2: '#374151',
        gray3: '#4B5563',
        gray4: '#6B7280',
        gray5: '#9CA3AF',
        gray6: '#D1D5DB',
        gray7: '#F2F2F2',
        gray8: '#fff',
        info: '#A0C3FF',
        success: '#76CA66',
        warning: '#FBC756',
        error: 'D80000',
      },
      typography: {
        h1: {
          css: {
            fontSize: '54px',
            fontWeight: 'bold',
            lineHeight: '110%',
          },
        },
        h2: {
          css: {
            fontSize: '42px',
            fontWeight: 'bold',
            lineHeight: '110%',
          },
        },
        h3: {
          css: {
            fontSize: '32px',
            fontWeight: 'bold',
            lineHeight: '110%',
          },
        },
        h4: {
          css: {
            fontSize: '24px',
            fontWeight: 'bold',
            lineHeight: '110%',
          },
        },
        h5: {
          css: {
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '110%',
          },
        },
        h6: {
          css: {
            fontSize: '18px',
            fontWeight: 'bold',
            lineHeight: '110%',
          },
        },
        h7: {
          css: {
            fontSize: '16px',
            fontWeight: 'bold',
            lineHeight: '110%',
          },
        },
        'subtitle-L': {
          css: {
            fontSize: '18px',
            fontWeight: 'medium',
            lineHeight: '110%',
          },
        },
        'subtitle-M': {
          css: {
            fontSize: '16px',
            fontWeight: 'medium',
            lineHeight: '110%',
          },
        },
        'subtitle-S': {
          css: {
            fontSize: '14px',
            fontWeight: 'medium',
            lineHeight: '110%',
          },
        },
        'body-XL': {
          css: {
            fontSize: '20px',
            fontWeight: 'regular',
            lineHeight: '140%',
          },
        },
        'body-L': {
          css: {
            fontSize: '18px',
            fontWeight: 'regular',
            lineHeight: '140%',
          },
        },
        'body-M': {
          css: {
            fontSize: '16px',
            fontWeight: 'regular',
            lineHeight: '140%',
          },
        },
        'body-S': {
          css: {
            fontSize: '14px',
            fontWeight: 'regular',
            lineHeight: '140%',
          },
        },
        'body-XS': {
          css: {
            fontSize: '12px',
            fontWeight: 'regular',
            lineHeight: '140%',
          },
        },
        'body-XXS': {
          css: {
            fontSize: '10px',
            fontWeight: 'regular',
            lineHeight: '140%',
          },
        },
        caption: {
          css: {
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '100%',
            letterSpacing: '1px',
          },
        },
        'btn-L': {
          css: {
            fontSize: '20px',
            fontWeight: 'medium',
            lineHeight: '100%',
            letterSpacing: '0.5px',
          },
        },
        'btn-M': {
          css: {
            fontSize: '16px',
            fontWeight: 'medium',
            lineHeight: '100%',
            letterSpacing: '0.5px',
          },
        },
        'btn-S': {
          css: {
            fontSize: '14px',
            fontWeight: 'medium',
            lineHeight: '100%',
            letterSpacing: '0.5px',
          },
        },
        'btn-XS': {
          css: {
            fontSize: '12px',
            fontWeight: 'medium',
            lineHeight: '100%',
            letterSpacing: '0.5px',
          },
        },
        'menu&tabs': {
          css: {
            fontSize: '16px',
            fontWeight: 'medium',
            lineHeight: '100%',
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
