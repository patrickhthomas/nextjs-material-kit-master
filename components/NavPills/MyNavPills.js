import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import AffirmativeLogo from "assets/img/Dribble1.png";
import CoopPreview from "assets/img/hifi1.png";
import DandelionPreview from "assets/img/DandelionPreview.svg";
import Paper from "@material-ui/core/Paper"
import BeerLabels from "assets/img/beer-labels.png";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";
import { Button } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

import Case from 'components/CaseStudies/affirmative.js'
import MyCarousel from "components/MyCarousel.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'left',
    color: theme.palette.text.primary,
    elevation: '7',
    borderRadius: '24px',
    marginTop: '96px',
    maxWidth: '1280px',
    margin: 'auto'
  },


}));

export default function MyNavPills() {
  
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
            <h3>UX/UI - Web and Mobile</h3>
            <p>Below are a few recent projects that focus on showcasing my UX work in addition to my UI and graphic development skills.</p>
          </div>

          <Divider />

          <GridContainer>
            <GridItem >
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Affirmative App",
                    tabContent: (
                      <span>
                          <div className='previewContainer'>
                        <img src={AffirmativeLogo} alt="Affirmative App Logo" className={imageClasses} />
                        </div>
                        <p>
                          Affirmative is a positive thinking app for IOS that emulates a physical deck of affirmation cards. In other words, it’s a collection of positive statements presented in a playing card format that the user can then read, collect, and share. More importantly, Affirmative houses a growing library of resources committed to assisting those strugglings with a wide variety of mental health issues.
                        </p>
                        <br />
                        <p>
                          My role: User research, user flows, information architecture, sketching, wireframing, brand development, UI design, prototyping, usability testing.
                        </p>
                        <Case />
                      </span>
                    )
                  },
                  {
                    tabButton: "Coop",
                    tabContent: (
                      <span>
                        <div className='previewContainer'>
                        <img src={CoopPreview} alt="Coop App Mobile Screens" className={imageClasses} />
                        </div>
                        <p>
                          When it comes to the creative process, an uninterrupted workflow can mean the difference between a stroke of inspiration and starting at a blank page. Coop wants to provide an online platform that allows teams to remotely create, share, and collaborate on projects without having to lose momentum. In addition to conducting research and developing the designs necessary to implement this task, I was happy to be able to craft an identity that accurately reflects the vision of the stakeholders and users alike.
                        </p>
                        <br />
                        <p>
                          My role: UX UI Design, Visual Design, Branding and Identity.
                        </p>

                      </span>
                    )
                  },
                  {
                    tabButton: "Dandelion",
                    tabContent: (
                      <span>
                        <img src={DandelionPreview} alt="Early Iteration of Dandelion Logo" className={imageClasses} />
                        <p>
                          Dandelion is a community oriented tea house and apothecary landing in downtown Vancouver, Washington in February 2021. In addition to serving herbal and medicinal tea blends, the shop serves as a retail location for Dandelion brand packaged teas and natural skincare product lines from Natural Earth & Body Inc.
                        </p>
                        <br />
                        <p>
                          My role: User research, user flows, information architecture, sketching, wireframing, brand development, UI design, prototyping, usability testing.
                        </p>

                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            
          </GridContainer>
        </div>

        
      </div>
    </Paper>

    
  );
}
