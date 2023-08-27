import { useRoutes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';

function AppRouter() {

  return useRoutes(
    [
      {
        element: <Home />,
        path: '/home',
      },
    ]
  );
}

export default AppRouter;