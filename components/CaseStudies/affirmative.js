import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";

import modalStyle from "assets/jss/nextjs-material-kit/modalStyle.js";

import Intro from './intro';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



export default function ExampleScrolling() {
  const [scrollingModal, setScrollingModal] = React.useState(false);

  return (
    <div>
      <Button color="primary" onClick={() => setScrollingModal(true)}>
        Launch Demo Modal
      </Button>
      <Dialog
        onClick={() => setScrollingModal(false)}
        open={scrollingModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setScrollingModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography

        >
          <Button
            simple
            key="close"
            aria-label="Close"
            onClick={() => setScrollingModal(false)}
          >
            {" "}
            <Close />
          </Button>
          <h4 >Modal title</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
  
        >
          <Intro />
        </DialogContent>
        <DialogActions >
          <Button onClick={() => setScrollingModal(false)} color="primary">
            Close
          </Button>
          <Button color="primary">Save changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}