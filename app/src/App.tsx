import { useState } from "react";
import Router from "./Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>App</h1>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
