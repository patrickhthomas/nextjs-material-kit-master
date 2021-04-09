import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Divider from "@material-ui/core/Divider"
import classNames from "classnames";
// core components
import Grid from "@material-ui/core/Grid";
import NavPills from "components/NavPills/NavPills.js";
import Paper from "@material-ui/core/Paper"
import AffirmativeLogo from "assets/img/Dribble1.png";
import CoopPreview from "assets/img/CoopPreview.svg";
import DandelionPreview from "assets/img/DandelionPreview.svg";

import BeerLabels from "assets/img/beer-labels.png";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";
import { Button } from "@material-ui/core";

import MyCarousel from "components/MyCarousel.js";
import PackageCarousel from "components/PackageCarousel.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    elevation: '7',
    borderRadius: '24px',
    marginTop: '96px',
    maxWidth: '1280px',
    margin: 'auto'
  },


}));

export default function VisualNavPills() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
    );

  return (
    <Paper className={classes.paper}>
      <div className={classes.container}>

        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Visual Design & Marketing</h3>
          <p>Below are a few recent projects that focus on showcasing my UX work in addition to my UI and graphic development skills.</p>
          </div>

          <Divider />

          
            
              <NavPills className={classes.pills}
                color="primary"
                tabs={[
                  {
                    tabButton: "Retail Packaging",
                    tabContent: (
                      <span>
                        <PackageCarousel />
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Product Photography",
                    tabContent: (
                      <span>
                          <MyCarousel />
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Logos",
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
          
        </div>
      </div>
    </Paper>

    
  );
}
