import { JSX } from 'react';

import { INextPageWithLayout } from '@/types';
import fontClass from '@/utils/get-font-classes';

const Index: INextPageWithLayout = (): JSX.Element => {
  return (
    <div className={fontClass}>
      <div className="font-alan">Hola</div>
      <div className="font-alan">hola 2</div>
      <div className="font-cedarville">Hola 3</div>
    </div>
  );
};

export default Index;
