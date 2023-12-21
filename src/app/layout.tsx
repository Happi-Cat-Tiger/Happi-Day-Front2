import RecoilRootWrapper from '../utils/RecoilRootWrapper';
import ReactQueryWrapper from '@/utils/ReactQueryWrapper';
import '../styles/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet" />
      </head>
      <body>
        <RecoilRootWrapper>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
