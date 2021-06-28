import React from "react";
//redux
import { useSelector } from "react-redux";

//Ui
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { LEAVE_DATA } from "./leaveData";

function LeaveDetail() {
  const leaveName = useSelector((state) => state.leave.name);

  const leaveData = LEAVE_DATA.filter((item) => item.name === leaveName);

  return (
    <Paper
      elevation={3}
      style={{
        width: "90%",
        marginTop: "20px",
        padding: "20px",
        margin: "auto",
        fontFamily: "Open Sans",
      }}
    >
      {leaveData.length <= 0 ? (
        <Typography
          variant="h5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Open Sans",
            fontSize: "2rem",
            color: "#2da25c",
          }}
          gutterBottom
        >
          Select Leave
        </Typography>
      ) : (
        <>
          {" "}
          <Typography
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Open Sans",
              fontSize: "2rem",
              color: "#2da25c",
            }}
            gutterBottom
          >
            {leaveData[0]?.name}
          </Typography>
          <Typography
            variant="body1"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Open Sans",
            }}
            color="textSecondary"
            gutterBottom
          >
            {leaveData[0]?.description}
          </Typography>
          <Typography
            variant="h6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              fontSize: "bolder",
              fontFamily: "Open Sans",
            }}
            gutterBottom
          >
            Symptoms
          </Typography>
          <ul>
            {leaveData[0]?.symptoms.map((item) => {
              return (
                <li>
                  <Typography
                    variant="body1"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      fontFamily: "Open Sans",
                    }}
                    color="textSecondary"
                    gutterBottom
                  >
                    <ArrowRightAltIcon></ArrowRightAltIcon>
                    {item}
                  </Typography>
                </li>
              );
            })}
          </ul>
          <Typography
            variant="h6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
              fontFamily: "Open Sans",
            }}
            gutterBottom
          >
            Solutions
          </Typography>
          <ul>
            {leaveData[0]?.solution.map((item) => {
              return (
                <li>
                  <Typography
                    variant="body1"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      fontFamily: "Open Sans",
                    }}
                    color="textSecondary"
                    gutterBottom
                  >
                    <ArrowRightAltIcon></ArrowRightAltIcon>
                    {item}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00cba9"
          fillOpacity="1"
          d="M0,128L26.7,122.7C53.3,117,107,107,160,106.7C213.3,107,267,117,320,112C373.3,107,427,85,480,101.3C533.3,117,587,171,640,202.7C693.3,235,747,245,800,234.7C853.3,224,907,192,960,165.3C1013.3,139,1067,117,1120,112C1173.3,107,1227,117,1280,106.7C1333.3,96,1387,64,1413,48L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </Paper>
  );
}

export default LeaveDetail;
