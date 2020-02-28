import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import learning from "../resources/images/learning.png";

const useStyles = makeStyles({
  root: {
    height: "60vh",
    width: "40vh",
    marginTop: "10vh",
    marginLeft: "10vh",
    marginRight: "10vh",
    alignItems: "center"
  },
  card: {
    margin: "5px"
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
    marginBottom: "15%"
  },
  rtl: {
    direction: "rtl",
    textAlign: "right"
  }
});

export default function MainContextCard(props) {
  const classes = useStyles();
  const logoName = props.context.image;
  let logo;
  switch (logoName) {
    case "learning":
      logo = learning;
      break;
    default:
      logo = null;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={logo} alt={props.context.title} className={classes.logo} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.rtl}
          >
            {props.context.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.rtl}
          >
            {props.context.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
