import { Outlet } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
      <div>
        <h1 className={`text-${theme}-primary`}>Layout</h1>
        <Outlet />
      </div>
  );
};

export default Layout;
