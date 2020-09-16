import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import {styles} from "../../styles/theme";

const Component = ({benefit, subject, classes}) => (
      <Grid item container className={classNames(classes.ResultsSeparator, 'grid-flex-force', 'flex-width-force')} xs={2} alignItems='center' justify='center'>
        <Typography className={classes.ResultsBenefitText}>
          {typeof benefit.amountText !== "undefined"
              ? benefit.amountText
              : <Fragment>{subject[benefit.ID][Object.keys(subject[benefit.ID])[0]]} € / {benefit.periode}</Fragment>}
        </Typography>
        <Typography className={classes.ResultsBenefitText}>
          {benefit.conditions}
        </Typography>
      </Grid>
);

export default withStyles(styles)(Component);
