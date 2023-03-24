import { useState } from "react";
import Router from "./Routes";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeContextProvider>
        <h1>App</h1>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
};

export default App;
