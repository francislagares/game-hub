import useTrailers from '@/hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: movies, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstMovie = movies?.results[0];

  return (
    firstMovie && (
      <video src={firstMovie.data[480]} poster={firstMovie.preview} controls />
    )
  );
};

export default GameTrailer;
