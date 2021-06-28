import React, { useState } from "react";

//ui
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
//reduc
import { useDispatch, useSelector } from "react-redux";
import { techActions } from "../../store/tech";

//Component
import TechDetail from "../../components/ProjectOverview/TechDetail";

const useStyles = makeStyles(() => ({
  large: {
    height: "300px",
    width: "300px",
    margin: "auto",
  },
  active: {
    backgroundColor: "green",
  },
}));

function ProjectDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const techName = useSelector((state) => state.tech.name);
  return (
    <Container
      maxWidth={false}
      style={{
        marginTop: "80px",
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
          Technology Stack
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={techName === "Tensorflow" ? classes.active : ""}>
            <Avatar
              onClick={() => {
                dispatch(techActions.setSelectedTech("Tensorflow"));
              }}
              alt="Tensorflow"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFlBfchjsrPlJvjc9ouq-cds1bQ6S2Zvy8Q&usqp=CAU"
              className={classes.large}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={techName === "AWS" ? classes.active : ""}>
            <Avatar
              onClick={() => {
                dispatch(techActions.setSelectedTech("AWS"));
              }}
              alt="Aws"
              src="data:image/png;base64,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"
              className={classes.large}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={techName === "Flutter" ? classes.active : ""}>
            <Avatar
              onClick={() => {
                dispatch(techActions.setSelectedTech("Flutter"));
              }}
              alt="Flutter"
              src="data:image/png;base64,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"
              className={classes.large}
            />
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={techName === "Mern" ? classes.active : ""}>
            <Avatar
              onClick={() => {
                dispatch(techActions.setSelectedTech("Mern"));
              }}
              alt="Mern"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpz0Vzt5El8jgfzGsHEOsemwdzwaFt9jpnQ&usqp=CAU"
              className={classes.large}
            />
          </Paper>
        </Grid>
      </Grid>

      <TechDetail></TechDetail>
    </Container>
  );
}

export default ProjectDetail;
