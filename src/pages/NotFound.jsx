import { Grid } from "@mui/material";

const NotFound = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <img
          src="/react-hunting-cube/error-404.jpg"
          style={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default NotFound;
