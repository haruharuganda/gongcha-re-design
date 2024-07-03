import NavMenu from './NavMenu';
import naviMenu from '../../data/menu';

const Navigation = () => {
  const disableHover = true;
  return (
    <nav>
      <NavMenu
        listItems={naviMenu}
        disableHover={disableHover}
      />
    </nav>
  );
};

export default Navigation;
