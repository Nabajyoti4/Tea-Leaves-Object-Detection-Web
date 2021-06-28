import React from "react";

//Ui
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

//imgae
import sajalImage from "./sajal.jpg";
import puruImage from "./puru.jpg";

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
  paper: {
    padding: "20px",
    textAlign: "center",
    color: "white",
    backgroundColor: "#35a362",
  },
  large: {
    height: "300px",
    width: "300px",
    margin: "auto",
  },
}));

const GUIDE_DATA = [
  {
    name: "Dr. Sajal Saha",
    designation: "Dean-RIIQA & Professor, Dept. of CSE",
    image: sajalImage,
  },
  {
    name: "Dr. Purnendu Bikash Acharjee",
    designation: "Assistant Professor, Associate Dean",
    image: puruImage,
  },
];

function Guide() {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      style={{
        padding: "80px",
        backgroundColor: "white",
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
          Our Expert Guidence
        </Typography>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={2}>
          {GUIDE_DATA.map((guide, index) => {
            return (
              <Grid item xs className={classes.cardGrid} key={index}>
                <Paper elevation={4} className={classes.paper}>
                  <Avatar
                    alt={guide.name}
                    src={guide.image}
                    className={classes.large}
                  />
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: "Open Sans",
                    }}
                    gutterBottom
                  >
                    {guide.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontFamily: "Open Sans",

                      fontStyle: "italic",
                    }}
                    gutterBottom
                  >
                    {guide.designation}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Guide;
