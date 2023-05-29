import { useEffect, useState } from 'react';

import { CanceledError } from 'axios';

import { Genre } from '@/models/Genre';
import apiService from '@/services/api.service';

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiService
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then(res => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
