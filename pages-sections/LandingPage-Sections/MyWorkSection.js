// @material-ui/core components

import MyNavPills from "components/NavPills/MyNavPills.js";
import VisualNavPills from "components/NavPills/VisualNavPills.js";
// @material-ui/icons
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// core components


import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import { FormatAlignCenter } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'left',
    backgroundColor: 'hsla(0,0%,100%,0.0)',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    elevation: '7',
    borderRadius: '2px',
    maxWidth: '1280px',
    margin: 'auto'
  },


}));

export default function MyWorkSection() {
const classes = useStyles();
  return (
<div className="workSection">
    <Paper className={classes.paper}>
        <Grid container spacing={4} justify='center'>
        
          <Grid item xs={12} sm={11} md={9} lg={6} xl={3}>
            
          <MyNavPills />
          

          </Grid>


     
          
          <Grid item xs={12} sm={11} md={9} lg={6} xl={3}>

          <VisualNavPills />
        
          </Grid>
          

          
        </Grid>
        </Paper>
        </div>
  );
}
