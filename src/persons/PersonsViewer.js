//@flow
import React, {Component} from 'react';
import type {Person} from './PersonTypes';
import {Trans, translate} from 'react-i18next';
import {Avatar, Card, Divider, Grid, List, ListItem, ListItemText} from '@material-ui/core';
import {create} from '../shared/UUID';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

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


const PersonCard = (props: PersonCardProps) => {
  const anysText = props.person.edat != null ? `${props.person.edat} anys ` : '';
  const secondaryText = `${anysText}${relacioDeParentiuATextDelLListatDePersones(props.person.relacio_parentiu)}`;
  return (
      <ListItem button onClick={() => props.updatePerson(props.person.id)}>
        <Avatar style={{backgroundColor: '#006600'}}>{initials(props.person.nom)}</Avatar>
        <ListItemText
            primary={props.person.is_the_user_in_front_of_the_computer ? `Vostè: ${props.person.nom}` : props.person.nom}
            secondary={props.person.is_the_user_in_front_of_the_computer ? '' : secondaryText}
        />
        {!props.person.is_the_user_in_front_of_the_computer &&
        <ListItemSecondaryAction onClick={() => props.onRemoveClick(props.person.id)}>
          <IconButton aria-label='Delete'>
            <ClearIcon/>
          </IconButton>
        </ListItemSecondaryAction>}
      </ListItem>);
};

type UnknownPersonProps = {
  onAddPersonClick: Function,
  onRemoveClick: Function,
  personNumber: number
}
const UnknownPersonCard = (props: UnknownPersonProps) => (
    <ListItem button onClick={() => props.onAddPersonClick()}>
      <Avatar>?</Avatar>
      <ListItemText
          primary={`Persona ${(props.personNumber + 1).toString()} - Premi aquí per a introduir la informació d'aquesta persona`}/>
      <ListItemSecondaryAction onClick={() => props.onRemoveClick()}>
        <IconButton aria-label='Delete'>
          <ClearIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
);

class PersonsViewer extends Component<Props, void> {
  render() {
    const missingPersons = Math.max(this.props.expectedNumberOfPersons - this.props.persons.length, 0);
    return (
        <Grid container className='container-family'>
          <Grid item sm={12} xs={12} className='bg-family'>
            <Typography variant='headline' gutterBottom>
              <Trans>Persones de la unitat de convivència</Trans>
            </Typography>
            <Grid container direction='column' className='PersonsViewerPage' spacing={16} alignItems='stretch'>
              <Grid item xs={12} sm={12}>
                <Card>
                  <List>
                    {[...this.props.persons.map(person =>
                        <PersonCard
                            key={person.id}
                            person={person}
                            onRemoveClick={this.props.onRemoveClick}
                            updatePerson={this.props.onUpdateClick}/>
                    ),
                      ...repeat(missingPersons,
                          (i) => <UnknownPersonCard key={i} personNumber={i}
                                                    onRemoveClick={this.props.onRemoveUnknownClick}
                                                    onAddPersonClick={this.props.onAddPersonClick}/>)]
                        .reduce((arr, current) => [...arr, current, <Divider key={create()}/>], []).slice(0, -1)}
                  </List>
                </Card>
              </Grid>
              {missingPersons === 0 &&
              <Grid item>
                <Button variant='raised' onClick={this.props.onAddPersonClick}>Afegir una persona convivent</Button>
              </Grid>}
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default translate('translations')(PersonsViewer);
