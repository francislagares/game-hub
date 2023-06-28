import { useQuery } from '@tanstack/react-query';

import { Trailer } from '@/models/Trailer';
import ApiService from '@/services/api.service';

const useTrailers = (gameId: number) => {
  const apiClient = new ApiService<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
