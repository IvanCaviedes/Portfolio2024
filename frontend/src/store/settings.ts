import { create } from 'zustand';

import { ISettings } from '@/types';
import { deepMerge } from '@/utils';

// Estado inicial del store
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
  maintenance: {
    isUnderMaintenance: true,
    start: new Date('2024-09-20').toISOString(),
    until: new Date('2024-09-27').toISOString(),
  },
};

export const useSettingsStore = create<{
  settings: ISettings;
  updateSettings: (partialSettings: Partial<ISettings>) => void;
}>((set) => ({
  settings: initialState,
  updateSettings: (partialSettings) =>
    set((state) => ({
      settings: deepMerge(state.settings, partialSettings),
    })),
}));
