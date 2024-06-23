import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import RandomMeal from "./pages/RandomMeal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/random-meal-generator" element={<RandomMeal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
