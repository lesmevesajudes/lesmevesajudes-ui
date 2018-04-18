import React from "react";
import Link from "react-router-dom/es/Link";
import {Map} from "immutable";
import type {PersonID} from "../persons/PersonTypes";
import {Person} from "../persons/PersonTypes";
import {Grid} from "material-ui";

type Props = {
  benefitsForPersons: any,
  persons: Map<PersonID, Person>
};

class PersonalBenefits extends React.Component<Props> {
  constructor() {
    super();
    this.possibleBenefits = [
      {
        ID: "AE_230_mensual",
        name: "Fons infància",
        periode: "mes",
        url: "/ajuts/fons_infancia"
      },
      {
        ID: "AE_230_01_mensual",
        name: "Fons infància ajut famílies monoparentals",
        periode: "any",
        url: "/ajuts/fons_infancia"
      },
      {
        ID: "EG_233_mensual",
        name: "Ajuts individuals de menjador",
        periode: "dia",
        url: "/ajuts/menjador"
      },
      {
        ID: "GE_051_00_mensual",
        name: "Renda activa d'inserció aturats de llarga durada",
        periode: "mes",
        url: "/ajuts/rai"
      },
      {ID: "GE_051_01_mensual", name: "Renda activa d'inserció discapacitat 33%", periode: "mes", url: "/ajuts/rai"},
      {
        ID: "GE_051_02_mensual",
        name: "Renda activa d'inserció per a emigrants retornats",
        periode: "mes",
        url: "/ajuts/rai"
      },
      {
        ID: "GE_051_03_mensual",
        name: "Renda activa d'inserció per a víctimes de violència de gènere o domèstica",
        periode: "mes",
        url: "/ajuts/rai"
      }
      //{ID: "GG_270_mensual", name: "Renda Garantida Ciutadana", periode: "mes", url:"/ajuts/rgc"}
    ];
    this.period = "2017-01";
  }

  hasAnyBenefit(personWithBenefits) {
    if (typeof personWithBenefits === "undefined") return false; //TODO hackish. this happends due some inconsistency in the request processing. On
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
              className="ResultPage"
              container
              justify="center"
              alignItems="center"
              key={benefit.ID}
          >
            <Grid item sm={12}>
              <li className="ItemResult" key={benefit.ID}>
                <Grid container justify="center" alignItems="center" wrap="wrap">
                  <Grid id={benefit.ID} className="benefitText" item xs={12} sm={7}>
                    <p>{benefit.name}</p>
                  </Grid>
                  <Grid item className="Separator" xs={6} sm={2}>
                    Import:{" "}
                    <span className="moneyText">
                    {personWithBenefits[benefit.ID][this.period]}
                  </span>{" "}
                    € / {benefit.periode}
                  </Grid>
                  <Grid item className="Separator" xs={6} sm={3}>
                    <Link to={benefit.url}>
                      <button
                          className="buttonMoreInfo"
                          key={benefit.ID}
                      >
                        Més informació
                      </button>
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
          <li className="ItemResultOut" key={person.id}>
          <span className="ItemTitle">
            Ajudes per: <span>{person.nom}</span>
          </span>
            <br/>

            <ul className="ItemList">
              {this.possibleBenefits.map(benefit =>
                  this.renderAPersonalBenefit(benefit, personBenefits)
              )}
            </ul>
          </li>
      );
    } else {
      return (
          <Grid container justify="space-between" alignItems="center" key={person.id}>
            <Grid item sm={12}>
              <li className="ItemResultOut" key={person.id}>
                <div>
                <span>
                  Ajudes per: <span className="ItemTitle">{person.nom}</span>
                </span>
                  <br/>
                  <Grid container className="ResultPage" justify="space-between">
                    <Grid item xs sm={12}>
                      <div className="ItemResult">No opta a cap ajuda</div>
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
        <ul className="ResultList">
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
