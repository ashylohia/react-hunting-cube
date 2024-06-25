import { useMemo } from "react";
import { Card, Grid, CardContent, Skeleton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const RenderSkeletons = ({ isRandomMeal }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const skeletonArray = useMemo(() => {
    const num = isRandomMeal ? 1 : 8;
    return Array.from(new Array(num));
  }, [isRandomMeal]);

  return skeletonArray.map((_, index) => (
    <Grid item md={isRandomMeal ? 12 : 3} xs={12} key={`skeleton_${index}`}>
      <Card>
        <Skeleton
          variant="rectangular"
          height={isMobile ? 200 : isRandomMeal ? 400 : 194}
        />
        <CardContent>
          <Skeleton animation="wave" variant="text" width="60%" />
          <Skeleton animation="wave" variant="text" width="40%" />
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default RenderSkeletons;
