import {Grid, Typography, withStyles} from '@material-ui/core';
import React from 'react';
import {styles} from '../../styles/theme';
import {IconFont} from '../IconFont/IconFont';

type AppFormContainerProps = {
  classes: Object,
  children: any
}
export const AppFormContainer = withStyles(styles)((props: AppFormContainerProps) =>
    <Grid container justify='center' className={props.classes.formContainer} spacing={2}>
      {props.children}
    </Grid>);

type AppFormTitleProps = {
  iconName: string,
  children: any,
  classes: Object
};

export const AppFormTitle = withStyles(styles)((props: AppFormTitleProps) =>
    <Grid item xs={12} md={11} className={props.classes.titleContainer}>
      <Typography variant='h5' className={props.classes.titleText}>
        <IconFont className={'screen-only'} icon={props.iconName} sizeSphere={60} fontSize={26}/>
          {props.children}
      </Typography>
    </Grid>);

type AppFormProps = {
  children: any,
  classes: Object
};
export const AppForm = withStyles(styles)((props: AppFormProps) =>
    <Grid item xs={12} md={11} className={props.classes.appForm}>
      {props.children}
    </Grid>);
