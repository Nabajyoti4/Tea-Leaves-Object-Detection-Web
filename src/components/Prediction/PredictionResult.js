import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Chart from "react-google-charts";
//reduc
import { useSelector } from "react-redux";

//Ui
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
const modals = ["SSD MOBILENET V2", "FASTER RCNN"];

// const RESULT = {
//   ssd_scores: [57.48, 57.11, 54.99, 53.07, 52.56, 50.92, 50.79],
//   faster_rcnn_scores: [
//     93.08, 88.3, 84.17, 83.93, 80.11, 79.7, 78.04, 66.06, 65.85, 63.2, 93.08,
//     88.3, 84.17, 83.93, 80.11, 79.7, 78.04, 66.06, 65.85, 63.2, 93.08, 88.3,
//     84.17, 83.93, 80.11, 79.7, 78.04, 66.06, 65.85, 63.2, 93.08, 88.3, 84.17,
//     83.93, 80.11, 79.7, 78.04, 66.06, 65.85, 63.2,
//   ],
//   ssd_image_name:
//     "predictions/01a8e1da-d68a-11eb-bf05-0ae060310013-ssd-prediction.jpg",
//   faster_image_name:
//     "predictions/030e7d5a-d68a-11eb-bf05-0ae060310013-faster_rcnn-prediction.jpg",
//   ssd_classes: [2, 2, 2, 2, 2, 2, 2],
//   faster_rcnn_classes: [
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//     2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
//   ],
// };

function PredictionResult() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const RESULT = useSelector((state) => state.leave.result);

  const convert = (data) => {
    if (data === 1) {
      return "Helopeltis";
    }
    if (data === 2) {
      return "Red spider Mite";
    }
    if (data === 3) {
      return "red Rust";
    }
  };

  function createChart(idx) {
    const chart_data = [["Disease Type", "Accuracy"]];

    const modal_class =
      idx === 0 ? RESULT.ssd_classes : RESULT.faster_rcnn_classes;
    const scores = idx === 0 ? RESULT.ssd_scores : RESULT.faster_rcnn_scores;

    modal_class?.map((data, index) => {
      return chart_data.push([`${convert(data)}${index}`, scores[index]]);
    });

    return chart_data;
  }

  const images = [
    `https://tea-object-detection-results.s3.amazonaws.com/${RESULT?.ssd_image_name}`,
    `https://tea-object-detection-results.s3.amazonaws.com/${RESULT?.faster_image_name}`,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Container>
      {Object.keys(RESULT).length !== 0 && (
        <React.Fragment>
          {images.map((src, index) => (
            <Paper
              key={index}
              elevation={4}
              style={{
                padding: "10px",
                marginTop: "10px",
                display: "flex",
              }}
            >
              <img
                width="300px"
                height="300px"
                onClick={() => openImageViewer(index)}
                role="presentation"
                key={index}
                src={src}
                alt="leaf"
              />
              <Box>
                <Typography
                  style={{
                    color: "#2ca15b",
                    marginLeft: "10px",
                  }}
                  variant="h5"
                >
                  {modals[index]} PREDICTIONS
                </Typography>
                <Chart
                  width={600}
                  height={300}
                  chartType="ColumnChart"
                  loader={<CircularProgress></CircularProgress>}
                  data={createChart(index)}
                  options={{
                    title: modals[index],
                    chartArea: { width: "80%" },
                    hAxis: {
                      title: "Disease Type",
                      minValue: 0,
                    },
                    vAxis: {
                      title: "Accuracy",
                    },
                  }}
                />
              </Box>
            </Paper>
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </React.Fragment>
      )}
    </Container>
  );
}

export default PredictionResult;
