import classNames from 'classnames';
import { Cedarville_Cursive, Allan, Lobster } from 'next/font/google';

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

const lobsterFont = Lobster({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lobster',
});

const fontClass = classNames(
  cedarvilleCursiveFont.variable,
  allanFont.variable,
  lobsterFont.variable
);

export default fontClass;
