import { Link } from 'react-router-dom';
import Navigation from '../molecule/Navigation';
import logo from '../../assets/img/logo.png';
const Header = () => {
  return (
    <header>
      <h1>
        <span>공차</span>
        <Link to="/">
          <img
            src={logo}
            alt="공차로고"
          />
        </Link>
      </h1>
      <Navigation></Navigation>
      <div className="bg"></div>
    </header>
  );
};

export default Header;
