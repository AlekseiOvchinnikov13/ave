import {Inter} from 'next/font/google';
import './styles/globals.scss';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'AVE AI',
  description: '',
};

export default function RootLayout({children}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
