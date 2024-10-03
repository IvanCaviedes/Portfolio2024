import { create } from 'zustand';

import { ISettings } from '@/types';
import { deepMerge } from '@/utils';

// Estado inicial del store
const initialState: ISettings = {
  site: {
    title: 'Portfolio',
    defaultTitle: 'Porfolio',
    subtitle: 'Portolio',
    logo: {
      thumbnail: '',
      original: '',
    },
  },
  maintenance: {
    isUnderMaintenance: true,
    title: 'El sitio esta en construcción',
    description:
      'Estamos trabajando en mejoras para ofrecerte una mejor experiencia. Esta página se encuentra en construcción y estará disponible pronto. ¡Gracias por tu paciencia!',
    start: new Date('2024-09-20T00:00:00.000Z').toISOString(), // Meses en JavaScript van de 0 a 11, por lo que septiembre es 8
    until: new Date('2024-10-29T00:00:00.000Z').toISOString(),
    image: {
      original: '/images/bg-maintenance.jpg',
      thumbnail:
        'https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/346/conversions/background-thumbnail.jpg',
    },
    overlay: {
      isOverlayColor: true,
      overlayColor: 'lime',
      overlayColorRange: '0.03',
    },
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
