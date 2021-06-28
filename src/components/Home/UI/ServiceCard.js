import React from "react";
import { useHistory } from "react-router";

//Uui
import { makeStyles } from "@material-ui/core/styles";
//card ui
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 345,
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

function ServiceCard(props) {
  const { image, title, description, link } = props;
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card
      onClick={() => {
        history.push(link);
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

export default ServiceCard;
