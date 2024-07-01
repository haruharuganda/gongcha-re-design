import { Link } from 'react-router-dom';
import ListItems from '../atom/ListItems';

const NavMenu = ({ listItems }) => {
  const menuList = listItems.items;

  return (
    <ul className="main-menu">
      {menuList.map((element, key) => {
        return (
          <li key={key}>
            <Link to={element.path}>{element.main}</Link>
            <ul className="sub-menu">
              <ListItems listItems={element.sub}></ListItems>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
