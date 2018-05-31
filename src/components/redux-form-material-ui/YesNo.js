import React from 'react';
import MultipleChoice from '../MultipleChoice';
import {Choice} from "../Choice";
import {Grid} from "@material-ui/core";

const YesNo = ({input}) => (
    <Grid container direction="row">
      <MultipleChoice
        currentState={input.value}
        optionSelected={input.onChange}
      >
        <Choice name="Si" variant="outlined">
          Si
        </Choice>
        <Choice name="No" variant="outlined">
          No
        </Choice>
      </MultipleChoice>
    </Grid>
);
export default YesNo;
