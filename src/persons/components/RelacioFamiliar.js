import React, {Fragment} from 'react';
import {Select} from "redux-form-material-ui";
import {Field} from "redux-form";
import MenuItem from "@material-ui/core/MenuItem";
import {Trans} from "react-i18next";

export const RelacioFamiliar = () =>
    <Fragment>
      <label>
        <Trans>Aquesta persona és el/la seu/va?</Trans>
      </label>
      <Field data-test="relacio_parentiu" name="relacio_parentiu" component={Select} fullWidth>
        <MenuItem data-test="parella" value="parella">
          <Trans>Cònjuge / parella</Trans>
        </MenuItem>
        <MenuItem data-test="fill" value="fill">
          <Trans>Fill/a</Trans>
        </MenuItem>
        <MenuItem data-test="fillastre" value="fillastre">
          <Trans>Fillastre/a (o fill/a de la parella actual)</Trans>
        </MenuItem>
        <MenuItem data-test="net" value="net">
          <Trans>Nét/a</Trans>
        </MenuItem>
        <MenuItem data-test="infant_acollit" value="infant_acollit">
          <Trans>Infant en acolliment</Trans>
        </MenuItem>
        <MenuItem data-test="pare" value="pare">
          <Trans>Pare o mare</Trans>
        </MenuItem>
        <MenuItem data-test="avi" value="avi">
          <Trans>Avi / Àvia</Trans>
        </MenuItem>
        <MenuItem data-test="sogre" value="sogre">
          <Trans>Sogre/a</Trans>
        </MenuItem>
        <MenuItem data-test="germa" value="germa">
          <Trans>Germà/germana</Trans>
        </MenuItem>
        <MenuItem data-test="cunyat" value="cunyat">
          <Trans>Cunyat/da</Trans>
        </MenuItem>
        <MenuItem data-test="gendre" value="gendre">
          <Trans>Gendre/Nora/Parella del meu fill/a</Trans>
        </MenuItem>
        <MenuItem data-test="altres" value="altres">
          <Trans>Altres familiars</Trans>
        </MenuItem>
        <MenuItem data-test="cap" value="cap">
          <Trans>Sense relació de parentiu</Trans>
        </MenuItem>
      </Field>
    </Fragment>;
