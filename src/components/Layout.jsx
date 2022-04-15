import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DataProvider } from "../context/DataContext";

const Layout = () => {
  return (
    <div className="App">
      <Header title="ReactJS Blog" />
      <DataProvider>
        <Navbar />
        <Outlet />
      </DataProvider>
      <Footer />
    </div>
  );
};

export default Layout;
