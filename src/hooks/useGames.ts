import { useQuery } from '@tanstack/react-query';

import { Game } from '@/models/Game';
import { GameQuery } from '@/models/GameQuery';
import apiService, { FetchResponse } from '@/services/api.service';

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiService
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
