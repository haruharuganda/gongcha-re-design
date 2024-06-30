import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/test1'}>test1</Link>
          <Link to={'/test2'}>test1</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
