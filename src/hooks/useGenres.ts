import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import genres from '@/data/genres';
import { Genre } from '@/models/Genre';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
