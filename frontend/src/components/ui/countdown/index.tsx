import { FC, JSX, useCallback } from 'react';

import { useAtom } from 'jotai';
import Countdown from 'react-countdown';

import CountDownDisplay from '@/components/ui/countdown/countdown-display';
import { ICountTimerProps } from '@/types';
import { checkIsMantenanceModeStart } from '@/utils/constants';

const CountDownTimer: FC<ICountTimerProps> = ({ date }): JSX.Element => {
  const [_, setUnderMantenanceStart] = useAtom(checkIsMantenanceModeStart);

  const handleComplete = useCallback(() => {
    setUnderMantenanceStart(false);
  }, [setUnderMantenanceStart]);

  return (
    <>
      <Countdown
        date={date}
        renderer={CountDownDisplay}
        onComplete={handleComplete}
      />
    </>
  );
};

export default CountDownTimer;
