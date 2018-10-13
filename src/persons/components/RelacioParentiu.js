import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import {Trans} from 'react-i18next';
import {required} from "../../shared/formValidators";
import MultipleAnswerQuestion from './MultipleAnswerQuestion';

export const RelacioParentiu = () =>
    <Grid item>
      <MultipleAnswerQuestion name='relacio_parentiu' label={<Trans>Aquesta persona és el/la seu/va?</Trans>} validate={[required]}>
        <MenuItem value='parella'>
          <Trans>Cònjuge / parella</Trans>
        </MenuItem>
        <MenuItem value='fill'>
          <Trans>Fill/a</Trans>
        </MenuItem>
        <MenuItem value='fillastre'>
          <Trans>Fillastre/a (o fill/a de la parella actual)</Trans>
        </MenuItem>
        <MenuItem value='net'>
          <Trans>Nét/a</Trans>
        </MenuItem>
        <MenuItem value='infant_acollit'>
          <Trans>Infant en acolliment </Trans><Icon>info</Icon>
        </MenuItem>
        <MenuItem value='pare'>
          <Trans>Pare o mare</Trans>
        </MenuItem>
        <MenuItem value='avi'>
          <Trans>Avi / Àvia</Trans>
        </MenuItem>
        <MenuItem value='sogre'>
          <Trans>Sogre/a</Trans>
        </MenuItem>
        <MenuItem value='germa'>
          <Trans>Germà/germana</Trans>
        </MenuItem>
        <MenuItem value='cunyat'>
          <Trans>Cunyat/da</Trans>
        </MenuItem>
        <MenuItem value='gendre'>
          <Trans>Gendre/Nora/Parella del meu fill/a</Trans>
        </MenuItem>
        <MenuItem value='altres'>
          <Trans>Altres familiars</Trans>
        </MenuItem>
        <MenuItem value='cap'>
          <Trans>Sense relació de parentiu</Trans>
        </MenuItem>
      </MultipleAnswerQuestion>
    </Grid>;
