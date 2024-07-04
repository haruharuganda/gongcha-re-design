import naviMenu from '../../data/menu';
import DropDown from '../molecule/DropDown';

const FullMenu = ({ set }) => {
  function hendlerMenuClosed() {
    set(false);
  }

  return (
    <div
      className="full-menu"
      onClick={() => {
        hendlerMenuClosed();
      }}>
      <h2>MENU</h2>
      <DropDown listItems={naviMenu} />
    </div>
  );
};

export default FullMenu;
