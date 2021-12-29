import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import {useTranslation} from 'react-i18next';

type Props = {
  aids: List<String>,
  laboral: List<String>,
  selectedAids: [],
  closePanel:Function,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(5),
  },
  aidCheckBox: {
    padding: 0,
    paddingLeft: 10,
    fontSize: 10,
  },
  label: {
       fontSize: '0.8em'
   },
  filterBlock : {
    paddingBottom: 10,
  },
  MuiTypography: {
    body1: {
      fontSize: 10,
    }
  }
}));

const FilterPanel = (props: Props) => {

  const classes = useStyles();
  const {t} = useTranslation('dashboard');
  const applyFilter = Function.prototype;
  const resetFilter = Function.prototype;

  return (
    <Paper elevation={2}>
      <FormControl className={classes.formControl}>
        {props.aids &&
        <FormGroup className={classes.filterBlock}>
          <FormLabel>Ajudes</FormLabel>
          {props.aids.map((aid) => (
            <FormControlLabel
              key={aid}
              classes={{ label: classes.label }}
              control={<Checkbox
                className={classes.aidCheckBox}
                value={aid.codi}
                color='primary'
                size='small'
                />}
              label={aid} /* value must be processed value={aid.codi}*/
            />
             ))}
        </FormGroup>
      }
        <FormLabel>Sexe</FormLabel>
        <RadioGroup className={classes.filterBlock} row>
          <FormControlLabel classes={{ label: classes.label }} control={<Radio value='Dona' color='primary' size='small'/>} label='Dona' />
          <FormControlLabel classes={{ label: classes.label }} control={<Radio value='Home' color='primary' size='small'/>} label='Home' />
        </RadioGroup>

        {props.laborals &&
          <FormGroup className={classes.filterBlock}>
            <FormLabel>Situació laboral</FormLabel>
              {props.laborals.map((laboral,index) => (
                <FormControlLabel
                  key={laboral}
                  classes={{ label: classes.label }}
                  control={<Checkbox
                    className={classes.aidCheckBox}
                    value={laboral}
                    color='primary'
                    size='small'
                  />}
                  label={t('laboral_' + laboral)} value={laboral}/>
                ))
              }
          </FormGroup>
        }

        <FormLabel>Violencia</FormLabel>
        <RadioGroup className={classes.filterBlock} row>
          <FormControlLabel classes={{ label: classes.label }} control={<Radio value='Si' color='primary' size='small' />} label='Si' />
          <FormControlLabel classes={{ label: classes.label }} control={<Radio value='No' color='primary' size='small' />} label='No' />
        </RadioGroup>

        <FormLabel>Escolarització</FormLabel>
        <RadioGroup className={classes.filterBlock} row>
          <FormControlLabel classes={{ label: classes.label }} control={<Radio value='Si' color='primary' size='small' />} label='Si' />
          <FormControlLabel classes={{ label: classes.label }} control={<Radio value='No' color='primary' size='small' />} label='No' />
        </RadioGroup>

        <FormGroup className={classes.filterBlock}>
          <Button variant="contained" onClick={applyFilter}>Aplica</Button>
        </FormGroup>
        <FormGroup className={classes.filterBlock}>
          <Button variant="contained" onClick={resetFilter}>Neteja</Button>
        </FormGroup>
      </FormControl>
    </Paper>
    );
}

export default FilterPanel
