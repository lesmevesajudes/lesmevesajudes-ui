import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {Trans} from 'react-i18next';
import MultipleAnswerQuestion from './MultipleAnswerQuestion';

export const MunicipiEmpadronament = () =>
    <MultipleAnswerQuestion label={<Trans>En quin municipi està empadronat actualment?</Trans>}
                            name='municipi_empadronament'>
      <MenuItem data-test='barcelona' value='barcelona'>
        <Trans>Barcelona</Trans>
      </MenuItem>
      <MenuItem data-test='altres' value='altres'>
        <Trans>altres</Trans>
      </MenuItem>
      <MenuItem data-test='no_empadronat_a_cat' value='no_empadronat_a_cat'>
        <Trans>No estic empadronat a Catalunya</Trans>
      </MenuItem>
    </MultipleAnswerQuestion>;
