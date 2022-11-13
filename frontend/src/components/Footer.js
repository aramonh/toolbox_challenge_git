import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import "../assets/effects.scss"
export const Footer= () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <a href="https://www.toolboxtve.com/"><img className="zoom_out" src={require('../assets/toolboxlogo.png')} alt="logo" height={50} /></a>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | THE MOST INNOVATIVE OTT SOLUTIONS`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;