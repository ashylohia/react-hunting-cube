import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import { AppContext } from "./context";

const App = () => {
  const [favoriteMealsContext, setFavoriteMealsContext] = useState([]);

  return (
    <AppContext.Provider
      value={{ favoriteMealsContext, setFavoriteMealsContext }}
    >
      <Box sx={{ width: "100%" }}>
        <Header />
        <Box component="main" sx={{ p: 0, width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </AppContext.Provider>
  );
};

export default App;
