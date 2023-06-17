import { useInfiniteQuery } from '@tanstack/react-query';

import { Game } from '@/models/Game';
import { GameQuery } from '@/models/GameQuery';
import ApiService, { FetchResponse } from '@/services/api.service';

const apiClient = new ApiService<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 60 * 24 * 24 * 1000, // 24h
  });

export default useGames;
