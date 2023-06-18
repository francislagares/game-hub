import { useQuery } from '@tanstack/react-query';

import genres from '@/data/genres';
import { Genre } from '@/models/Genre';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
