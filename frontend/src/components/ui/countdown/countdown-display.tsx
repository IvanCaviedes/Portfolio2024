import { JSX, FC } from 'react';

import { ICountDownDisplayProps, ITimeUnitProps } from '@/types';

const TimeUnit: FC<ITimeUnitProps> = ({ value, label }): JSX.Element => (
  <li className="timer">
    <div className="unit">{value}</div>
    <div className="title">{label}</div>
  </li>
);

const Completed: FC = (): JSX.Element => <span>Maintenance is over!</span>;

const CountDownDisplay: FC<ICountDownDisplayProps> = ({
  completed,
  days,
  hours,
  minutes,
  seconds,
}): JSX.Element => {
  if (completed) {
    return <Completed />;
  }
  return (
    <ul className="mx-auto flex max-w-md justify-center gap-2 md:gap-6">
      <TimeUnit label="dias" value={days} />
      <TimeUnit label="horas" value={hours} />
      <TimeUnit label="minutos" value={minutes} />
      <TimeUnit label="segundos" value={seconds} />
    </ul>
  );
};
export default CountDownDisplay;
