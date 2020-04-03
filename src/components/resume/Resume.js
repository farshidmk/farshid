import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import PriorityHighTwoToneIcon from "@material-ui/icons/PriorityHighTwoTone";
import { educations, abilities, otherAbilities } from "./ResumeTexts";
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
    fontFamily: "dastnevis",
    fontSize: "1.5vw"
  },
  historyText: {
    fontFamily: "bamshad",
    fontSize: "1.5vw",
    textAlign: "rtl",
    marginLeft: "auto",
    marginRight: "5vw"
  },
  headerText: {
    fontFamily: "bamshad",
    fontSize: "2.2vw"
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
  cardRootOtherAbilities: {
    width: "45%",
    margin: "2%",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    }
  },
  expansionDetails: {
    backgroundColor: theme.palette.grey[200]
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    padding: "8px",
    border: `1px solid ${theme.palette.primary.dark}`
  },
  stars: {
    marginRight: "auto"
  },
  avatar: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.primary.dark
  },
  circularProgress: {
    color: "gold"
  },
  detailsSection: {
    // maxHeight: "90vh",
    overflow: "auto"
  },
  otherAbilitiesText: {
    fontFamily: "esfahan",
    textAlign: "right",
    marginRight: "10px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  }
}));

export default function Resume() {
  const [expanded, setExpanded] = React.useState("panel1");
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ResumeHeader />

      <div className={classes.detailsSection}>
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography className={classes.headerText}>درباره ی من</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionDetails}>
            <Typography align="right" className={classes.text}>
              متولد سال 1371 در تهران هستم، مدرک کارشناسی خود را در رشته نرم
              افزار از دانشگاه آزاد تهران شمال دریافت کرده ام و در حال حاضر
              دانشجوی ارشد نرم افزار دانشگاه صنعتی شیراز ورودی سال 96 میباشم. از
              نظر وضعیت خدمت سربازی مشمول هستم و به برنامه نویسی تحت وب علاقه
              مند می باشم
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
            <Typography className={classes.headerText}> تحصیلات</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionDetails}>
            <Grid container className={classes.educationSection} spacing={1}>
              {educations.map((ed, index) => {
                return (
                  <Grid item sm={12} md={6} key={index}>
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
          expanded={expanded === "panel25"}
          onChange={handleChange("panel25")}
        >
          <ExpansionPanelSummary
            aria-controls="panel3d-content"
            id="panel25d-header"
          >
            <Typography className={classes.headerText}>سابقه کاری</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            className={classes.expansionDetails}
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <p className={classes.historyText}>
              {bull} کار آموز در شرکت پارس ريز پرداز ۱۳۹۰-۱۳۹۳
            </p>
            <p className={classes.historyText}>
              {bull} برنامه نويس در شرکت اندیشه نگار پارس ۱۳۹۴-۱۳۹۵
            </p>
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
            <Typography className={classes.headerText}>توانایی ها</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionDetails}>
            <Grid container className={classes.educationSection} spacing={1}>
              {abilities.map((ability, index) => {
                return (
                  <Box m={1} className={classes.box} key={index}>
                    <Typography variant="h6" style={{ marginRight: "auto" }}>
                      {ability.title}
                    </Typography>
                    <StarCreator
                      className={classes.stars}
                      stars={ability.star}
                    />
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
            <Typography className={classes.headerText}>سایر</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionDetails}>
            <Grid container spacing={1}>
              {otherAbilities.map((oa, index) => {
                return (
                  <Card
                    variant="outlined"
                    className={classes.cardRootOtherAbilities}
                    key={index}
                  >
                    <CardHeader
                      avatar={oa.icon}
                      title={
                        <Typography className={classes.otherAbilitiesText}>
                          {oa.title}
                        </Typography>
                      }
                      subheader={
                        <Typography
                          className={classes.otherAbilitiesText}
                          color="primary"
                        >
                          {oa.subheader}
                        </Typography>
                      }
                    />
                  </Card>
                );
              })}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}
