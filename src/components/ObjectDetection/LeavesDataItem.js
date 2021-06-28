import React from "react";


//redux
//redux
import { useDispatch } from "react-redux";

//Uui
import { makeStyles } from "@material-ui/core/styles";
//card ui
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { leaveActions } from "../../store/leave";

const useStyles = makeStyles({
  root: {
    width: 340,
    maxWidth: 340,
  },
  media: {
    height: 200,
  },
});

function LeavesDataItem(props) {
  const { image, title, description } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card
      onClick={() => {
        dispatch(leaveActions.setSelectedLeave(title));
      }}
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default LeavesDataItem;
