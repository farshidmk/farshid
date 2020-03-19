import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import imgProfile from "../resources/images/profile.jpg";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: "50%",
    width: "20%",
    display: "flex",
    alignItems: "center",
    marginRight: "20%",
    marginTop: "3vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  name: {
    display: "flex",
    alignItems: "center",
    marginRight: "10%",
    marginTop: "1vh",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "center"
      // fontSize: " 10vw"
    }
  },
  imageNameDiv: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      border: "2px solid red"
    }
  },
  header: {
    display: "flex",
    marginTop: "0vh",
    backgroundColor: "#82b0fa"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  detailsElements: {
    marginLeft: "1vh"
  }
}));

export default function ResumeHeader() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.imageNameDiv}>
        <img className={classes.image} src={imgProfile} alt="profile_image" />
        <Typography variant="h4" className={classes.name}>
          فرشید منوچهری کلانتری
        </Typography>
      </div>

      <div className={classes.details}>
        <List component="nav" aria-labelledby="details">
          <ListItem>
            <ListItemText
              className={classes.detailsElements}
              primary={
                <Typography variant="h5">
                  farshid.manoochehri.k@gmail.com
                </Typography>
              }
            />
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.detailsElements}
              primary={<Typography variant="h5">09123901027</Typography>}
            />
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.detailsElements}
              primary={
                <Typography variant="h6">Tehran, Mirzaye-Shirazi</Typography>
              }
            />
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
