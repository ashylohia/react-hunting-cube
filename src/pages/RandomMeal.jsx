import { useEffect, useState } from "react";
import { Typography, Button, Grid } from "@mui/material";
import CardGallery from "../components/CardGallery";
import SendIcon from "@mui/icons-material/Send";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState([]);

  const mealGeneratorHandler = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setRandomMeal(json.meals);
      });
  };

  useEffect(() => {
    mealGeneratorHandler();
  }, []);

  return (
    <Grid container sx={{ margin: "0 auto", justifyContent: "center", mt: 4 }}>
      <Grid item textAlign="center" md={4} xs={8}>
        <Typography
          variant="h1"
          color="text.secondary"
          sx={{ fontSize: "2.5rem", mb: 3 }}
        >
          Random Meal Generator
        </Typography>

        <CardGallery meals={randomMeal} isRandomMeal />
        <Button
          variant="outlined"
          onClick={mealGeneratorHandler}
          endIcon={<SendIcon />}
          color="secondary"
          sx={{ outline: "none !important", margin: "30px auto 0" }}
        >
          Meal Generate
        </Button>
      </Grid>
    </Grid>
  );
};

export default RandomMeal;
