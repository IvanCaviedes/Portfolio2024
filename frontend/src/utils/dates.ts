export const IsDateInArray = (arr?: Date[], value?: Date): boolean => {
  return !!arr?.find((item) => {
    return item.getDate() == value?.getDate();
  });
};
