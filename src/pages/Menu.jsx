import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import RenderSkeletons from "../components/RenderSkeleton";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMenuItems(json.categories);
        setLoading(false);
      });
  }, []);

  const onClickHandler = (name) => {
    navigation(`/category/${name}`);
  };
  return (
    <Grid container spacing={3} p={3}>
      <Grid item md={12} xs={12}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.5rem",
            mb: 4,
            mt: 2,
            color: "#FA4A0C",
            fontFamily: "Playfair Display, serif",
            fontStyle: "italic",
            fontWeight: "600",
          }}
        >
          Menu
        </Typography>
      </Grid>

      {loading ? (
        <RenderSkeletons />
      ) : (
        menuItems?.map((cat, index) => (
          <Grid item md={3} key={`${index}_id`} mb={2} xs={6}>
            <Card
              onClick={() => onClickHandler(cat.strCategory)}
              sx={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height={"200"}
                image={cat.strCategoryThumb}
                alt="meal_Thumb"
              />
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "1.2rem",
                    fontFamily: "Rubik, sans-serif",
                  }}
                >
                  {cat.strCategory}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Menu;
