import { useQuery } from '@tanstack/react-query';

import { Game } from '@/models/Game';
import { GameQuery } from '@/models/GameQuery';
import ApiService, { FetchResponse } from '@/services/api.service';

const apiClient = new ApiService<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
