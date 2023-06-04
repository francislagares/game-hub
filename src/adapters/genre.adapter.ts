import { Genre } from '@/models/Genre';

export const createGenreAdapter = (genre: Genre) => ({
  id: genre.id,
  name: genre.name,
  imgBackground: genre.image_background,
});
