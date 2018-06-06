import React, {Fragment} from 'react';
import {Select} from "redux-form-material-ui";
import Field from "redux-form/es/Field";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import {Trans} from "react-i18next";

export const SituacioLaboral = () =>
    <Fragment>
      <label>
        <Trans>Indiqui la seva situació laboral:</Trans>
      </label>
      <Field data-test="situacio_laboral" name="situacio_laboral" component={Select} fullWidth>
        <MenuItem data-test="treball_compte_daltri_jornada_complerta"
                  value="treball_compte_daltri_jornada_complerta">
          <Trans>Treballa per compte d'altri jornada complerta</Trans>
        </MenuItem>
        <MenuItem data-test="treball_compte_daltri_jornada_parcial"
                  value="treball_compte_daltri_jornada_parcial">
          <Trans>Treballa per compte d'altri jornada parcial</Trans>
        </MenuItem>
        <MenuItem data-test="treball_compte_propi" value="treball_compte_propi">
          <Trans>Treballa per compte propi</Trans>
        </MenuItem>
        <MenuItem data-test="desocupat" value="desocupat">
          <Trans>Desocupat</Trans>
        </MenuItem>
        <MenuItem data-test="estudiant" value="estudiant">
          <Trans>Estudiant</Trans>
        </MenuItem>
        <MenuItem data-test="jubilat" value="jubilat">
          <Trans>Jubilat</Trans>
        </MenuItem>
      </Field>
    </Fragment>;
