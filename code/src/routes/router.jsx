import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Test1 from '../page/Test1'
import Test2 from '../page/Test2'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/test1',
        element: <Test1 />
      },
      {
        path: '/test2',
        element: <Test2 />
      }
    ]
  }
])

export default router
