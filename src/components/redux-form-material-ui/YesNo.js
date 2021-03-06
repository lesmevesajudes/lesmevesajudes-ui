import {Grid} from "@material-ui/core";
import React from "react";
import {Trans} from 'react-i18next';
import {Choice} from "../Choice";
import MultipleChoice from "../MultipleChoice";

const YesNo = ({input, meta}) => {
  return <Grid container direction='column'>
    <Grid container direction='row' className="yes-no-question">
      <MultipleChoice
          currentState={input.value}
          onFocus={input.onFocus}
          optionSelected={input.onChange}
          meta
      >
        <Choice value={true} variant='outlined'>
          <Trans i18nKey='si'/>
        </Choice>
        <Choice value={false} variant='outlined'>
          <Trans i18nKey='no'/>
        </Choice>

      </MultipleChoice>
    </Grid>
    <Grid item>
      {meta.touched && meta.error &&
      <span style={{
        color: '#f44336',
        margin: 0,
        fontSize: "0.8571428571428571rem",
        textAlign: "left",
        marginTop: "8px",
        minHeight: "1em",
        lineHeight: "1em"
      }}>{meta.error}</span>}
    </Grid>
  </Grid>;
};
export default YesNo;
