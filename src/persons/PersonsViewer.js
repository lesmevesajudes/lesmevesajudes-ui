//@flow
import {Avatar, Card, Divider, Grid, Icon, List, ListItem, ListItemText} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import withWidth, {isWidthUp} from "@material-ui/core/withWidth";
import React from "react";
import {Trans, withTranslation} from "react-i18next";
import {AppFormContainer, AppFormTitle} from "../components/AppForms";
import {create} from "../shared/UUID";
import {styles} from "../styles/theme";
import type {Person} from "./PersonTypes";
import {rolesThatShowExtraInfo} from "./PersonTypes";

const initials = (name: string) => {
  const initials = name.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
  if (initials instanceof Array) {
    return initials.map(char => char.toUpperCase()).join("");
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
  classes: Object,
  onRemoveClick: Function,
  person: Person,
  t: Function,
  updatePerson: Function,
  width: any,
}

export const PersonCard = withWidth()(withTranslation("translations")((props: PersonCardProps) => {
  const { classes, person, t } = props;
  const { nom, edat, sexe } = person;
  const rol_traduit = t(`es_${person.relacio_parentiu}_${sexe === "dona" ? "feminine" : "masculine"}`);
  const secondaryText = rolesThatShowExtraInfo.includes(person.relacio_parentiu) ?
      <Trans i18nKey='descripcio_persona' nom={edat} rol_traduit={rol_traduit}>
        {{edat}} anys és {{rol_traduit}}
    </Trans> : "";

  return (
    <ListItem button onClick={() => props.updatePerson(person.id)}>
      <Avatar style={{ backgroundColor: "#006600" }}>{initials(nom)}</Avatar>
      <ListItemText style={{padding:"0 16px"}}
        primary={person.is_the_person_in_front_of_the_computer ?
          <Trans i18nKey='voste' nom={nom}>Vostè: {{ nom }}</Trans> : nom}
        secondary={person.is_the_person_in_front_of_the_computer ? "" : secondaryText}
      />
      {!person.is_the_person_in_front_of_the_computer &&
      <ListItemSecondaryAction onClick={() => props.onRemoveClick(person.id)}>
        <Tooltip id='known-tooltip'
                 title={<Trans i18nKey='eliminar_registre'>Aquesta acció eliminarà aquest registre</Trans>}
                 placement='right-start'>
          <Typography className={classes.deleteListItemTitle}> {isWidthUp("sm", props.width) ?
            <Trans i18nKey='eliminar'>Eliminar</Trans> :
            <Icon>clear</Icon>} </Typography>
        </Tooltip>
      </ListItemSecondaryAction>}
    </ListItem>);
}));

type UnknownPersonProps = {
  classes: Object,
  onAddPersonClick: Function,
  onRemoveClick: Function,
  personNumber: number,
  width: any,
}
const UnknownPersonCard = withWidth()((props: UnknownPersonProps) => {
  const { classes } = props;
  const nombre_persona = props.personNumber + 1;
  return (
    <ListItem button onClick={() => props.onAddPersonClick()}>
      <Avatar className={classes.avatarUnknownPerson}>?</Avatar>
      <ListItemText  style={{padding:"0 16px"}}
        primary={
          <Typography className={classes.titleUnknownPerson}>
            <Trans i18nKey='premi_per_introduir_dades' nombre_persona={nombre_persona}>
              Persona {{ nombre_persona }} - Premi aquí per a introduir la informació d'aquesta persona
            </Trans>
          </Typography>
        }/>
      <ListItemSecondaryAction onClick={() => props.onRemoveClick()}>
        <Tooltip id='uyyynknown-tooltip'
                 title={<Trans i18nKey='eliminar_registre'>Aquesta acció eliminarà aquest registre</Trans>}
                 placement='right-start'>
          <Typography className={classes.deleteListItemTitle}> {isWidthUp("sm", props.width) ?
            <Trans i18nKey='eliminar'>Eliminar</Trans> :
            <Icon>clear</Icon>} </Typography>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
});

type Props = {
  classes: Object,
  expectedNumberOfPersons: number,
  onRemoveClick: Function,
  onRemoveUnknownClick: Function,
  onAddUnknownClick: Function,
  onUpdateClick: Function,
  onAddPersonClick: Function,
  persons: Array<Person>
};
export const PersonsViewer = (props: Props) => {
  const missingPersons = Math.max(props.expectedNumberOfPersons - props.persons.length, 0);
  return (
    <AppFormContainer>
      <AppFormTitle iconName='familia'>
        <Trans i18nKey='persones_que_coviuen'>
          Persones que viuen en el seu domicili
        </Trans>
      </AppFormTitle>
      <Grid item xs={12} md={11} className={props.classes.personListContainer}>
        <Grid container direction='column' justify='space-around' alignItems='stretch' spacing={2}>
          <Grid item xs={12}>
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
          <Grid item sm={12}>
            <Tooltip id='add-person-tooltip'
                     title={<Trans i18nKey='cliqui_per_afegir'>Si vol afegir un altra persona que convisqui amb vostè
                       cliqui aquí</Trans>} placement='right'>
              <Button className={props.classes.addMemberButton} color='secondary' variant='contained'
                      onClick={props.onAddPersonClick}><Trans i18nKey='afegir_convivent'>Afegir una persona
                convivent</Trans><Icon
                className={props.classes.rightIcon}>add_circle</Icon></Button>
            </Tooltip>
          </Grid>
          }
        </Grid>
      </Grid>
    </AppFormContainer>
  );
};

export default withStyles(styles)(PersonsViewer);
