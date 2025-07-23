import React, { useState, useEffect, use } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Header from "./components/Layout/Header";
import Layout from "./components/Layout";
// import Header from "./components/Layout/Header";


function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
