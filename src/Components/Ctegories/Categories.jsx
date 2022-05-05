import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
import women from "../../Common/assets/Images/women.png";
import bags from "../../Common/assets/Images/bags.png";
import brush from "../../Common/assets/Images/brush.png";
import jewllary from "../../Common/assets/Images/jewllary.png";
import watches from "../../Common/assets/Images/watches.png";
import men from "../../Common/assets/Images/men.png";
import { useStyles } from "./CategoriesStyle";
import {
  Container,
  Box,
  Paper,
  Grid,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Box mt={4} mb={2} sx={{ flexGrow: 1 }}>
          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            <Grid item sm={3} md={2} xs={6}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={women}
                    alt="Women"
                  />
                </div>
                <Typography variant="h5" align="center">
                  Women
                </Typography>
                <Typography variant="subtitle1" align="center">
                  38 Items
                </Typography>
              </div>
            </Grid>
            <Grid item sm={3} md={2} xs={6}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={watches}
                    alt="watches"
                  />
                </div>
                <Typography variant="h5" align="center">
                  Watches
                </Typography>
                <Typography variant="subtitle1" align="center">
                  52 Items
                </Typography>
              </div>
            </Grid>
            <Grid item sm={3} md={2} xs={6}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={bags}
                    alt="bags"
                  />
                </div>
                <Typography variant="h5" align="center">
                  Bags
                </Typography>
                <Typography variant="subtitle1" align="center">
                  52 Items
                </Typography>
              </div>
            </Grid>
            <Grid item sm={3} md={2} xs={6}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img className={classes.img_responsive} src={men} alt="men" />
                </div>
                <Typography variant="h5" align="center">
                  Men
                </Typography>
                <Typography variant="subtitle1" align="center">
                  52 Items
                </Typography>
              </div>
            </Grid>
            <Grid item sm={3} md={2} xs={6}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={brush}
                    alt="brush"
                  />
                </div>
                <Typography variant="h5" align="center">
                  MakeUp
                </Typography>
                <Typography variant="subtitle1" align="center">
                  52 Items
                </Typography>
              </div>
            </Grid>
            <Grid item sm={3} md={2} xs={6}>
              <div className={classes.gridItem}>
                <div className={classes.img_root}>
                  <img
                    className={classes.img_responsive}
                    src={jewllary}
                    alt="jewllary"
                  />
                </div>
                <Typography variant="h5" align="center">
                  Jewllary
                </Typography>
                <Typography variant="subtitle1" align="center">
                  52 Items
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* <Divider light /> */}
    </>
  );
};
export default Categories;
