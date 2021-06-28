import React from "react";

//reduc
import { useSelector } from "react-redux";

//data
import { TECH_DATA } from "./TechData";

//ui
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

function TechDetail() {
  const techName = useSelector((state) => state.tech.name);

  const techData = TECH_DATA.filter((item) => item.name === techName);

  return (
    <Paper
      style={{
        marginTop: "10px",
        padding: "20px",
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
          {techData[0]?.heading}
        </Typography>
      </Box>
      <img width="100%" alt={techData[0]?.name} src={techData[0]?.image}></img>
      <Typography
        variant="body1"
        style={{
          fontFamily: "Open Sans",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        gutterBottom
      >
        {techData[0]?.description}
      </Typography>
    </Paper>
  );
}

export default TechDetail;
