import Router from "./Routes";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import ReduxStoreProvider from "./contexts/ReduxStoreProvider";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <ReduxStoreProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ReduxStoreProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
