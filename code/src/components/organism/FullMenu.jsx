import NavMenu from '../molecule/NavMenu';
import naviMenu from '../../data/menu';
const FullMenu = ({ set }) => {
  const disableHover = false;

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

      <NavMenu
        listItems={naviMenu}
        disableHover={disableHover}
      />
    </div>
  );
};

export default FullMenu;
