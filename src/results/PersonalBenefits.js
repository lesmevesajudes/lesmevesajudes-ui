import React from 'react';
import Link from 'react-router-dom/Link';
import {Map} from 'immutable';
import type {PersonID} from '../persons/PersonTypes';
import {Person} from '../persons/PersonTypes';
import {Button, Grid} from '@material-ui/core';
import {Trans} from "react-i18next";

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
          <Grid
              className='ResultPage'
              container
              justify='center'
              alignItems='center'
              key={benefit.ID}
          >
            <Grid item sm={12}>
              <li className='ItemResult' key={benefit.ID}>
                <Grid container justify='center' alignItems='center' wrap='wrap'>
                  <Grid id={benefit.ID} className='benefitText' item xs={12} sm={9}>
                    <p>{benefit.name}</p>
                  </Grid>

                  <Grid item className='Separator' xs={6} sm={3}>
                    <Link className={"linkBenefits"} to={benefit.url}>
                      <Button
                          variant="contained"
                          color="primary"
                          key={benefit.ID}
                      >
                        Més informació
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </li>
            </Grid>
          </Grid>
      );
    }
  }

  renderPersonalBenefits(person: Person, personBenefits: any) {
    if (this.hasAnyBenefit(personBenefits)) {
      return (
          <li className='ItemResultOut' key={person.id}>
          <span className='ItemTitle'>
            Ajudes per: <span>{person.nom}</span>
          </span>
            <br/>

            <ul className='ItemList'>
              {this.possibleBenefits.map(benefit =>
                  this.renderAPersonalBenefit(benefit, personBenefits)
              )}
            </ul>
          </li>
      );
    } else {
      return (
          <Grid container justify='space-between' alignItems='center' key={person.id}>
            <Grid item sm={12}>
              <li className='ItemResultOut' key={person.id}>
                <div>
                <span>
                  Ajudes per: <span className='ItemTitle'>{person.nom}</span>
                </span>
                  <br/>
                  <Grid container className='ResultPage' justify='space-between'>
                    <Grid item xs sm={12}>
                      <span className='ItemResult'>No opta a cap ajuda</span>
                    </Grid>
                  </Grid>
                </div>
              </li>
            </Grid>
          </Grid>
      );
    }
  }

  renderPersonalBenefitList(
      personsData: Map<PersonID, Person>,
      personsWithBenefits: any
  ) {
    return (
        <ul className='ResultList'>
          {personsData
              .valueSeq()
              .map((person: Person) =>
                  this.renderPersonalBenefits(person, personsWithBenefits[person.id])
              )}
        </ul>
    );
  }

  render() {
    return (
        <div>
          {this.renderPersonalBenefitList(
              this.props.persons,
              this.props.benefitsForPersons
          )}
        </div>
    );
  }
}

export default PersonalBenefits;
