import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Editor from "./pages/editor";
import NoMatch from "./pages/404";

const Router = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="editor" element={<Editor />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
);

export default Router;