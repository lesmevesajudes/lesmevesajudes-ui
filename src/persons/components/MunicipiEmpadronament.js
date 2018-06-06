import React, {Fragment} from 'react';
import {Select} from "redux-form-material-ui";
import {Field} from "redux-form";
import MenuItem from "@material-ui/core/MenuItem";
import {Trans} from "react-i18next";

export const MunicipiEmpadronament = () =>
    <Fragment>
      <label>
        En quin municipi està empadronat actualment?
      </label>
      <Field data-test="municipi_empadronament" name="municipi_empadronament" component={Select}
             fullWidth>
        <MenuItem data-test="barcelona" value="barcelona">
          <Trans>Barcelona</Trans>
        </MenuItem>
        <MenuItem data-test="altres" value="altres">
          <Trans>Altres</Trans>
        </MenuItem>
      </Field>
    </Fragment>;
