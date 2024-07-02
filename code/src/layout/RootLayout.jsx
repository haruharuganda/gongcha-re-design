import { Outlet } from 'react-router-dom';
import Header from '../components/organism/Header';
import Footer from '../components/organism/Footer';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
