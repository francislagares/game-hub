import { createBrowserRouter } from 'react-router-dom';

import Header from '@/layouts/Header';
import Error from '@/pages/Error';
import GameDetail from '@/pages/GameDetail';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'games/:slug', element: <GameDetail /> },
    ],
  },
]);

export default router;
