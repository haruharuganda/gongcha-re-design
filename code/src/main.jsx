import ReactDOM from 'react-dom/client'
import root from './routes/root'
import { RouterProvider } from 'react-router-dom'

const rootNode = document.getElementById('root')
ReactDOM.createRoot(rootNode).render(<RouterProvider router={root} />)
