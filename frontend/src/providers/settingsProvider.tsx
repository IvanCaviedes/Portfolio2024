import { JSX, FC, ReactNode } from 'react';

import Loader from '@/components/ui/loader';
import { useLoadSettings } from '@/hooks/useLoadSettings';

const SettingProvider: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  const { isLoading } = useLoadSettings();

  if (isLoading) {
    return <Loader color="blue-500" type="ThreeDots" />;
  }
  return <>{children}</>;
};

export default SettingProvider;
