//@flow
import React, {Component} from "react";
import type {Adult, PersonRole} from "./AdultsTypes";
import {Trans, translate} from "react-i18next";
import {Grid} from "material-ui";
import Icon from "material-ui/Icon";
import {esAltresNoFamiliars, esAltresFamiliars, esSustentador} from "../shared/selectorUtils";
import PersonShowCase from "./PersonShowCase";

type Props = {
  adults: Array<Adult>,
  onRemoveClick: Function,
  onUpdateClick: Function,
  onAddAdultClick: (x: PersonRole) => void,
  classes: Object
};

class AdultsViewer extends Component<Props, void> {
  renderAdultsList(adults: Array<Adult>) {
    return (
        <Grid container alignItems={"stretch"}>
          <Grid item xs sm={10}>
            <Grid container wrap={"wrap"}>
              <Grid className={"border-family"} item sm={6}>
                <Grid container>
                  <Grid item xs sm={12} className={"titleTypePerson"}>
                    <span>Pares</span>
                  </Grid>
                  {adults.filter(adult => esSustentador(adult)).map(adult => (
                      <PersonShowCase person={adult} removePerson={this.props.onRemoveClick} updatePerson={this.props.onUpdateClick}/>
                  ))}

                  {adults.filter(adult => esSustentador(adult)).length !== 2 && (
                      <Grid item sm={12} className={"rightButton"}>
										<span
                        id="AddParentButton"
                        onClick={() => this.props.onAddAdultClick("pares")}
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
                  {adults
                      .filter(adult => esAltresFamiliars(adult))
                      .map(adult => (
                          <PersonShowCase person={adult} removePerson={this.props.onRemoveClick} updatePerson={this.props.onUpdateClick}/>
                      ))}
                  <Grid item sm={12} className={"rightButton"}>
									<span
                      id="AddOtherFamilyButton"
                      onClick={() =>
                          this.props.onAddAdultClick("altres_adults_familiars")
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
                  {adults.filter(adult => adult.rol === "fill").map(adult => (
                      <PersonShowCase person={adult} removePerson={this.props.onRemoveClick} updatePerson={this.props.onUpdateClick}/>
                  ))}
                  <Grid item sm={12} className={"rightButton"}>
									<span
                      id="AddChildButton"
                      onClick={() => this.props.onAddAdultClick("fill")}
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
              {adults
                  .filter(adult => esAltresNoFamiliars(adult))
                  .map(adult => (
                      <PersonShowCase person={adult} removePerson={this.props.onRemoveClick} updatePerson={this.props.onUpdateClick}/>
                  ))}
              <Grid item sm={12} className={"rightButton"}>
							<span
                  id="AddOtherAdultButton"
                  onClick={() => this.props.onAddAdultClick("altres_adults")}
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
            <Grid container className="AdultsViewerPage">
              <Grid item xs={12}>
                {this.renderAdultsList(this.props.adults)}
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

export default translate("translations")(AdultsViewer);
