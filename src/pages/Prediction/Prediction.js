import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";

//redux
import { useDispatch, useSelector } from "react-redux";

//UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import EcoIcon from "@material-ui/icons/Eco";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
//component
import PredictionResult from "../../components/Prediction/PredictionResult";
import { leaveActions } from "../../store/leave";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  dropZone: {
    height: "100%",
    fullWidth: "true",
    margin: "auto",
    color: "#2da25c",
  },
  previewContainer: {
    container: "true",
    width: "100%",
    height: "100%",
  },
  preview: {
    xs: "12",
    margin: "auto",
  },
  previewImg: {
    height: "100%",
    width: "100%",
  },
  loadIcon: {
    border: "16px solid #eee",
    borderRadius: "50%",
    color: "#2ca15b",
    width: "1cm",
    height: "1cm",
    animation: "$slideDown 2s infinite",
  },
  "@keyframes slideDown": {
    "0%": { borderTop: "16px solid #2ca15b", color: "#2ca15b" },
    "25%": { borderLeft: "16px solid #2ca15b", color: "red" },
    "75%": { borderBottom: "16px solid #2ca15b", color: "#2ca15b" },
    "100%": { borderRight: "16px solid #2ca15b", color: "red" },
  },
}));

function Prediction() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.leave.loading);
  const [thresh, setThresh] = useState(0);
  const [boxes, setBoxes] = useState(0);

  const [file, setFile] = useState([]);

  const getPrediction = async () => {
    if (file === undefined) {
      setType("info");
      setMessage("Insert atleast a Image to Continue");
      setOpen(true);
      return;
    }

    if (thresh <= 0 || boxes <= 0) {
      setType("warning");
      setMessage(
        "Values of thresh and Number of boxes cant be 0 or less than zero"
      );
      setOpen(true);
      return;
    }

    if (thresh <= 0 || thresh > 0.9) {
      setType("warning");
      setMessage(
        "Values of thresh cannot exceed 0.1 to 0.9 range, Please give a value like 0.1 , 0.4"
      );
      setOpen(true);
      return;
    }

    if (boxes <= 5 || boxes > 50) {
      setType("warning");
      setMessage("Values of boxes must be in range of 5 to 50");
      setOpen(true);
      return;
    }

    var bodyFormData = new FormData();
    bodyFormData.append("thresh", thresh);
    bodyFormData.append("boxes", boxes);
    bodyFormData.append("file", file);

    try {
      dispatch(leaveActions.setLoading(true));
      const response = await axios.post(
        "http://ec2-54-82-124-201.compute-1.amazonaws.com:8080/uploadfile/",
        bodyFormData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      dispatch(leaveActions.setResultData(response.data));
    } catch (err) {
      console.log(err);
      setType("error");
      setMessage(
        "There maybe some network or server issue , Please try again Later"
      );
      setOpen(true);
    }
    dispatch(leaveActions.setLoading(false));
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container
      style={{
        marginTop: "70px",
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
          style={{
            marginTop: "30px",
            color: "#2ca15b",
            fontFamily: "Open Sans",
          }}
          variant="h3"
        >
          Predict Your Leaf Image
        </Typography>
      </Box>

      {loading && (
        <Paper
          elevation={4}
          style={{
            padding: "30px",
          }}
        >
          <Grid
            container
            spacing={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid item xs={12}>
              <EcoIcon className={classes.loadIcon}></EcoIcon>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{
                  marginTop: "30px",
                  color: "#2ca15b",
                  fontFamily: "Open Sans",
                }}
                variant="h6"
              >
                Predicting your leaf for any disease , Please wait it may take
                around 20 seconds
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      )}

      {!loading && (
        <Paper
          elevation={2}
          style={{
            padding: "10px",
          }}
        >
          <DropzoneArea
            acceptedFiles={["image/*"]}
            dropzoneClass={classes.dropZone}
            previewGridClasses={{
              item: classes.preview,
            }}
            getPreviewIcon={(file) => {
              if (file.file.type.split("/")[0] === "image")
                return (
                  <img
                    className={classes.previewImg}
                    role="presentation"
                    src={file.data}
                    alt="leaf"
                  />
                );
            }}
            Icon={EcoIcon}
            filesLimit={1}
            dropzoneText={"Drag and drop an Leaf Image Here"}
            onChange={(files) => {
              setFile(files[0]);
            }}
          />
          <Grid
            container
            spacing={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <Grid item xs={6}>
              <TextField
                id="thresh"
                label="Threshhold Value"
                helperText="The range must be between 0.1 to 0.9"
                type="number"
                onChange={(e) => {
                  setThresh(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0.1, max: 0.9 } }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="boxes"
                label="Maximun no. of Boxes"
                helperText="The range must be between 5 to 50 max"
                type="number"
                onChange={(e) => {
                  setBoxes(e.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 5, max: 50 } }}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button
              disabled={loading}
              onClick={getPrediction}
              style={{
                backgroundColor: loading ? "gray" : "#34a261",
                color: "white",
              }}
              variant="contained"
            >
              {loading ? "Predicting the Image" : "Predict Image"}
            </Button>
          </Box>
        </Paper>
      )}

      <PredictionResult></PredictionResult>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Prediction;
