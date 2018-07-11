import React from 'react';
import {helpText, isHelpAvailable} from '../HelpText';
import {Hidden, Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../../styles/theme';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutline';

const toHelpID = (fieldName: string): string => fieldName.split(".")[0];

const findHelpTextFor = (fieldName: string): object => typeof fieldName === 'string' ? helpText(toHelpID(fieldName)) : null;
const isHelpAvailableForThisField = (fieldName: string): boolean => typeof fieldName === 'string' ? isHelpAvailable(toHelpID(fieldName)) : null;

const DescriptionText = (props) =>
          <Hidden smDown>
            {isHelpAvailableForThisField(props.currentField) ?
                <Paper className={props.classes.boxDescriptionText}>
                  <Grid container direction='column' spacing={8}>
                    <Grid item>
                      <Typography variant='display1' component='h3' className={props.classes.titleDescriptionText}>
                        <InfoOutlinedIcon style={{verticalAlign: 'top'}} className={props.classes.tertiaryColor}/>&nbsp;
                        {findHelpTextFor(props.currentField).title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component='span' align='justify'>
                        {findHelpTextFor(props.currentField).body}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
                :
                <Typography component='span'>
                </Typography>
            }

          </Hidden>;

export default (withStyles(styles)(DescriptionText));
