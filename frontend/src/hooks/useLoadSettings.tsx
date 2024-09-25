import { useEffect } from 'react';

import { useSettingsApi } from '@/api/settings';
import { useSettingsStore } from '@/store/settings';

export const useLoadSettings = (): { isLoading: boolean } => {
  const updateSettings = useSettingsStore((state) => state.updateSettings);
  const { data, isLoading } = useSettingsApi();
  useEffect(() => {
    if (data) {
      updateSettings(data);
    }
  }, [data, updateSettings]);

  return { isLoading };
};
