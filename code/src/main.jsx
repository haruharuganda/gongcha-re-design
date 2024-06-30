import ReactDOM from 'react-dom/client'
import router from './routes/router'
import { RouterProvider } from 'react-router-dom'

const rootNode = document.getElementById('root')
ReactDOM.createRoot(rootNode).render(<RouterProvider router={router} />)
