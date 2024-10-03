import { useQuery, UseQueryResult } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export const useSettingsApi = (): UseQueryResult => {
  return useQuery({
    queryKey: ['testa'],
    queryFn: fetchUsers,
  });
};
