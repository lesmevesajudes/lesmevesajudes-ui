import {Grid, Typography, withStyles} from '@material-ui/core';
import classNames from "classnames";
import React from 'react';
import {Trans, withTranslation} from 'react-i18next';
import Moment from 'moment';
import {styles} from "../styles/theme";
import {Person} from '../persons/PersonTypes';
import BenefitRow, {NoBenefitRow} from './BenefitRow';
import {getBenefits} from "../shared/benefits";

const period = Moment().format('YYYY-MM');

const PersonalBenefits = (props) => {

  const possibleBenefits = getBenefits('personal');

  function hasAnyBenefit(personWithBenefits) {
    if (typeof personWithBenefits === 'undefined') return false; //TODO hackish. this happends due some inconsistency in the request processing. On
    return (
        possibleBenefits.reduce((acc, benefit) => {
          return acc + personWithBenefits[benefit.ID][period];
        }, 0) > 0
    );
  }

  function renderAPersonalBenefit(benefit, personWithBenefits) {
    if (personWithBenefits[benefit.ID][period] > 0) {
      return (
          <BenefitRow benefit={benefit} subject={personWithBenefits} key={benefit.ID}/>
      );
    }
  }

  function renderPersonalBenefits(person: Person, personBenefits: any) {
    return (
        <Grid container className={classNames(props.classes.ResultItemResultOut, 'line-height-force')} direction='column' key={person.id}>
          <Typography variant='subtitle1' gutterBottom>
            <Trans i18nKey='ajudes_a_les_que_opta_persona'>Ajudes de les que podria ser
              beneficiàri/a:</Trans> <b>{person.nom}</b>
          </Typography>
          {(hasAnyBenefit(personBenefits))
              ? possibleBenefits.map(benefit => renderAPersonalBenefit(benefit, personBenefits))
              : <NoBenefitRow/>
          }
        </Grid>
    );
  }

  return (
        <Grid>
          {props.persons
              .valueSeq()
              .map((person: Person) =>
                  renderPersonalBenefits(person, props.benefitsForPersons[person.id])
              )}
        </Grid>
  );

}

export default withTranslation("translations")(withStyles(styles)(PersonalBenefits));
