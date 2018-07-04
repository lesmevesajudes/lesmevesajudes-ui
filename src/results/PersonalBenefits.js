import React from 'react';
import {Map} from 'immutable';
import type {PersonID} from '../persons/PersonTypes';
import {Person} from '../persons/PersonTypes';
import {Grid, Typography} from '@material-ui/core';
import {Trans} from 'react-i18next';
import BenefitRow, {NoBenefitRow} from './BenefitRow';

type Props = {
  benefitsForPersons: any,
  persons: Map<PersonID, Person>
};

class PersonalBenefits extends React.Component<Props> {
  constructor() {
    super();
    this.possibleBenefits = [
      {
        ID: 'AE_230_mensual',
        name: <Trans>Fons infància</Trans>,
        periode: 'mes',
        url: '/ajuts/fons_infancia'
      },
      {
        ID: 'AE_230_01_mensual',
        name: <Trans>Fons infància ajut famílies monoparentals</Trans>,
        periode: 'any',
        url: '/ajuts/fons_infancia'
      },
      {
        ID: 'EG_233_mensual',
        name: <Trans>Ajuts individuals de menjador</Trans>,
        periode: 'dia',
        url: '/ajuts/menjador'
      },
      {
        ID: 'GE_051_00_mensual',
        name: <Trans>Renda activa d'inserció aturats de llarga durada</Trans>,
        periode: 'mes',
        url: '/ajuts/rai'
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
        url: '/ajuts/rai'
      },
      {
        ID: 'GE_051_03_mensual',
        name: <Trans>Renda activa d'inserció per a víctimes de violència de gènere o domèstica</Trans>,
        periode: 'mes',
        url: '/ajuts/rai'
      },
      {ID: 'GG_270_mensual', name: 'Renda Garantida Ciutadana', periode: 'mes', url: '/ajuts/rgc'}
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
          <BenefitRow benefit={benefit} key={benefit.ID}/>
      );
    }
  }

  renderPersonalBenefits(person: Person, personBenefits: any) {
    return (
        <li className='ItemResultOut' key={person.id}>
          <Typography variant='headline' gutterBottom>
            Ajudes a les que podria ser beneficiàri/a: {person.nom}
          </Typography>

          <Grid container className='ItemList'>
            {(this.hasAnyBenefit(personBenefits))
                ? this.possibleBenefits.map(benefit => this.renderAPersonalBenefit(benefit, personBenefits))
                : <NoBenefitRow/>
            }
          </Grid>
        </li>
    );
  }

  renderPersonalBenefitList(
      personsData: Map<PersonID, Person>,
      personsWithBenefits: any
  ) {
    return (
        <Grid className='ResultList'>
          {personsData
              .valueSeq()
              .map((person: Person) =>
                  this.renderPersonalBenefits(person, personsWithBenefits[person.id])
              )}
        </Grid>
    );
  }

  render() {
    return (
        <Grid className='ResultList'>
          {this.props.persons
              .valueSeq()
              .map((person: Person) =>
                  this.renderPersonalBenefits(person, this.props.benefitsForPersons[person.id])
              )}
        </Grid>
    );
  }
}

export default PersonalBenefits;
