import { JSX, FC } from 'react';

const ErrorMessage: FC<{ message: string }> = ({ message }): JSX.Element => {
  return (
    <div className="mx-auto mt-16 min-w-min max-w-sm animate-shake rounded bg-red-400 p-5 text-center text-lg font-semibold text-white">
      {message}
    </div>
  );
};

export default ErrorMessage;
