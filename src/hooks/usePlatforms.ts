import { useQuery } from '@tanstack/react-query';

import { Platform } from '@/models/Platform';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Platform>('/platforms');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
