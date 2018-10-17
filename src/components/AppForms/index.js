import {Grid, Typography, withStyles} from '@material-ui/core';
import React from 'react';
import {styles} from '../../styles/theme';
import {IconFont} from '../IconFont/IconFont';

type AppFormContainerProps = {
  classes: Object,
  children: any
}
export const AppFormContainer = withStyles(styles)((props: AppFormContainerProps) =>
    <Grid container justify='center' className={props.classes.formContainer} spacing={16}>
      {props.children}
    </Grid>);

type AppFormTitleProps = {
  iconName: string,
  children: any,
  classes: Object
};

export const AppFormTitle = withStyles(styles)((props: AppFormTitleProps) =>
    <Grid item xs={12} md={11} className={props.classes.titleContainer}>
      <Typography variant='h5'>
        <IconFont icon={props.iconName} sizeSphere={48} fontSize={32}/>
        <span className={props.classes.titleText}>
          {props.children}
        </span>
      </Typography>
    </Grid>);

type AppFormProps = {
  children: any,
  classes: Object
};
export const AppForm = withStyles(styles)((props: AppFormProps) =>
    <Grid item xs={12} md={11} className={props.classes.form}>
      {props.children}
    </Grid>);



