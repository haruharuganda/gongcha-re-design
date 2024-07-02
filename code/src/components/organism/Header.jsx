import { Link } from 'react-router-dom';
import Navigation from '../molecule/Navigation';
import logo from '../../assets/img/logo.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : undefined}>
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
    </header>
  );
};

export default Header;
