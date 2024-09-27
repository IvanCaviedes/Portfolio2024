import {
  FC,
  ReactNode,
  JSX,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { eachDayOfInterval, isTomorrow } from 'date-fns';
import { useAtom } from 'jotai';

import Loader from '@/components/ui/loader';
import { useSettingsStore } from '@/store/settings';
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
  } = useSettingsStore((e) => e.settings);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

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
    setIsLoading(false);
  }, [dateInterval, isUnderMaintenance, start]);

  useEffect(() => {
    handleMaintenanceCheck();
  }, [handleMaintenanceCheck]);

  if (isLoading) {
    return <Loader color="red-400" type="ThreeDots" />;
  }

  if (underMantenanceStart) {
    return <>Maintenance</>;
  }

  return <>{children}</>;
};

export default Maintenance;
