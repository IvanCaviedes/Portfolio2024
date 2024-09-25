import { JSX, FC, ReactNode } from 'react';

import { useLoadSettings } from '@/hooks/useLoadSettings';
const SettingProvider: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  const { isLoading } = useLoadSettings();

  if (isLoading) {
    return <>Cargando...</>; // Muestra el spinner mientras se cargan los settings
  }
  return <>{children}</>;
};

export default SettingProvider;
