import { useContext, useCallback } from "react";
import {
  Card,
  Grid,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppContext } from "../context";
import RenderSkeletons from "./RenderSkeleton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CardGallery = (props) => {
  const { favoriteMealsContext, setFavoriteMealsContext } =
    useContext(AppContext);

  const { meals, isRandomMeal, loading } = props;
  const isMobile = useMediaQuery("(max-width:600px)");

  const cardHandler = (mealId) => {
    let modifyFavoriteMeals = [...favoriteMealsContext];

    const isMealAlreadySelected = favoriteMealsContext.findIndex(
      (a) => a.idMeal === mealId
    );

    if (isMealAlreadySelected < 0) {
      const selectedMeal = meals.find((item) => item.idMeal === mealId);
      modifyFavoriteMeals.push(selectedMeal);
    } else {
      modifyFavoriteMeals.splice(isMealAlreadySelected, 1);
    }

    setFavoriteMealsContext(modifyFavoriteMeals);
  };

  const isMealSelected = useCallback(
    (mealId) => {
      return (
        favoriteMealsContext.find((item) => item.idMeal === mealId) ?? false
      );
    },
    [favoriteMealsContext]
  );

  return (
    <Grid container spacing={5}>
      {loading ? (
        <RenderSkeletons isRandomMeal={isRandomMeal} />
      ) : (
        meals?.map((mealItem) => (
          <Grid
            item
            md={isRandomMeal ? 12 : 3}
            key={`${mealItem.idMeal}_id`}
            xs={12}
          >
            <Card
              onClick={() => cardHandler(mealItem.idMeal)}
              elevation={3}
              sx={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height={isMobile ? "200" : isRandomMeal ? "400" : "194"}
                image={mealItem.strMealThumb}
                alt="meal_Thumb"
              />
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pb: "16px !important",
                }}
              >
                <IconButton
                  aria-label="add to favorites"
                  sx={{ outline: "none !important" }}
                >
                  {isMealSelected(mealItem.idMeal) ? (
                    <FavoriteIcon
                      sx={{
                        color: "red",
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
                <Typography
                  noWrap
                  variant="body2"
                  color="text.secondary"
                  ml={1}
                  sx={{
                    fontFamily: "Rubik, sans-serif",
                    fontSize: isMobile
                      ? "1rem"
                      : isRandomMeal
                      ? "1.5rem"
                      : "1rem",
                  }}
                >
                  {mealItem.strMeal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CardGallery;
