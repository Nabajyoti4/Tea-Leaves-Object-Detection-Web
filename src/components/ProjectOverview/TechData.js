import awsImage from "./aws.jpeg";
import tensorImage from "./tensor.jpeg";

const TECH_DATA = [
  {
    name: "AWS",
    heading: "How Aws helped us in production ?",
    image: awsImage,
    description:
      "With Aws we are able to deliver our model as an api to all devices , which can use our api to make prediction on tea leaves images. With AWS EC2 t2.xlarge instance type we got sufficient computing powwer to make prediction on an image , but then also without GPU inference time is still more.",
  },
  {
    name: "Tensorflow",
    heading: "Backbone of your Project",
    image: tensorImage,
    description:
      "The approach we used for classification of disease in leaves is object detection , because simple image classification won't help much to identify multiple disease in a single leaf or image. And to make all these possible we used Tensorflow Model zoo 2 object detection models SSD mobilenet v2 and Faster RCNN ",
  },
  {
    name: "Flutter",
    heading: "How we are able to reach the small Devices ?",
    image: "",
    description: "We will update soon",
  },
  {
    name: "Mern",
    heading: "How we give users experience of our project",
    image: "",
    description: "We will update soon",
  },
];

const _TECH_DATA = TECH_DATA;
export { _TECH_DATA as TECH_DATA };
