import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {Trans} from 'react-i18next';
import MultipleAnswerQuestion from './MultipleAnswerQuestion';

export const SituacioLaboral = () =>
    <MultipleAnswerQuestion label={<Trans>Indiqui la seva situació laboral:</Trans>} name='situacio_laboral'>
      <MenuItem data-test='treball_compte_propi' value='treball_compte_propi'>
        <Trans>Treballa per compte propi</Trans>
      </MenuItem>
      <MenuItem data-test='treball_compte_daltri_jornada_complerta'
                value='treball_compte_daltri_jornada_complerta'>
        <Trans>Treballa per compte d'altri jornada complerta</Trans>
      </MenuItem>
      <MenuItem data-test='treball_compte_daltri_jornada_parcial'
                value='treball_compte_daltri_jornada_parcial'>
        <Trans>Treballa per compte d'altri jornada parcial</Trans>
      </MenuItem>
      <MenuItem data-test='aturat' value='aturat'>
        <Trans>Aturat/ada</Trans>
      </MenuItem>
      <MenuItem data-test='tasques_de_la_llar' value='tasques_de_la_llar'>
        <Trans>Tasques de la llar</Trans>
      </MenuItem>
      <MenuItem data-test='estudiant' value='estudiant'>
        <Trans>Estudiant o pràctiques sense remunerar</Trans>
      </MenuItem>
      <MenuItem data-test='jubilat' value='jubilat'>
        <Trans>Jubilat/ada o prejubilat/ada</Trans>
      </MenuItem>
      <MenuItem data-test='altres' value='altres'>
        <Trans>Altres</Trans>
      </MenuItem>
    </MultipleAnswerQuestion>;
