import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import {Trans} from "react-i18next";
import {styles} from "../../styles/theme";


const Component = ({classes}) => (
    <Grid container justify='center' alignItems='center' className={classes.ItemResult}>
      <Grid item container xs={1} justify='center' alignItems='center'>
        <ClearIcon className={classes.darkGrayText}/>
      </Grid>
      <Grid item xs={11}>
        <Typography className={classes.ResultsBenefitText}>
          <Trans i18nKey='no_opta_a_cap_ajuda'>No opta a cap ajuda</Trans>
        </Typography>
      </Grid>
    </Grid>);

export default withStyles(styles)(Component);
