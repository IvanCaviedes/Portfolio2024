import { JSX } from 'react';

import { INextPageWithLayout } from '@/types';

import { fontClass } from './fonts';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Home: INextPageWithLayout = (): JSX.Element => {
  return (
    <div className={fontClass}>
      <div className="font-alan">Hola</div>
      <div className="font-alan">hola 2</div>
      <div className="font-cedarville">Hola 3</div>
    </div>
  );
};

export default Home;
