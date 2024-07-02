import { Link } from 'react-router-dom';
import ListItems from '../atom/ListItems';
import { useState } from 'react';

const NavMenu = ({ listItems }) => {
  const menuList = listItems.items;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <ul
        className="main-menu tablet"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {menuList.map((element, key) => {
          return (
            <li key={key}>
              <Link to={element.path}>{element.main}</Link>
              <ul className={`${isHovered ? 'sub-menu over' : 'sub-menu'}`}>
                <ListItems listItems={element.sub}></ListItems>
              </ul>
            </li>
          );
        })}
      </ul>

      <ul className="main-menu mobile"></ul>
    </>
  );
};

export default NavMenu;
