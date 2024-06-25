import { useContext } from "react";
import { Typography, Box, Button } from "@mui/material";
import CardGallery from "../components/CardGallery";
import { AppContext } from "../context";
import NoMealFound from "../components/NoMealFound";

const Favorites = () => {
  const { favoriteMealsContext } = useContext(AppContext);
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: "2.5rem",
          mb: 6,
          mt: 2,
          color: "#FA4A0C",
          fontFamily: "Playfair Display, serif",
          fontStyle: "italic",
          fontWeight: "600",
        }}
      >
        My Favorites
      </Typography>

      {favoriteMealsContext.length > 0 ? (
        <CardGallery meals={favoriteMealsContext} />
      ) : (
        <NoMealFound />
      )}
    </Box>
  );
};

export default Favorites;
