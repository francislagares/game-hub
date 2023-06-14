import { useQuery } from '@tanstack/react-query';

import genres from '@/data/genres';
import { Genre } from '@/models/Genre';
import apiService from '@/services/api.service';

import { FetchResponse } from './useData';

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiService.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
