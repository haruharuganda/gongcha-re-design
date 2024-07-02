import { Link } from 'react-router-dom';
import { useState } from 'react';
import ListItems from '../atom/ListItems';
import { iconPath } from '../../assets/imgPath';

const NavMenu = ({ listItems }) => {
  const menuList = listItems.items;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  console.log(iconPath.menu);
  return (
    <>
      <ul
        className="main-menu desktop "
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

      <ul className="main-menu mobile">
        <li>
          <img
            src={iconPath.menu}
            alt="클릭시 메뉴로 가는 아이콘"
          />
        </li>
      </ul>
    </>
  );
};

export default NavMenu;
