import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import image from "./achei.jpg";

function Achievment() {
  return (
    <Container
      maxWidth={false}
      style={{
        padding: "50px",
        backgroundColor: "whitesmoke",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          style={{
            fontFamily: "Open Sans",
            color: "#35a362",
            fontSize: "2rem",
          }}
          gutterBottom
        >
          Our Recent Achievement
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="50%" height="70%" src={image} alt="acheivement"></img>
      </Box>
    </Container>
  );
}

export default Achievment;
