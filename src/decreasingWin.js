import * as React from "react";
import { Typography, Grid, Box } from "@mui/material";

export default function DecreasingWin(props) {
  //destructuring props
  const decData = props.decreasingWinProps;

  return (
    <Box sx={{ m: 1 }}>
      <Grid
        container
        spacing={1}
        sx={{ m: 0.1, overflowY: "scroll", maxHeight: "465px" }}
      >
        {decData === null ? (
          <Grid item sx={12}>
            <Typography>No Data Exists Yet For Decreasing Win</Typography>
          </Grid>
        ) : (
          decData.map((el) => (
            <>
              <Grid
                item
                xs={12}
                sx={{ mt: 0, bgcolor: "rgb(250, 160, 160, 0.2)" }}
              >
                <Typography>{`Name: ${el.name}`}</Typography>
              </Grid>
              <Grid item xs={0.2}></Grid>
              <Grid item xs={1.8}>
                <Typography>{`Weight:`}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{`Value: ${el.weight.value}`}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{`Description: ${el.weight.description}`}</Typography>
              </Grid>
              <Grid item xs={0.2} sx={{ mb: 2 }}></Grid>
              <Grid item xs={11.8} sx={{ mb: 2 }}>
                <Typography>{`Message: ${el.message}`}</Typography>
              </Grid>
            </>
          ))
        )}
      </Grid>
    </Box>
  );
}
