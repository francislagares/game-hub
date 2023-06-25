import { createBrowserRouter } from 'react-router-dom';

import Header from '@/layouts/Header';
import GameDetail from '@/pages/GameDetail';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      { path: 'games/:id', element: <GameDetail /> },
    ],
  },
]);

export default router;
