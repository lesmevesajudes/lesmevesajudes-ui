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
        name: <Trans>Fons extraordinari d’ajuts d’emergència social per a infants de 0 a 16 anys</Trans>,
        periode: 'mes',
        conditions: 'màxim 9 mesos',
        url: '/ajuts/fons_infancia',
        from: newDate(2018, 4, 25),
        to: newDate(2018, 5, 25)
      },
      {
        ID: 'AE_230_01_mensual',
        name: <Trans>Fons extraordinari d’ajuts d’emergència social per a infants de 0 a 16 anys per a famílies
          monoparentals</Trans>,
        periode: 'any',
        url: '/ajuts/fons_infancia',
        from: newDate(2018, 4, 25),
        to: newDate(2018, 5, 25)
      },
      {
        ID: 'EG_233_mensual',
        name: <Trans>Beques menjador escolar de Barcelona</Trans>,
        amountText: 'Entre 3 - 6 €/dia',
        url: '/ajuts/menjador',
        from: newDate(2018, 9, 3),
        to: newDate(2018, 9, 14)
      },
      {
        ID: 'GE_051_00_mensual',
        name: <Trans>Renda activa d'inserció aturats de llarga durada</Trans>,
        periode: 'mes',
        url: '/ajuts/rai',
        from: undefined,
        to: undefined
      },
      {
        ID: 'GE_051_01_mensual',
        name: <Trans>Renda activa d'inserció discapacitat 33%</Trans>,
        periode: 'mes',
        url: '/ajuts/rai'
      },
      {
        ID: 'GE_051_02_mensual',
        name: <Trans>Renda activa d'inserció per a emigrants retornats</Trans>,
        periode: 'mes',
        url: '/ajuts/rai',
        from: undefined,
        to: undefined
      },
      {
        ID: 'GE_051_03_mensual',
        name: <Trans>Renda activa d'inserció per a víctimes de violència de gènere o domèstica</Trans>,
        periode: 'mes',
        url: '/ajuts/rai',
        from: undefined,
        to: undefined
      },
      {
        ID: 'GG_270_mensual',
        name: <Trans>Renda garantida ciutadana</Trans>,
        amountText: '-',
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
            Ajudes de les que podria ser beneficiàri/a: <b>{person.nom}</b>
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
