import React from "react";
import cssClass from "./Team.module.css";

//image
import BanImage from "./ban.jpeg";
import rajuImage from "./raju.jpeg";
import nabaImage from "./naba.jpeg";

//Ui
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const TEAM_DATA = [
  {
    name: "Nabajyoti Borah",
    image: nabaImage,
    work: "AWS, Tensorflow, React",
    github: "https://github.com/Nabajyoti4",
    linkedin: "https://www.linkedin.com/in/nabajyoti-borah-944000160/",
  },
  {
    name: "Raju Moni Borah",
    image: rajuImage,
    work: "Flutter, Tensorflow, AWS",
    github: "https://github.com/raju-borah",
    linkedin: "https://www.linkedin.com/in/raju-moni-borah-9bbaa1173/",
  },
  {
    name: "Bandan Boruah",
    image: BanImage,
    work: "Node, Mongo, React",
    github: "https://github.com/Bandan199",
    linkedin: "https://www.linkedin.com/in/bandan-boruah-900aa4173/",
  },
];

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
  },
  large: {
    height: "200px",
    width: "200px",
  },
}));

function Team() {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      style={{
        padding: "80px",
        backgroundColor: "#35a362",
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
            fontSize: "2rem",
            color: "white",
          }}
          gutterBottom
        >
          Team of Possibilities
        </Typography>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={2}>
          {TEAM_DATA.map((member, index) => {
            return (
              <Grid item xs className={classes.cardGrid} key={index}>
                <Box className={`${classes.paper} ${cssClass.TeamCard}`}>
                  <Avatar
                    alt={member.name}
                    src={member.image}
                    className={classes.large}
                  />
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: "Open Sans",
                      color: "black",
                    }}
                    gutterBottom
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Open Sans",
                      color: "#35a362",
                      fontStyle: "italic",
                    }}
                    gutterBottom
                  >
                    {member.work}
                  </Typography>
                  <IconButton
                    onClick={() => window.open(member.github, "_blank")}
                  >
                    <GitHubIcon></GitHubIcon>
                  </IconButton>
                  <IconButton
                    onClick={() => window.open(member.linkedin, "_blank")}
                  >
                    <LinkedInIcon></LinkedInIcon>
                  </IconButton>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default Team;
