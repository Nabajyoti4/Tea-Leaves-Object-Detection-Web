import React from "react";
import "./About.css";

//Ui
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function About() {
  return (
    <Container maxWidth={false} className="about">
      <div className="about-txt">
        <Typography
          variant="h5"
          style={{
            fontFamily: "calibri",
            fontSize: "2rem",
            color: "#2ca15b",
          }}
          gutterBottom
        >
          About Our Project
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontFamily: "Open Sans",
          }}
          gutterBottom
        >
          During the plantation of the plants peoples faces many issues like
          plant getting decayed due to some diseases. The proposed solution will
          provide an application for user where user need to the input the image
          of the leaf. It will categorize plant leaves as healthy or infected
          which will help people in detection of the disease in plants.{" "}
          <br></br>
          <Button
            endIcon={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
            style={{
              fontFamily: "Open Sans",
              color: "#35a362",
              marginTop: "5px",
            }}
          >
            More About Project
          </Button>
        </Typography>
      </div>
    </Container>
  );
}

export default About;
