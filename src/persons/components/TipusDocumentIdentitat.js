import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import {Trans} from "react-i18next";
import MultipleAnswerQuestion from "./MultipleAnswerQuestion";


export const TipusDocumentIdentitat = () =>
    <MultipleAnswerQuestion label={<Trans>Tipus de document de identitat</Trans>} name="tipus_document_identitat">
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
    </MultipleAnswerQuestion>;
