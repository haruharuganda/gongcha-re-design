import { Outlet } from 'react-router-dom';
import Header from '../components/organism/Header';
import Footer from '../components/organism/Footer';

const RootLayout = () => {
  return (
    <div className="wrap">
      <Header />
      <main>
        props.children 대체!
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
