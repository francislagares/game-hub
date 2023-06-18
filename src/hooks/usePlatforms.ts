import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import platforms from '@/data/platforms';
import { Platform } from '@/models/Platform';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Platform>('/platforms');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
