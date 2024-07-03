import { Link } from 'react-router-dom';
import Navigation from '../molecule/Navigation';
import { useEffect, useState } from 'react';
import { menu, logo } from '../../assets/imgPath';
import FullMenu from './FullMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isMenuOpen);
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
  }, [isMenuOpen]);

  function hendlerMenuOpen() {
    setIsMenuOpen(true);
  }

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

      <div>
        <img
          role="button"
          src={menu}
          alt="클릭시 메뉴로 가는 아이콘"
          onClick={() => {
            hendlerMenuOpen();
          }}
        />
        <FullMenu set={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
