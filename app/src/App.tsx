import Router from "./Routes";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import ReduxStoreProvider from "./contexts/ReduxStoreProvider";
import LangContextProvider from "./contexts/LanguageContext";
import SnackbarContextProvider from "./contexts/SnackbarContext";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <ReduxStoreProvider>
          <LangContextProvider>
            <SnackbarContextProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </SnackbarContextProvider>
          </LangContextProvider>
        </ReduxStoreProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
