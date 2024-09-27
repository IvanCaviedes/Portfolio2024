import { FC, JSX, useMemo } from 'react';

import CountDownTimer from '@/components/ui/countdown';
import { useSettingsStore } from '@/store/settings';

const MaintenanceMode: FC = (): JSX.Element => {
  const {
    maintenance: { start, until },
  } = useSettingsStore((e) => e.settings);

  const mantenanceDate = useMemo(() => {
    return new Date(start ? (until as string) : (start as string));
  }, [start, until]);

  return (
    <>
      <CountDownTimer date={mantenanceDate} />
    </>
  );
};

export default MaintenanceMode;
