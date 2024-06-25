import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NoMealFound = () => {
  const navigation = useNavigate();

  return (
    <Grid container sx={{ textAlign: "center" }}>
      <Grid item xs={12} md={8} sx={{ margin: "0 auto" }}>
        <img src="/react-hunting-cube/no_meal.jpeg" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "1.5rem",
            mb: 3,
            mt: 2,
            color: "#0009",
            fontFamily: "Playfair Display, serif",
            fontWeight: "600",
            letterSpacing: 1.5,
          }}
        >
          No Favorites Yet!
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Button
          variant="contained"
          onClick={() => navigation("/menu")}
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
          Add your favorite foods
        </Button>
      </Grid>
    </Grid>
  );
};

export default NoMealFound;
