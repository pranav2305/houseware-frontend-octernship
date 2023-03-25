import { Outlet } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { SnackbarContext } from "../contexts/SnackbarContext";
import { useContext } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Navbar from "./navbar";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  const { snackbarInfo, setSnackbarInfo } = useContext(SnackbarContext);

  const handleClose = () => {
    setSnackbarInfo({...snackbarInfo, open: false});
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-light-background" : "bg-dark-background"
      } min-h-screen pb-10`}
    >
      <Navbar />
      <div className="w-11/12 max-w-[1400px] m-auto pt-32">
        <Outlet />
      </div>
      <Snackbar
        open={snackbarInfo.open}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <Alert severity={snackbarInfo.severity}>
          {snackbarInfo.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Layout;
