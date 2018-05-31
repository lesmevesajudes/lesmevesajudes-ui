import React, {Fragment} from 'react';
import {Select} from "redux-form-material-ui";
import Field from "redux-form/es/Field";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import {Trans} from "react-i18next";


export const TipusDocumentIdentitat = () =>
    <Fragment>
      <label>
        <Trans>Tipus de document de identitat</Trans>
      </label>
      <Field data-test="tipus_document_identitat" name="tipus_document_identitat" component={Select}
             fullWidth>
        <MenuItem data-test="di_dni" value="DNI">
          <Trans>DNI</Trans>
        </MenuItem>
        <MenuItem data-test="di_nie" value="NIE">
          <Trans>NIE</Trans>
        </MenuItem>
        <MenuItem data-test="di_pass" value="passaport">
          <Trans>Passaport</Trans>
        </MenuItem>
        <MenuItem data-test="di_altres" value="altres">
          <Trans>Altres</Trans>
        </MenuItem>
      </Field>
    </Fragment>;
