//@flow
import {Hidden, withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import {Map} from 'immutable';
import React, {Fragment} from 'react';
import {Trans, withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import Sticky from 'react-stickynode';
import {reduxForm} from 'redux-form';
import moment from 'moment';
import {renderTextField} from '../components/FormComponents/MaterialUIFields';
import MultipleAnswerQuestion from '../components/FormComponents/MultipleAnswerQuestion';
import {AppForm, AppFormContainer, AppFormTitle} from '../components/AppForms';
import DescriptionText from '../components/Common/DescriptionText';
import FormSubTitle from '../components/FormComponents/FormSubTitle';
import {YesNoQuestion} from '../components/FormComponents/YesNoQuestion';
import HelpIcon from '../components/HelpIcon';
import {isHelpAvailable} from '../components/HelpText';
import {IRemoveMyValueWhenUnmountedField} from '../components/IRemoveMyValueWhenUnmountedField';
import type {Person, PersonID} from '../persons/PersonTypes';
import {required} from '../shared/formValidators';
import {families016} from '../shared/OpenFiscaAPIClient/RequestBuilder';
import {focusFirstQuestionWithName, namefirstFieldWithError} from '../shared/reduxFormTools';
import {
  currentFocussedFieldSelector,
  esFill,
  esSustentador,
  personInFrontOfTheComputer,
  personsByRelacioDeParentiu
} from '../shared/selectorUtils';
import {styles} from '../styles/theme';
import {createFamilyName, toArray} from './createFamilyName';
import {addFamilyData} from './FamilyDataActions';
import type {FamilyData} from './FamilyDataTypes';

type Props = {
  addHouseholdData: Function,
  classes: Object,
  currentField: string,
  custodies: Object,
  esFamiliaNombrosa: boolean,
  esUsuariServeisSocials: boolean,
  families: Array<Object>,
  fills: Map<PersonID, Person>,
  helpTopic: string,
  initialValues: FamilyData,
  persones: Map<PersonID, Person>,
  possiblesSustentadors: Map<PersonID, Person>,
  sustentadorsSolitarisAmbPossiblesParelles: Map<Person, Array<Person>>,
  t: Function
};
const formName = 'FamilyForm';

const FamilyForm = (props: Props) => {
  const {
    classes,
    custodies,
    families,
    fills,
    helpTopic,
    persones,
    possiblesSustentadors,
    sustentadorsSolitarisAmbPossiblesParelles,
    t
  } = props;
  const previous_year = moment().subtract(1, 'year').format('YYYY');
  return (
      <AppFormContainer>
        <AppFormTitle iconName='familia'>
          <Trans i18nKey='informacio_sobre_la_familia'>Informació sobre la família</Trans>
        </AppFormTitle>
        <AppForm>
          <form name={formName}>
            <Grid container direction='row' justify='space-around' alignItems='stretch' spacing={2}>
              <Grid item xs={11} md={6}>
                <Grid container direction='column' alignItems='stretch' spacing={1}>
                  {fills.valueSeq().map((infant: Person) =>
                      <Grid item xs={12} key={infant.id}>
                        <label>
                          <Typography gutterBottom>
                            <Trans i18nKey='qui_te_la_guardia_i_custodia'>Qui té la guarda i custòdia o tutela legal
                              de:</Trans> <b>{infant.nom}</b>
                            {isHelpAvailable('custodies') &&
                            <HelpIcon name='custodies'/>
                            }
                          </Typography>

                        </label>
                        <Grid container direction='row' justify='space-between'>
                          <Grid item xs={5}>
                            <MultipleAnswerQuestion
                              formname={formName}
                              name={'custodies.' + infant.id + '.primer'}
                              validate={[required]}
                              hidelabel>
                              {possiblesSustentadors.valueSeq().map((sustentador: Person) =>
                                  <MenuItem key={`primer-${sustentador.id}`} value={sustentador.id}>
                                    {sustentador.nom} ({sustentador.edat} <Trans i18nKey='anys'>anys</Trans>)
                                  </MenuItem>
                              )}
                              <MenuItem value='no_conviu'><Trans i18nKey='una_persona_que_no_conviu'>Una persona que no
                                conviu</Trans></MenuItem>
                            </MultipleAnswerQuestion>
                          </Grid>
                          <Grid item xs={1}>
                            <Typography className={classes.andSeparator}><Trans i18nKey='i'>i</Trans></Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <MultipleAnswerQuestion
                              formname ={formName}
                              name={'custodies.' + infant.id + '.segon'}
                              fullWidth validate={[required]}
                              hidelabel>
                              {possiblesSustentadors.valueSeq().map((sustentador: Person) =>
                                  typeof custodies[infant.id] !== 'undefined' && custodies[infant.id].primer === sustentador.id
                                      ? null
                                      : <MenuItem key={`segon-${sustentador.id}`} value={sustentador.id}>
                                        {sustentador.nom} ({sustentador.edat} <Trans i18nKey='anys'>anys</Trans>)
                                      </MenuItem>
                              )}
                              <MenuItem value='no_conviu'><Trans i18nKey='una_persona_que_no_conviu'>Una persona que no
                                conviu</Trans></MenuItem>
                              <MenuItem value='ningu_mes'><Trans i18nKey='ningu_mes'>Ningú més</Trans></MenuItem>
                            </MultipleAnswerQuestion>
                          </Grid>
                        </Grid>

                      </Grid>)}
                  {families.length > 0 &&
                  families.map((familia) =>
                      <Fragment key={familia.ID}>
                        <FormSubTitle>
                          <Trans i18nKey='familia_de'>
                            Família de:
                          </Trans> {createFamilyName(familia, persones, t)}
                        </FormSubTitle>
                        { // $FlowFixMe
                          typeof sustentadorsSolitarisAmbPossiblesParelles[familia.sustentadors_i_custodia[0]] !== 'undefined' &&
                          // $FlowFixMe
                          sustentadorsSolitarisAmbPossiblesParelles[familia.sustentadors_i_custodia[0]].length > 1 &&
                          <Fragment>
                            <label>
                              <Typography gutterBottom>
                                <Trans i18nKey='existeix_una_parella'>Existeix una parella de:</Trans>
                                <b>{persones.get(familia.sustentadors_i_custodia[0]).nom}</b>
                              </Typography>
                            </label>
                            <IRemoveMyValueWhenUnmountedField formname ={formName} name={'parelles.' + familia.sustentadors_i_custodia[0]}
                                                              component={renderTextField} select label='' fullWidth
                                                              validate={[required]}>
                              {// $FlowFixMe
                                sustentadorsSolitarisAmbPossiblesParelles[familia.sustentadors_i_custodia[0]].map((possibleParella: Person) =>
                                    <MenuItem
                                        key={`parella-${familia.sustentadors_i_custodia[0]}-${possibleParella.id}`}
                                        value={possibleParella.id}>
                                      {possibleParella.nom} ({possibleParella.edat})
                                    </MenuItem>
                                )}
                              <MenuItem key='no-en-te' value='no-en-te'>No en té</MenuItem>
                            </IRemoveMyValueWhenUnmountedField>
                          </Fragment>
                        }
                        {familia.monoparental &&
                        <YesNoQuestion
                          formname={formName}
                          name ={'disposa_de_carnet_familia_monoparental.' + familia.ID}
                          validate={[required]}
                          label='te_carnet_monoparental'
                        />}


                        <YesNoQuestion
                          formname={formName}
                          name ={'usuari_serveis_socials.' + familia.ID}
                          validate={[required]}
                        >
                          <Trans i18nKey='familia_usuaria_css' previous_year={previous_year}>
                            Aquesta família és usuària de serveis socials en seguiment a un CSS o servei especialitzat de l\'Ajuntament de Barcelona des d'abans del 31/12/{{ previous_year }}?
                          </Trans>
                        </YesNoQuestion>

                      </Fragment>
                  )}
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Sticky enabled top={10} bottomBoundary='#stop'>
                  <Hidden smDown>
                    <DescriptionText currentField={helpTopic}/>
                  </Hidden>
                </Sticky>
              </Grid>
            </Grid>
          </form>
        </AppForm>
      </AppFormContainer>
  );
};

export function possiblesParellesDe(person: Person, persons: Map<PersonID, Person>): Array<Person> {
  switch (person.relacio_parentiu) {
    case undefined:
      return personsByRelacioDeParentiu('parella', persons);
    case 'parella':
      return personInFrontOfTheComputer(persons);
    case 'fill':
      return personsByRelacioDeParentiu('gendre', persons);
    case 'germa':
      return personsByRelacioDeParentiu('cunyat', persons);
    case 'pare':
      return personsByRelacioDeParentiu('pare', persons).filter((persona) => persona.id !== person.id);
    case 'avi':
      return personsByRelacioDeParentiu('avi', persons).filter((persona) => persona.id !== person.id);
    default:
      return [];
  }
}

export function sustentadorsSolitarisIPossiblesParelles(sustentadors: Array<Person>, persones: Map<PersonID, Person>) {
  return sustentadors.reduce((result, current) => {
    // $FlowFixMe
    result[current.id] = possiblesParellesDe(current, persones);
    return result;
  }, {});
}

function mapStateToProps(state) {
  const currentField = currentFocussedFieldSelector('FamilyForm')(state);
  const custodies = typeof state.family.custodies !== 'undefined' ? state.family.custodies : {};
  const families = toArray(families016(custodies, state.persons.toArray(), state.family));
  const familiesMonoparentals = families.filter((familia) => familia.monoparental);
  const sustentadorsUnicsIDs = familiesMonoparentals.map((familia) => familia.sustentadors_i_custodia[0]);
  const sustentadorsSolitaris = state.persons.filter((person: Person) => sustentadorsUnicsIDs.includes(person.id));
  const sustentadorsSolitarisAmbPossiblesParelles = sustentadorsSolitarisIPossiblesParelles(sustentadorsSolitaris, state.persons.toArray());
  const helpTopic = state.helpSystem.currentHelpTopic;

  return {
    currentField: currentField,
    custodies: custodies,
    families: families,
    fills: state.persons.filter((person: Person) => esFill(person)),
    helpTopic: helpTopic,
    initialValues: state.family,
    persones: state.persons,
    possiblesSustentadors: state.persons.filter((person: Person) => esSustentador(person)),
    sustentadorsSolitarisAmbPossiblesParelles: sustentadorsSolitarisAmbPossiblesParelles
  };
}

export default withTranslation("translations")(withStyles(styles)(connect(mapStateToProps, {addHouseholdData: addFamilyData})(
    reduxForm(
        {
          form: 'FamilyForm',
          onChange: (values, dispatch) => {
            dispatch(addFamilyData(values));
          },
          onSubmitFail: (error) => {
            focusFirstQuestionWithName(namefirstFieldWithError(error))
          },
        })(FamilyForm))));
