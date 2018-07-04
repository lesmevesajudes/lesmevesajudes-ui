import React, {Fragment} from 'react';
import {helpText, isHelpAvailable} from '../HelpText';
import {Hidden, Typography} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../../styles/theme';
class DescriptionText extends React.Component {
  render() {
    console.log(this.props)
    return (
        <Fragment>
          <Hidden smDown>
            {isHelpAvailable(this.props.currentField) ?
                <Paper className={this.props.classes.boxDescriptionText}>
                  <Grid container direction='column' spacing={8}>
                    <Grid item>
                      <Typography variant='display1' component='h3' className={this.props.classes.titleDescriptionText}>
                        {helpText(this.props.currentField).title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component='p'>
                        {helpText(this.props.currentField).body}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
                :
                <Typography component='span'>
                </Typography>
            }

          </Hidden>
        </Fragment>
    )
  }
}

export default (withStyles(styles)(DescriptionText));
