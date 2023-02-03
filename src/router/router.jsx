import { createBrowserRouter } from 'react-router-dom';
import ProjectDetails from '../pages/ProjectDetails';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:name',
    element: <ProjectDetails />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
