import NavMenu from './NavMenu';
import naviMenu from '../../data/menu';
const Navigation = () => {
  return (
    <nav>
      <NavMenu listItems={naviMenu} />
    </nav>
  );
};

export default Navigation;
