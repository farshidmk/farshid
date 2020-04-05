import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import imgProfile from "../../resources/images/profile.jpg";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Zoom from "@material-ui/core/Zoom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: "50%",
    width: "25%",
    display: "flex",
    alignItems: "center",
    // marginRight: "20%",
    marginTop: "1.5vh",
    [theme.breakpoints.down("sm")]: {
      width: "30%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  name: {
    display: "flex",
    alignItems: "center",
    // marginRight: "8%",
    marginTop: "1vh",
    fontSize: "2.7vw",
    fontFamily: "bamshad",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      display: "block",
      textAlign: "center",
      // fontSize: " 10vw"
    },
  },
  imageNameDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: "auto",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  imageNameRootDiv: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  header: {
    display: "flex",
    marginTop: "0vh",
    backgroundColor: theme.palette.primary.light,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  detailsElements: {
    marginLeft: "1vh",
  },
  showNumber: {
    fontFamily: "bamshad",
    cursor: "zoom-in",
  },
  listItem: {
    padding: "0px",
  },
}));

export default function ResumeHeader() {
  const classes = useStyles();
  const [showNumber, setShowNumber] = useState(false);

  return (
    <div className={classes.header}>
      <div className={classes.imageNameRootDiv}>
        <div className={classes.imageNameDiv}>
          <img className={classes.image} src={imgProfile} alt="profile_image" />
          <Typography className={classes.name}>
            فرشید منوچهری کلانتری
          </Typography>
        </div>
      </div>

      <div className={classes.details}>
        <List component="nav" aria-labelledby="details">
          <ListItem className={classes.listItem}>
            <ListItemText
              className={classes.detailsElements}
              primary={
                <Typography variant="subtitle1">
                  farshid.manoochehri.k@gmail.com
                </Typography>
              }
            />
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText
              className={classes.detailsElements}
              primary={
                !showNumber ? (
                  <Typography
                    variant="subtitle1"
                    onClick={() => {
                      setShowNumber(true);
                    }}
                    className={classes.showNumber}
                  >
                    نمایش شماره
                  </Typography>
                ) : (
                  <Zoom in={showNumber} timeout={{ enter: 400, exit: 10 }}>
                    <Typography variant="subtitle1">09123456789</Typography>
                  </Zoom>
                )
              }
            />
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText
              className={classes.detailsElements}
              primary={
                <Typography variant="subtitle1">
                  Tehran, Mirzaye-Shirazi
                </Typography>
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
