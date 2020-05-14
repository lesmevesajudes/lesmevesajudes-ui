import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const renderTextField = (
  { input, label, meta, ...custom },
) => (
  <Grid direction="column" container>
  <TextField
    placeholder={label}
    {...input}
    {...custom}
    error={meta.touched && meta.error ? true : false}
    meta={meta}
  />
  {meta.touched && meta.error &&
  <span style={{
    color: '#f44336',
    margin: 0,
    fontSize: "0.8571428571428571em",
    textAlign: "left",
    marginTop: "8px",
    minHeight: "1em",
    lineHeight: "1em"
  }}>{meta.error}</span>}

  </Grid>
);
export {renderTextField};

const renderSelectField = (
  { input, label, meta, children, ...custom },
) => (
  <Grid direction="column" container>
  <Select
    {...input}
    children={children}
    {...custom}
    error={meta.touched && meta.error ? true : false}
    meta={meta}
  />
  {meta.touched && meta.error &&
  <span style={{
    color: '#f44336',
    margin: 0,
    fontSize: "0.8571428571428571em",
    textAlign: "left",
    marginTop: "8px",
    minHeight: "1em",
    lineHeight: "1em"
  }}>{meta.error}</span>}
  </Grid>
);
export {renderSelectField};
