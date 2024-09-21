import { useQuery, UseQueryResult } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};
// eslint-disable-next-line @typescript-eslint/naming-convention
export const useSettingsApi = (): UseQueryResult => {
  return useQuery({
    queryKey: ['test'],
    queryFn: fetchUsers,
  });
};
