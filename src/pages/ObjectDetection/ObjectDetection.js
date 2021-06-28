import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";

//UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//compoent
import LeavesDataItem from "../../components/ObjectDetection/LeavesDataList";

const useStyles = makeStyles({
  root: {
    backgroundColor: "whitesmoke",
  },
});

function ObjectDetection() {
  return (
    <React.Fragment>
      <Container
        maxWidth={false}
        style={{
          marginTop: "70px",
          backgroundColor: "white",
        }}
      >
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            color: "#2ca15b",
          }}
          variant="h3"
        >
          Object Detection on Tea leaves
        </Typography>

        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
          variant="body1"
        >
          Performed object detection on tea leaves using SSD mobilenet v2 from
          tensorflow
        </Typography>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <ReactPlayer url="https://youtu.be/OvmQLRk17_0" controls />
        </Box>
      </Container>
      <LeavesDataItem></LeavesDataItem>
    </React.Fragment>
  );
}

export default ObjectDetection;
