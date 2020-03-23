import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import CastForEducationTwoToneIcon from "@material-ui/icons/CastForEducationTwoTone";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import PriorityHighTwoToneIcon from "@material-ui/icons/PriorityHighTwoTone";
import { educations, abilities } from "./ResumeTexts";
import WorkIcon from "@material-ui/icons/Work";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import ResumeHeader from "./ResumeHeader";
import Box from "@material-ui/core/Box";
import StarCreator from "./StarCreator";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
  text: {
    fontFamily: "dastnevis"
  },
  educationSection: {
    direction: "ltr",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardRoot: {
    width: "80%",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark
  },
  expansionDetails: {
    backgroundColor: theme.palette.grey[200]
  },
  box: {
    display: "flex",
    alignItems: "center",
    width: "45%",
    padding: "8px",
    border: `1px solid ${theme.palette.primary.dark}`
  },
  stars: {
    marginLeft: "auto"
  },
  avatar: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.primary.dark
  }
}));

export default function Resume() {
  const [expanded, setExpanded] = React.useState("panel1");
  const classes = useStyles();

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ResumeHeader />

      <ExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography variant="h5">
            {" "}
            <AccessibilityNewIcon /> درباره ی من
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionDetails}>
          <Typography align="right" className={classes.text}>
            متولد سال 1371 در تهران هستم، مدرک کارشناسی خود را در رشته نرم افزار
            از دانشگاه آزاد تهران شمال دریافت کرده ام و در حال حاضر دانشجوی ارشد
            نرم افزار دانشگاه صنعتی شیراز ورودی سال 96 میباشم. از نظر وضعیت خدمت
            سربازی مشمول هستم و به برنامه نویسی تحت وب علاقه مند می باشم
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography variant="h5">
            <CastForEducationTwoToneIcon /> تحصیلات
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionDetails}>
          <Grid container className={classes.educationSection} spacing={1}>
            {educations.map(ed => {
              return (
                <Grid item sm={12} md={6}>
                  <Card className={classes.cardRoot}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="name" className={classes.avatar}>
                          {ed.avatar}
                        </Avatar>
                      }
                      action={
                        <IconButton
                          aria-label="more"
                          onClick={() => {
                            alert(
                              "In the future I will show special page for what ever learned from there!"
                            );
                          }}
                        >
                          <PriorityHighTwoToneIcon />
                        </IconButton>
                      }
                      title={ed.title}
                      subheader={ed.subheader}
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography variant="h5">
            {" "}
            <WorkIcon /> توانایی ها
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionDetails}>
          <Grid container className={classes.educationSection} spacing={1}>
            {abilities.map(ability => {
              return (
                <Box m={1} className={classes.box}>
                  <Typography variant="h6">{ability.title}</Typography>
                  <StarCreator className={classes.stars} stars={ability.star} />
                </Box>
              );
            })}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel4d-header"
        >
          <Typography variant="h5">
            {" "}
            <AddAlertIcon /> سایر توانایی ها
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionDetails}>
          <Grid container spacing={1}></Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
