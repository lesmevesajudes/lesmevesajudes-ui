import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import {Trans} from 'react-i18next';
import {required} from "../../shared/formValidators";
import MultipleAnswerQuestion from './MultipleAnswerQuestion';

export const SituacioLaboral = () =>
    <MultipleAnswerQuestion label={<Trans>Indiqui la seva situació laboral:</Trans>} name='situacio_laboral' validate={[required]}>
      <MenuItem value='treball_compte_propi'>
        <Trans>Treballa per compte propi</Trans>
      </MenuItem>
      <MenuItem value='treball_compte_daltri_jornada_complerta'>
        <Trans>Treballa per compte d'altri jornada complerta</Trans>
      </MenuItem>
      <MenuItem value='treball_compte_daltri_jornada_parcial'>
        <Trans>Treballa per compte d'altri jornada parcial</Trans>
      </MenuItem>
      <MenuItem value='aturat'>
        <Trans>Aturat/ada</Trans>
      </MenuItem>
      <MenuItem value='tasques_de_la_llar'>
        <Trans>Tasques de la llar</Trans>
      </MenuItem>
      <MenuItem value='estudiant'>
        <Trans>Estudiant o pràctiques sense remunerar</Trans>
      </MenuItem>
      <MenuItem value='jubilat'>
        <Trans>Jubilat/ada o prejubilat/ada</Trans>
      </MenuItem>
      <MenuItem value='altres'>
        <Trans>Altres situacions</Trans>
      </MenuItem>
    </MultipleAnswerQuestion>;
