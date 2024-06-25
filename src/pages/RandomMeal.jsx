import { useEffect, useState } from "react";
import { Typography, Button, Grid } from "@mui/material";
import CardGallery from "../components/CardGallery";
import SendIcon from "@mui/icons-material/Send";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const [loading, setLoading] = useState(false);

  const mealGeneratorHandler = () => {
    setLoading(true);

    fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setRandomMeal(json.meals);
        setLoading(false);
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
          sx={{
            fontSize: "2.5rem",
            mb: 3,
            color: "#FA4A0C",
            fontFamily: "Playfair Display, serif",
            fontStyle: "italic",
            fontWeight: "600",
          }}
        >
          Random Meal Generator
        </Typography>

        <CardGallery meals={randomMeal} isRandomMeal loading={loading} />
        <Button
          variant="contained"
          onClick={mealGeneratorHandler}
          endIcon={<SendIcon />}
          sx={{
            outline: "none !important",
            margin: "30px auto 0",
            px: 4,
            py: 2,
            backgroundColor: "#FA4A0C",
            fontWeight: 600,
            color: "#fff",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#FA4A0C",
              boxShadow: "#FA4A0C 0px 10px 36px 0px, #FA4A0C 0px 0px 0px 1px",
            },
          }}
        >
          Meal Generate
        </Button>
      </Grid>
    </Grid>
  );
};

export default RandomMeal;
