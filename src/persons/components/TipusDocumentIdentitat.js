import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Trans } from 'react-i18next';
import MultipleAnswerQuestion from './MultipleAnswerQuestion';
import {required} from '../../shared/formValidators';

export const TipusDocumentIdentitat = () =>
  <MultipleAnswerQuestion label={<Trans>Tipus de document d'identitat</Trans>} name='tipus_document_identitat'
                          validate={[required]}>
    <MenuItem value='DNI'>
      <Trans>DNI</Trans>
    </MenuItem>
    <MenuItem value='NIE'>
      <Trans>NIE</Trans>
    </MenuItem>
    <MenuItem value='passaport'>
      <Trans>Passaport</Trans>
    </MenuItem>
    <MenuItem value='sense_documents'>
      <Trans>Sense documents</Trans>
    </MenuItem>
    <MenuItem value='altres'>
      <Trans>Altres</Trans>
    </MenuItem>
  </MultipleAnswerQuestion>;
