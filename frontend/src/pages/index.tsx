import { JSX } from 'react';

import { fontClass } from './fonts';

export default function Home(): JSX.Element {
  return (
    <div className={fontClass}>
      <div className="font-alan">Hola</div>
      <div className="font-alan">hola 2</div>
      <div className="font-cedarville">Hola 3</div>
    </div>
  );
}
