import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import CardGallery from "../components/CardGallery";

const Category = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  let { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);
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
        setMeals(json.meals);
        setLoading(false);
      });
  }, [categoryName]);

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
        {`All In ${categoryName}`}
      </Typography>

      <CardGallery meals={meals} loading={loading} />
    </Box>
  );
};

export default Category;
