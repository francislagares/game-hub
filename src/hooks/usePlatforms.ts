import { useQuery } from '@tanstack/react-query';

import { Platform } from '@/models/Platform';
import apiService from '@/services/api.service';

import { FetchResponse } from './useData';

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiService
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
