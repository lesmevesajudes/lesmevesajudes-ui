import {Grid, Typography, withStyles} from '@material-ui/core';
import {Map} from 'immutable';
import React from 'react';
import {Trans} from 'react-i18next';
import type {PersonID} from '../persons/PersonTypes';
import {Person} from '../persons/PersonTypes';
import {newDate} from "../shared/dateUtils";
import styles from '../styles/theme';
import BenefitRow, {NoBenefitRow} from './BenefitRow';

type PersonalBenefitsProps = {
  benefitsForPersons: any,
  persons: Map<PersonID, Person>
};

class PersonalBenefits extends React.Component<PersonalBenefitsProps> {
  constructor() {
    super();
    this.possibleBenefits = [
      {
        ID: 'AE_230_mensual',
        name: <Trans i18nKey='AE_230_mensual_title'>Fons extraordinari d’ajuts d’emergència social per a infants de 0 a
          16 anys</Trans>,
        periode: <Trans i18nKey='mes'>mes</Trans>,
        conditions: <Trans i18nKey='maxim_9_mesos'>màxim 9 mesos</Trans>,
        url: '/ajuts/fons_infancia',
        from: newDate(2018, 4, 25),
        to: newDate(2018, 5, 25)
      },
      {
        ID: 'AE_230_01_mensual',
        name: <Trans i18nKey='AE_230_01_mensual_title'>Fons extraordinari d’ajuts d’emergència social per a infants de 0
          a 16 anys per a famílies
          monoparentals</Trans>,
        periode: <Trans i18nKey='any'>any</Trans>,
        url: '/ajuts/fons_infancia',
        from: newDate(2018, 4, 25),
        to: newDate(2018, 5, 25)
      },
      {
        ID: 'EG_233_mensual',
        name: <Trans i18nKey='EG_233_mensual_title'>Beques menjador escolar de Barcelona</Trans>,
        amountText: <Trans i18nKey='EG_233_mensual_amount'>Entre 3 - 6 €/dia</Trans>,
        url: '/ajuts/menjador',
        from: newDate(2018, 9, 3),
        to: newDate(2018, 9, 14)
      },
      {
        ID: 'GE_051_00_mensual',
        name: <Trans i18nKey='GE_051_00_mensual_title'>Renda activa d'inserció aturats de llarga durada</Trans>,
        periode: <Trans i18nKey='mes'>mes</Trans>,
        url: '/ajuts/rai',
        from: undefined,
        to: undefined
      },
      {
        ID: 'GE_051_01_mensual',
        name: <Trans i18nKey='GE_051_01_mensual_title'>Renda activa d'inserció discapacitat 33%</Trans>,
        periode: <Trans i18nKey='mes'>mes</Trans>,
        url: '/ajuts/rai'
      },
      {
        ID: 'GE_051_02_mensual',
        name: <Trans i18nKey='GE_051_02_mensual_title'>Renda activa d'inserció per a emigrants retornats</Trans>,
        periode: <Trans i18nKey='mes'>mes</Trans>,
        url: '/ajuts/rai',
        from: undefined,
        to: undefined
      },
      {
        ID: 'GE_051_03_mensual',
        name: <Trans i18nKey='GE_051_03_mensual_title'>Renda activa d'inserció per a víctimes de violència de gènere o
          domèstica</Trans>,
        periode: <Trans i18nKey='mes'>mes</Trans>,
        url: '/ajuts/rai',
        from: undefined,
        to: undefined
      },
      {
        ID: 'GG_270_mensual',
        name: <Trans i18nKey='GG_270_mensual_title'>Renda garantida ciutadana</Trans>,
        doNotShowAmount: true,
        url: '/ajuts/rgc',
        from: undefined,
        to: undefined,
      }
    ];
    this.period = '2017-01';
  }

  hasAnyBenefit(personWithBenefits) {
    if (typeof personWithBenefits === 'undefined') return false; //TODO hackish. this happends due some inconsistency in the request processing. On
    return (
        this.possibleBenefits.reduce((acc, benefit) => {
          return acc + personWithBenefits[benefit.ID][this.period];
        }, 0) > 0
    );
  }

  renderAPersonalBenefit(benefit, personWithBenefits) {
    if (personWithBenefits[benefit.ID][this.period] > 0) {
      return (
          <BenefitRow benefit={benefit} subject={personWithBenefits} key={benefit.ID}/>
      );
    }
  }

  renderPersonalBenefits(person: Person, personBenefits: any) {
    return (
        <Grid container direction='column' className={this.props.classes.ResultItemResultOut} key={person.id}>
          <Typography variant='subtitle1' gutterBottom>
            <Trans i18nKey='ajudes_a_les_que_opta_persona'>Ajudes de les que podria ser
              beneficiàri/a:</Trans><b>{person.nom}</b>
          </Typography>
          {(this.hasAnyBenefit(personBenefits))
              ? this.possibleBenefits.map(benefit => this.renderAPersonalBenefit(benefit, personBenefits))
              : <NoBenefitRow/>
          }
        </Grid>
    );
  }

  render() {
    return (
        <Grid>
          {this.props.persons
              .valueSeq()
              .map((person: Person) =>
                  this.renderPersonalBenefits(person, this.props.benefitsForPersons[person.id])
              )}
        </Grid>
    );
  }
}

export default withStyles(styles)(PersonalBenefits);
