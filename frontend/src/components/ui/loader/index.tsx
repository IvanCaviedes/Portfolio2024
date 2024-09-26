import { JSX, FC, Suspense } from 'react';

import colors from 'tailwindcss/colors';

import { ILoaderProps } from '@/types';

import {
  ITailwindColorKey,
  ITailwindColorShades,
  loaderTypeMap,
} from './loaders';

const Loader: FC<ILoaderProps> = ({
  type = 'ThreeDots',
  color = 'amber-100',
  height = '100',
  width = '100',
  ...props
}): JSX.Element => {
  const SelectedLoader = loaderTypeMap[type];

  const [colorKey, shade] = color.split('-') as [
    ITailwindColorKey,
    ITailwindColorShades,
  ];

  const colorValue = colors[colorKey][shade];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <SelectedLoader
          ariaLabel={`${type}-loading`}
          color={colorValue}
          height={height}
          width={width}
          {...props}
        />
      </div>
    </Suspense>
  );
};

export default Loader;
