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
        <Choice value={true} variant="outlined">
          Si
        </Choice>
        <Choice value={false} variant="outlined">
          No
        </Choice>
      </MultipleChoice>
    </Grid>
);
export default YesNo;
