import { useQuery } from '@tanstack/react-query';

import { Screenshot } from '@/models/Screenshot';
import ApiService from '@/services/api.service';

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiService<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
