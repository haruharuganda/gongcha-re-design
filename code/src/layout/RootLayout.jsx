import { Outlet } from 'react-router-dom';
import Header from '../components/organism/Header';
import Footer from '../components/organism/Footer';
import '../styles/css/reset.css';
import '../styles/css/style.css';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        props.children 대체!
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
