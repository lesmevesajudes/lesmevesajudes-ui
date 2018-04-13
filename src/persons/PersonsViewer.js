//@flow
import React, {Component} from "react";
import type {Person, PersonRole} from "./PersonTypes";
import {Trans, translate} from "react-i18next";
import {Grid} from "material-ui";
import Icon from "material-ui/Icon";
import {esAltresFamiliars, esAltresNoFamiliars, esSustentador} from "../shared/selectorUtils";
import PersonShowCase from "./PersonShowCase";

type Props = {
  persons: Array<Person>,
  onRemoveClick: Function,
  onUpdateClick: Function,
  onAddPersonClick: (x: PersonRole) => void,
  classes: Object
};

class PersonsViewer extends Component<Props, void> {
  renderPersonsList(persons: Array<Person>) {
    return (
        <Grid container alignItems={"stretch"}>
          <Grid item xs sm={10}>
            <Grid container wrap={"wrap"}>
              <Grid className={"border-family"} item sm={6}>
                <Grid container>
                  <Grid item xs sm={12} className={"titleTypePerson"}>
                    <span>Pares</span>
                  </Grid>
                  {persons.filter(person => esSustentador(person)).map(person => (
                      <PersonShowCase key={person.id} person={person} removePerson={this.props.onRemoveClick}
                                      updatePerson={this.props.onUpdateClick}/>
                  ))}

                  {persons.filter(person => esSustentador(person)).length !== 2 && (
                      <Grid item sm={12} className={"rightButton"}>
										<span
                        id="AddParentButton"
                        onClick={() => this.props.onAddPersonClick("pares")}
                    >
											<Icon>add_circle</Icon>
										</span>
                      </Grid>
                  )}
                </Grid>
              </Grid>
              <Grid className={"border-family"} item sm={6}>
                <Grid container>
                  <Grid item xs sm={12} className={"titleTypePerson"}>
                    <span>Altres familiars</span>
                  </Grid>
                  {persons
                      .filter(person => esAltresFamiliars(person))
                      .map(person => (
                          <PersonShowCase key={person.id} person={person} removePerson={this.props.onRemoveClick}
                                          updatePerson={this.props.onUpdateClick}/>
                      ))}
                  <Grid item sm={12} className={"rightButton"}>
									<span
                      id="AddOtherFamilyButton"
                      onClick={() =>
                          this.props.onAddPersonClick("altres_adults_familiars")
                      }
                  >
										<Icon>add_circle</Icon>
									</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container wrap={"wrap"} className={"fixFlex"}>
              <Grid className={"border-family"} item sm={12}>
                <Grid container>
                  <Grid item xs sm={12} className={"titleTypePerson"}>
                    <span>Fills</span>
                  </Grid>
                  {persons.filter(person => person.rol === "fill").map(person => (
                      <PersonShowCase key={person.id} person={person} removePerson={this.props.onRemoveClick}
                                      updatePerson={this.props.onUpdateClick}/>
                  ))}
                  <Grid item sm={12} className={"rightButton"}>
									<span
                      id="AddChildButton"
                      onClick={() => this.props.onAddPersonClick("fill")}
                  >
										<Icon>add_circle</Icon>
									</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs sm={2} className={"border-family"}>
            <Grid container justify={"space-between"} direction={"column"}>
              <Grid item xs sm={12} className={"titleTypePerson"}>
							<span>
								Altres adults no familiars
							</span>
              </Grid>
              {persons
                  .filter(person => esAltresNoFamiliars(person))
                  .map(person => (
                      <PersonShowCase key={person.id} person={person} removePerson={this.props.onRemoveClick}
                                      updatePerson={this.props.onUpdateClick}/>
                  ))}
              <Grid item sm={12} className={"rightButton"}>
							<span
                  id="AddOtherPersonButton"
                  onClick={() => this.props.onAddPersonClick("altres_adults")}
              >
								<Icon>add_circle</Icon>
							</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }

  render() {
    return (
        <Grid container className="container-family">
          <Grid item sm={12} xs={12} className="bg-family">
            <h1>
              <Trans>Persones de la unitat de convivència</Trans>
            </h1>
            <Grid container className="PersonsViewerPage">
              <Grid item xs={12}>
                {this.renderPersonsList(this.props.persons)}
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} xs={12} className="fixFlex">
					<span>
						<Icon>add_circle</Icon> <span>Afegir un altre família</span>
					</span>
          </Grid>
        </Grid>
    );
  }
}

export default translate("translations")(PersonsViewer);
