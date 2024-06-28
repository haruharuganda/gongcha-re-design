import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import About from '../pages/About'
const router = createBrowserRouter([
  {
    path: '*',
    element: <App />
  },

  {
    path: '/about',
    element: <About />
  },
  {
    path: '/proflies/:username',
    element: <Profile />
  }
])

export default router
