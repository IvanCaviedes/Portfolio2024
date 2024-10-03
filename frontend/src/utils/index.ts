export const deepMerge = <T>(target: T, source: Partial<T>): T => {
  for (const key of Object.keys(source) as Array<keyof T>) {
    if (
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      source[key] !== null &&
      typeof target[key] === 'object' &&
      target[key] !== null
    ) {
      (target[key] as T) = deepMerge(
        target[key] as T,
        source[key] as Partial<T>
      );
    } else {
      (target[key] as T) = source[key] as T;
    }
  }
  return target;
};
