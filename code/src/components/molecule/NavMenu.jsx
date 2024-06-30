import { Link } from 'react-router-dom';
import ListItems from '../atom/ListItems';

const NavMenu = ({ listItems }) => {
  const { hasLinkTag, items } = listItems;

  

  console.log(items);
  return <ul className="main-menu"></ul>;
};

export default NavMenu;
