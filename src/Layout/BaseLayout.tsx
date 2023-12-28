import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

const BaseLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
