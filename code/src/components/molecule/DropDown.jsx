import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItems from '../atom/ListItems';

const DropDown = ({ listItems }) => {
  const menuList = listItems.items;

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <ul className="main-menu">
      {menuList.map((element, index) => (
        <li key={index}>
          <div onClick={() => handleClick(index)}>
            <Link to={element.path}>{element.main}</Link>
          </div>
          <ul className={`sub-menu ${activeIndex === index ? 'over' : ''}`}>
            <ListItems listItems={element.sub}></ListItems>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
