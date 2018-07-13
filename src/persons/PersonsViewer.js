//@flow
import React from 'react';
import type {Person} from './PersonTypes';
import {Trans, translate} from 'react-i18next';
import {Avatar, Card, Divider, Grid, Icon, List, ListItem, ListItemText} from '@material-ui/core';
import {create} from '../shared/UUID';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../styles/theme';
import {IconFont} from '../components/IconFont/IconFont';
import withWidth, {isWidthUp} from "@material-ui/core/withWidth";

const initials = (name: string) => {
  const initials = name.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g);
  if (initials instanceof Array) {
    return initials.map(char => char.toUpperCase()).join('');
  } else {
    return '?';
  }
};

const repeat = (times: number, callback: Function) => {
  if (typeof callback !== 'function') {
    throw new TypeError('Callback is not a function');
  }
  let response = [];
  for (let i = 0; i < times; i++) {
    response.push(callback(i));
  }
  return response;
};

type PersonCardProps = {
  person: Person,
  updatePerson: Function,
  onRemoveClick: Function,
  classes: Object
}
const relacioDeParentiuATextDelLListatDePersones = (relacioDeParentiu: string) => {
  const textos = {
    parella: 'és la seva parella',
    fill: 'és el seu fill/a',
    fillastre: 'és el seu fillastre/a',
    infant_acollit: 'és un infant acollit',
    net: 'és el seu net/a',
    pare: 'és el seu pare',
    avi: 'és el seu avi/a',
    sogre: 'és el seu sogre/a',
    germa: 'és el seu germà/na',
    cunyat: 'és el seu cunyat/da',
    gendre: 'és el su gendre/jove',
    altres: 'és un familiar',
    cap: 'és una persona que conviu amb vostè',
    undefined: ''
  };
  return textos[relacioDeParentiu];
};


export const PersonCard = (props: PersonCardProps) => {
  const anysText = props.person.edat != null ? `${props.person.edat} anys ` : '';
  const secondaryText = `${anysText}${relacioDeParentiuATextDelLListatDePersones(props.person.relacio_parentiu)}`;
  const { classes } = props;
  return (
      <ListItem button onClick={() => props.updatePerson(props.person.id)}>
        <Avatar style={{backgroundColor: '#006600'}}>{initials(props.person.nom)}</Avatar>
        <ListItemText
            primary={props.person.is_the_person_in_front_of_the_computer ? `Vostè: ${props.person.nom}` : props.person.nom}
            secondary={props.person.is_the_person_in_front_of_the_computer ? '' : secondaryText}
        />
        {!props.person.is_the_person_in_front_of_the_computer &&
        <ListItemSecondaryAction onClick={() => props.onRemoveClick(props.person.id)}>
          <Tooltip id='known-tooltip' title='Aquesta acció eliminarà aquest registre' placement='right-start'>
            <Typography className={classes.deleteListItemTitle}> Eliminar </Typography>
          </Tooltip>
        </ListItemSecondaryAction>}
      </ListItem>);
};

type UnknownPersonProps = {
  onAddPersonClick: Function,
  onRemoveClick: Function,
  personNumber: number,
  width: any,
  classes: Object
}
const UnknownPersonCard = withWidth()((props: UnknownPersonProps) => {
  const { classes } = props;
    return (
    <ListItem name="personNotDefined" button onClick={() => props.onAddPersonClick()}>
      <Avatar className={classes.avatarUnknownPerson} >?</Avatar>
      <ListItemText 
          primary={<Typography className= {classes.titleUnknownPerson} >Persona {(props.personNumber + 1).toString()} - Premi aquí per a introduir la informació d'aquesta persona</Typography>}/>
      <ListItemSecondaryAction onClick={() => props.onRemoveClick()}>
        <Tooltip id='unknown-tooltip' title='Aquesta acció eliminarà aquest registre' placement='right-start'>
          <Typography className={classes.deleteListItemTitle}> {isWidthUp('sm', props.width) ? 'Eliminar' :
              <Icon>clear</Icon>} </Typography>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
    )
});

type Props = {
  persons: Array<Person>,
  onRemoveClick: Function,
  onRemoveUnknownClick: Function,
  onAddUnknownClick: Function,
  onUpdateClick: Function,
  onAddPersonClick: Function,
  expectedNumberOfPersons: number,
  classes: Object
};
export const PersonsViewer = (props: Props) => {
  const missingPersons = Math.max(props.expectedNumberOfPersons - props.persons.length, 0);
    return (
        <Grid container className='bg-container'>
          <Grid item xs={12} sm={12} className='titleContainer'>
            <Typography variant='headline' className='titlePage'>
              <IconFont icon='persona' sizeSphere={48} fontSize={32}/>
              <span className='titleText'><Trans>Persones que viuen en el seu domicili</Trans></span>
              </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction='row' justify='space-around' alignItems='stretch' spacing={16}>
              <Grid item xs={12} sm={12} className='bg-form-exterior'>
                <Card>
                    <List>
                      {[...props.persons.map(person =>
                          <PersonCard
                              classes={props.classes}
                              key={person.id}
                              person={person}
                              onRemoveClick={props.onRemoveClick}
                              updatePerson={props.onUpdateClick}/>
                      ),
                        ...repeat(missingPersons,
                            (i) => <UnknownPersonCard key={i} personNumber={i} classes={props.classes}
                                                      onRemoveClick={props.onRemoveUnknownClick}
                                                      onAddPersonClick={props.onAddPersonClick}/>)]
                          .reduce((arr, current) => [...arr, current, <Divider key={create()}/>], []).slice(0, -1)}
                    </List>
                </Card>
              </Grid>
              {missingPersons === 0 &&
              <Grid item sm={12} className='addPersonContainer'>
                <Tooltip id='add-person-tooltip'
                         title='Si vol afegir un altra persona que convisqui amb vostè cliqui aquí' placement='right'>
                  <Button className={props.classes.addMemberButton} color='secondary' variant='raised'
                            onClick={props.onAddPersonClick}>Afegir una persona convivent <Icon
                        className={props.classes.rightIcon}>add_circle</Icon></Button>
                  </Tooltip>
                </Grid>
              }
            </Grid>
          </Grid>
        </Grid>
    );
};

export default translate('translations')(withStyles(styles)(PersonsViewer));
