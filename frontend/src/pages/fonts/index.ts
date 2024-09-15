import classNames from 'classnames';
// eslint-disable-next-line camelcase
import { Cedarville_Cursive, Allan } from 'next/font/google';

const cedarvilleCursiveFont = Cedarville_Cursive({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cedarville',
});

const allanFont = Allan({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alan',
});

export const fontClass = classNames(
  cedarvilleCursiveFont.variable,
  allanFont.variable
);
