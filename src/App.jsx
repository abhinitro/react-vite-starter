import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Header from "./components/Layout/Header";
import Layout from "./components/Layout";
import AppRoutes from "./pages/AppRoutes";
// import Header from "./components/Layout/Header";


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Route>

        </Routes> */}
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
