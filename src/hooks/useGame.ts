import { useQuery } from '@tanstack/react-query';

import { Game } from '@/models/Game';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
