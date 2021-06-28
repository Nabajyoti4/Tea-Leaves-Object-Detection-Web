import React from "react";
import "./Home.css";

//Matrial UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

//compoennt
import About from "../../components/Home/About/About";
import Service from "../../components/Home/Services/Service";
import { Box } from "@material-ui/core";
import EcoIcon from "@material-ui/icons/Eco";
import Team from "../../components/Home/Team/Team";
import Guide from "../../components/Home/Guide/Guide";
import Achievment from "../../components/Home/Achievment/Achievment";

function Home() {
  return (
    <React.Fragment>
      <Container maxWidth={false} className="main">
        <Box
          style={{
            padding: "80px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Open Sans",
              color: "#2ca15b",
            }}
            variant="h1"
          >
            Tea Leaves Object Detection{" "}
            <EcoIcon
              style={{
                fontSize: "80px",
              }}
            ></EcoIcon>
          </Typography>
        </Box>
      </Container>
      <About></About>
      <Service></Service>
      <Achievment></Achievment>
      <Guide></Guide>
      <Team></Team>
    </React.Fragment>
  );
}

export default Home;
