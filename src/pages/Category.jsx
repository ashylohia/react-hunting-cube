import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import CardGallery from "../components/CardGallery";

const Category = () => {
  const [meals, setMeals] = useState([]);
  let { categoryName } = useParams();

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setMeals(json.meals);
      });
  }, [categoryName]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h1"
        color="text.secondary"
        sx={{ fontSize: "2.5rem", mb: 2 }}
      >
        {`All In ${categoryName}`}
      </Typography>

      <CardGallery meals={meals} />
    </Box>
  );
};

export default Category;
