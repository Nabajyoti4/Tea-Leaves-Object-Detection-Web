import React from "react";

//UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

//component
import ServiceCard from "../UI/ServiceCard";
import object from "./faster_red_rust.png";
import segmentation from "./sample.jpg";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Service() {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      style={{
        padding: "100px",
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
            fontFamily: "calibri",
            fontSize: "2rem",
            color: "#2ca15b",
          }}
          gutterBottom
        >
          Projects We Made
        </Typography>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs className={classes.cardGrid}>
            <ServiceCard
              image={object}
              title="Object Detection On Tea Leaves"
              description="Object detection on tea leaves using SSD mobilenet v2 model trained on tensorflow"
              link="/object-detection"
            ></ServiceCard>
          </Grid>
          <Grid item xs className={classes.cardGrid}>
            <ServiceCard
              image={segmentation}
              title="Segmentation Of tea leave and Disease"
              description="Segmentation of tea leaves and disease parts using the tensorflow model MASK RCNN, to find the disease area fo the leave"
              link=""
            ></ServiceCard>
          </Grid>
        </Grid>
       
      </div>
    </Container>
  );
}

export default Service;
