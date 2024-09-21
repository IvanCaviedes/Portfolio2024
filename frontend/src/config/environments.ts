import { IEnvironmentVariables } from '@/types';

const getVarEnv = <K extends keyof IEnvironmentVariables>(
  key: K,
  defaultValue?: IEnvironmentVariables[K]
): IEnvironmentVariables[K] => {
  const value = process.env[key] ?? defaultValue;

  if (typeof value === 'undefined' || value === '') {
    throw new Error(`Missing environment variable ${key}`);
  }
  return value as IEnvironmentVariables[K];
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const Environments: IEnvironmentVariables = {
  NODE_ENV: getVarEnv('NODE_ENV', 'development'),
  NEXT_PUBLIC_WEBSITE_URL: getVarEnv('NEXT_PUBLIC_WEBSITE_URL'),
};

export default Environments;
