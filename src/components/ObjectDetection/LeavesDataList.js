import React from "react";

//ui
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

//components
import LeavesDataItem from "./LeavesDataItem";

//images
import redRust from "./red.png";
import spider from "./spider.png";
import helopeltis from "./helo.png";
import LeaveDetail from "./LeaveDetail";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "20px",
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

const LEAF_DATA = [
  {
    name: "Helopeltis",
    description: "Helopletis leave",
    link: "",
    image: helopeltis,
  },
  {
    name: "Red Spider Mite",
    description: "red Spider Mite leave",
    link: "",
    image: spider,
  },
  {
    name: "Red Rust",
    description: "Red Rust leave",
    link: "",
    image: redRust,
  },
];

function LeavesDataList() {
  const classes = useStyles();
  return (
    <Box
      width="auto"
      style={{
        backgroundColor: "whitesmoke",
        padding: "50px",
        marginTop: "10px",
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
            color: "#2da25c",
          }}
          gutterBottom
        >
          Tea Leaves We Collected and Used
        </Typography>
      </Box>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {LEAF_DATA.map((leaf, index) => {
            return (
              <Grid item xs className={classes.cardGrid}>
                <LeavesDataItem
                  key={index}
                  image={leaf.image}
                  title={leaf.name}
                  description={leaf.description}
                  link=""
                ></LeavesDataItem>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <LeaveDetail></LeaveDetail>
    </Box>
  );
}

export default LeavesDataList;
