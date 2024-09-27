import { JSX, FC } from 'react';

import { ICountDownDisplayProps, ITimeUnitProps } from '@/types';

export const TimeUnit: FC<ITimeUnitProps> = ({ value, label }): JSX.Element => (
  <li className="flex">
    <div className="timer">{value}</div>
    <div className="title">{label}</div>
  </li>
);

export const Separator: FC = (): JSX.Element => (
  <li className="separatorParent">
    <div className="separator">:</div>
  </li>
);

const CountDownDisplay: FC<ICountDownDisplayProps> = ({
  completed,
  days,
  hours,
  minutes,
  seconds,
}): JSX.Element => {
  if (completed) {
    return <span>Maintenance is over!</span>;
  }
  return (
    <ul className="mx-auto flex max-w-xl flex-col items-center justify-between gap-8 px-5 md:flex-row lg:w-[51.25rem] lg:max-w-2xl lg:p-0">
      <TimeUnit label="dias" value={days} />
      <Separator />
      <TimeUnit label="horas" value={hours} />
      <Separator />
      <TimeUnit label="minutos" value={minutes} />
      <Separator />
      <TimeUnit label="segundos" value={seconds} />
    </ul>
  );
};
export default CountDownDisplay;
