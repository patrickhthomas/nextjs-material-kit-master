import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import MyHeader from "components/MyHeader/MyHeader.js";
import Footer from "components/Footer/Footer.js";
import MyHeaderLinks from "components/MyHeader/MyHeaderLinks.js";


import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import MyWorkSection from "pages-sections/LandingPage-Sections/MyWorkSection.js";

import Layout from "components/layout.js";
import Container from "@material-ui/core/Container";
const dashboardRoutes = [];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
  
  },
}));
export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <Container className={classes.container}>
      
      <MyHeader
        color="primary"
        routes={dashboardRoutes}
        brand="Patrick Thomas"
        rightLinks={<MyHeaderLinks />}
        fixed
        changeColorOnScroll={{
          color: "white"
        }}
        {...rest}
      />
     
      
        
          <MyWorkSection />

        
    
    
    </Container>
  );
}
