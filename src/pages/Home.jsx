import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Paper, Container } from "@mui/material";

const Home = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setMeals(json.categories);
      });
  }, []);

  return (
    <>
      <Box sx={{ padding: 0 }}>
        <img src="/react-hunting-cube/banner.jpg" width="100%" />
      </Box>

      <Grid container spacing={3} p={3} justifyContent="center">
        <Grid item md={3} xs={8}>
          <Link to={"/menu"}>
            <img src="/react-hunting-cube/menu.jpg" width="100%" />
          </Link>
        </Grid>
        <Grid item md={3} xs={8}>
          <Link to={"/favorites"}>
            <img src="/react-hunting-cube/favorites.jpg" width="100%" />
          </Link>
        </Grid>
        <Grid item md={3} xs={8}>
          <Link to={"/random-meal-generator"}>
            <img src="/react-hunting-cube/random_meals.jpg" width="100%" />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
