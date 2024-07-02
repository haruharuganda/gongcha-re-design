import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Test1 from '../page/Test1';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/brand',
        element: <Test1 />
      }
    ]
  }
]);

export default router;
