import Router from "./Routes";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";

const App = () => {

  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
};

export default App;
