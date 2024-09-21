import { FC, ReactNode, JSX, useMemo, useCallback, useEffect } from 'react';

import { eachDayOfInterval, isTomorrow } from 'date-fns';
import { useAtom } from 'jotai';

import { UseSettingsContext } from '@/contexts/settings.context';
import {
  checkIsMantenanceModeComing,
  checkIsMantenanceModeStart,
} from '@/utils/constants';
import { IsDateInArray } from '@/utils/dates';

const Maintenance: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  const {
    maintenance: { start, isUnderMaintenance, until },
  } = UseSettingsContext();

  const [_, setUnderMantenanceIsComing] = useAtom(checkIsMantenanceModeComing);

  const [underMantenanceStart, setUnderMantenanceStart] = useAtom(
    checkIsMantenanceModeStart
  );

  const dateInterval = useMemo(() => {
    if (start && until) {
      const startDay = new Date(start);
      const endDateDay = new Date(until);
      return eachDayOfInterval({ start: startDay, end: endDateDay });
    }
    return [];
  }, [start, until]);

  const handleMaintenanceCheck = useCallback(() => {
    const minLengthDateInterval = 0;
    if (dateInterval.length > minLengthDateInterval) {
      setUnderMantenanceStart(
        IsDateInArray(dateInterval, new Date()) && isUnderMaintenance
      );

      const beforeDay = isTomorrow(new Date(start as string));
      setUnderMantenanceIsComing(beforeDay && isUnderMaintenance);
    }
  }, [dateInterval, isUnderMaintenance, start]);

  useEffect(() => {
    handleMaintenanceCheck();
  }, [handleMaintenanceCheck]);

  if (underMantenanceStart) {
    return <>Maintenance</>;
  }

  return <>{children}</>;
};

export default Maintenance;
