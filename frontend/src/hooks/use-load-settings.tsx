import { useEffect } from 'react';

import { useSettingsApi } from '@/api/settings';
import { useSettingsStore } from '@/store/settings';
import { IUseLoadSettings } from '@/types';

export const useLoadSettings = (): IUseLoadSettings => {
  const updateSettings = useSettingsStore((state) => state.updateSettings);
  const { data, isLoading, error } = useSettingsApi();
  useEffect(() => {
    if (data) {
      updateSettings(data);
    }
  }, [data, updateSettings]);

  return { isLoading, error: error ? { message: error.message } : null, data };
};
