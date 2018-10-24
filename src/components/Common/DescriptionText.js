import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import React from "react";
import {styles} from "../../styles/theme";
import {helpText, isHelpAvailable} from "../HelpText";

const toHelpID = (fieldName: string): string => fieldName.split(".")[0];

const findHelpTextFor = (fieldName: string): object => typeof fieldName === "string" ? helpText(toHelpID(fieldName)) : null;
const isHelpAvailableForThisField = (fieldName: string): boolean => typeof fieldName === "string" ? isHelpAvailable(toHelpID(fieldName)) : null;

const DescriptionText = (props) =>
    isHelpAvailableForThisField(props.currentField) ?
        <Paper className={props.classes.boxDescriptionText}>
          <Grid container direction='column' spacing={8}>
            <Grid item>
              <Typography variant='h4' component='h3' className={props.classes.titleDescriptionText}>
                <InfoOutlinedIcon style={{verticalAlign: "top"}} className={props.classes.tertiaryColor}/>&nbsp;
                {findHelpTextFor(props.currentField).title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography component='div' align='justify'>
                {findHelpTextFor(props.currentField).body}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        :
        <Typography component='span'>
        </Typography>;

export default (withStyles(styles)(DescriptionText));
