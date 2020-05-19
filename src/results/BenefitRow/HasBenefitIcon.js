import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "../../styles/theme";

const Component = ({benefitStatus, classes}) => (
  <DoneIcon className={
    benefitStatus === "active" || benefitStatus === "permanent"
        ? classes.greenText
        : classes.darkGrayText
  }/>
);

export default withStyles(styles)(Component);
