//@flow
import React from "react";
import {TextField} from "redux-form-material-ui";
import {Button, Grid} from "material-ui";
import {Trans} from "react-i18next";
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";

let HowManyPersonsLiveTogetherPage = props => {
  const {handleSubmit} = props;
  return (
      <Grid container className="bg-container" justify='center'>
        <Grid item>
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' justify='center' spacing={24}>
              <Grid item>
                <label>
                  <Trans>Quantes persones viuen en el seu domicili? (amb vostè inclòs)</Trans>
                </label>
              </Grid>
              <Grid item>
                <Field name="how_many_persons_live_together" placeholder="0" type="number" fullWidth
                       component={TextField} autoFocus/>
              </Grid>
              <Grid item>
                <Button variant="raised" color="primary" type="submit" name="ButtonValidar">
                  <Trans>Validar</Trans>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
  );
};

HowManyPersonsLiveTogetherPage = reduxForm({
  form: "HowManyPersonsLiveTogetherForm"
})(HowManyPersonsLiveTogetherPage);

export default HowManyPersonsLiveTogetherPage;
