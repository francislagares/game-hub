import { Game } from '@/models/Game';
import { Genre } from '@/models/Genre';
import { Platform } from '@/models/Platform';

import useData from './useData';

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) =>
  useData<Game>(
    '/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id],
  );

export default useGames;
