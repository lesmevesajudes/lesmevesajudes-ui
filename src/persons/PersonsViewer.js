//@flow
import React, {Component} from "react";
import type {Person} from "./PersonTypes";
import {Trans, translate} from "react-i18next";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui';
import {create} from '../shared/UUID';
import ClearIcon from 'material-ui-icons/Clear';

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
  const initials = name.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
  if (initials instanceof Array) {
    return initials.map(char => char.toUpperCase()).join('');
  } else {
    return "?";
  }
};

const repeat = (times: number, callback: Function) => {
  if (typeof callback !== "function") {
    throw new TypeError("Callback is not a function");
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
    pare: 'és el seu pare',
    avi: 'és el seu avi/a',
    sogre: 'és el seu sogre/a',
    germa: 'és el seu germà/na',
    cunyat: 'és el seu cunyat/da',
    gendre: 'és el su gendre/jove',
    altres: 'és un familiar',
    cap: 'és una persona que conviu amb vosté',
    undefined: ''
  };
  return textos[relacioDeParentiu];
};


const PersonCard = (props: PersonCardProps) => (
    <ListItem button onClick={() => props.updatePerson(props.person.id)}>
      <Avatar style={{backgroundColor: "#006600"}}>{initials(props.person.nom)}</Avatar>
      <ListItemText
          primary={props.person.is_the_user_in_front_of_the_computer ? `Vosté: ${props.person.nom}` : props.person.nom}
          secondary={props.person.is_the_user_in_front_of_the_computer ? '' : `${props.person.edat} anys ${relacioDeParentiuATextDelLListatDePersones(props.person.relacio_parentiu)}`}
      />
      {!props.person.is_the_user_in_front_of_the_computer &&
      <ListItemSecondaryAction onClick={() => props.onRemoveClick(props.person.id)}>
        <IconButton aria-label="Delete">
          <ClearIcon/>
        </IconButton>
      </ListItemSecondaryAction>}
    </ListItem>
);

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
        <IconButton aria-label="Delete">
          <ClearIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
);

class PersonsViewer extends Component<Props, void> {
  render() {
    const missingPersons = this.props.expectedNumberOfPersons - this.props.persons.length;
    return (
        <Grid container className="container-family">
          <Grid item sm={12} xs={12} className="bg-family">
            <h1>
              <Trans>Persones de la unitat de convivència</Trans>
            </h1>
            <Grid container className="PersonsViewerPage" spacing={16}>
              <Grid item xs={12}>
                <Card>
                  <List component="nav">
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
            </Grid>
            <Grid container spacing={16} justify="flex-end">
                <Grid item>
                  <Button variant="raised" color="secondary" onClick={this.props.onAddPersonClick}>Afegir una persona
                    convivent</Button>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default translate("translations")(PersonsViewer);
