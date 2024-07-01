import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import Test1 from '../page/Test1';
import Test2 from '../page/Test2';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/brand',
        element: <Test1 />
      },
      {
        path: '/menu',
        element: <Test2 />
      }
    ]
  }
]);

export default router;
