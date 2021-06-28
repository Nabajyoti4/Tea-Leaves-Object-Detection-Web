import React from "react";

//ui
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";

//images
import segImage1 from "./seg1.png";
import segImage2 from "./seg2.jpg";
import labelImage from "./label.PNG";
import blueImage from "./blue.png";
import maskLeave from "./mask-leave.png";
import maskDisease from "./mask_disease.png";

function Segmentation() {
  return (
    <Container
      maxWidth={false}
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
          Segmentation To find Damaged Area in Leaf
        </Typography>
      </Box>

      <Paper
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <img width="45%" src={segImage1} alt="segmentation 1"></img>
        <img width="45%" src={segImage2} alt="segmentation 2"></img>
      </Paper>

      <Typography
        style={{
          marginTop: "30px",
          fontFamily: "Open Sans",
          textAlign: "center",
          padding: "50px",
        }}
        variant="body1"
      >
        In our last project we find the disease parts in leave using object
        detection , but now for this project we are going to train a
        segmentation model from tensorflow model zoo 2. The model we used for
        instance segmentation is Mask R-CNN Inception ResNet V2, the model
        developed above Faster R-CNN. It used Resnet101 and Resnet50 for feature
        extraction, R-CNN part for object detection and last masking of the
        object.
      </Typography>

      {/* label */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Open Sans",
            color: "#35a362",
          }}
          gutterBottom
        >
          Image Annotation Work
        </Typography>
      </Box>
      <Paper
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <img width="30%" height="30%" src={labelImage} alt="label"></img>
      </Paper>

      <Typography
        style={{
          marginTop: "30px",
          fontFamily: "Open Sans",
          textAlign: "center",
          padding: "50px",
        }}
        variant="body1"
      >
        For annotation of tea leaf images we used labelme, it can label images
        in polygon shape also, which is needed for Mask R-CNN model. Each image
        contains diseased leaf and also healthy leaf, but we labelled the
        diseases part of the leaf and the leaf itself, so that model can segment
        the leaf and the disease inside it also. The disease which are stick to
        each other are labelled in single polygon. The purpose of annotating
        both leaves and the disease is because we want to find the mask of both
        leaf and the disease, so that we can further find out the area of damage
        inside that leaf.
      </Typography>

      {/* Result */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Open Sans",
            color: "#35a362",
          }}
          gutterBottom
        >
          Inference Result
        </Typography>
      </Box>
      <Paper
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <img width="70%" height="30%" src={blueImage} alt="result"></img>
      </Paper>

      <Typography
        style={{
          marginTop: "30px",
          fontFamily: "Open Sans",
          textAlign: "center",
          padding: "50px",
        }}
        variant="body1"
      >
        The results we got are good for detecting the leave which contains the
        disease, but for the disease part it's not very good, the model was not
        able to find that much disease inside the leave.The reason for this is
        due to less number of training epocs and less data. In future we will
        add more data and leaf images to make the model more accurate.
      </Typography>

      {/* Damage Area Calculation */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontFamily: "Open Sans",
            color: "#35a362",
          }}
          gutterBottom
        >
          Damage Part calculation
        </Typography>
      </Box>
      <Paper
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <img width="30%" src={segImage2} alt="seg"></img>
        <img width="30%" src={maskLeave} alt="mask-leave"></img>
        <img width="30%" src={maskDisease} alt="mask-disease"></img>
      </Paper>

      <Typography
        style={{
          marginTop: "30px",
          fontFamily: "Open Sans",
          textAlign: "center",
          padding: "50px",
        }}
        variant="body1"
      >
        To calculate the damage area inside the leaf we used the approach of
        counting the pixels of the image. For this approach first we used the
        Mask value returned by the model. The Mask value is in the shape of
        [height, width, total objects found], For each object found in the image
        we get a mask value for it, which tells us about the polygon shape of
        the object. The value of the Mask value is in true and False value. True
        for the pixels where the object is found. We first converted these mask
        values into int type 0 and 1 and replaced the value of 1 with 255 to
        plot a black and white image of the leaf and diseases.To get the image
        for the disease part we used the above approach first to find the
        disease of a leaf and then added all the mask numpy arrays of the
        disease which are inside the leaf, which return a single numpy array,
        which can be plotted.  Now to get the area of disease and leaf, we
        calculated the white pixels in the image only. And then we just divided
        the area of disease with the leaf.<br></br>
        <strong>
          Till the publication and patent time being we cant discuss the Full
          technique related to finding the disease parts which belongs to a
          particular leaf.
        </strong>
      </Typography>
    </Container>
  );
}

export default Segmentation;
