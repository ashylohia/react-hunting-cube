import { useContext } from "react";
import { Typography, Box } from "@mui/material";
import CardGallery from "../components/CardGallery";
import { AppContext } from "../context";

const Favorites = () => {
  const { favoriteMealsContext } = useContext(AppContext);
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h1"
        color="text.secondary"
        sx={{ fontSize: "2.5rem", mb: 2 }}
      >
        Favorites Meal
      </Typography>

      <CardGallery meals={favoriteMealsContext} />
    </Box>
  );
};

export default Favorites;
