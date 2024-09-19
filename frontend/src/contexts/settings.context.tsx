import { FC, createContext, useContext, useState } from 'react';

import { ISettings, ISettingsProviderProps } from '@/types';

const initialState: ISettings = {
  site: {
    title: 'Test',
    defaultTitle: 'Porfolio',
    subtitle: 'Portolio',
    logo: {
      thumbnail: '',
      original: '',
    },
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SettingsContext = createContext<ISettings>(initialState);
SettingsContext.displayName = 'SettingsContext';

export const SettingsProvider: FC<ISettingsProviderProps> = ({
  initialValues,
  ...props
}) => {
  const [state] = useState(initialValues ?? initialState);
  return <SettingsContext.Provider value={state} {...props} />;
};

export const UseSettingsContext = (): ISettings => {
  const context = useContext(SettingsContext);
  if (typeof context === 'undefined') {
    throw new Error('usesettings must be used with a settingsProvider');
  }

  return context;
};
