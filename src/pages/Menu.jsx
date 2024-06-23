import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setMenuItems(json.categories);
      });
  }, []);

  const onClickHandler = (name) => {
    navigation(`/category/${name}`);
  };
  return (
    <Grid container spacing={3} p={3}>
      {menuItems.length > 0 &&
        menuItems.map((cat, index) => (
          <Grid item md={3} key={`${index}_id`} mb={2} xs={6}>
            <Card onClick={() => onClickHandler(cat.strCategory)}>
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
                  sx={{ fontSize: "1.2rem" }}
                >
                  {cat.strCategory}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Menu;
