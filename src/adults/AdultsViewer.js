//@flow
import React, {Component} from "react";
import type {Adult} from "./AdultsTypes";
import {Trans, translate} from "react-i18next";
import {Grid} from "material-ui";
import Icon from "material-ui/Icon";
import {esAltresFamiliars, esAltresNoFamiliars, esFill, esSustentador} from "../shared/selectorUtils";

type Props = {
  adults: Array<Adult>,
  onRemoveClick: Function,
  onUpdateClick: Function,
  onAddAdultClick: Function
};

class AdultsViewer extends Component<Props, void> {
  renderPersonesQueConviuenList(persones: Array<Adult>) {
    return (
        <Grid container alignItems={"stretch"}>
          <Grid item xs sm={10}>
            <Grid container wrap={"wrap"}>
              <Grid className={"border-family"} item sm={6}>
                <Grid container>
                  <Grid item xs sm={12}>
                    <span className={"personRoleTitle"}>Pares</span>
                  </Grid>
                  {persones
                      .filter((persona: Adult) => esSustentador(persona))
                      .map((persona: Adult) => (
                          <Grid key={persona.id} item sm={6}>
                            <Grid container spacing={8}>
                              <li className={"ItemParent"} key={persona.id}>
                                <Grid item sm={12}>
                            <span
                                onClick={() =>
                                    this.props.onUpdateClick(persona.id)
                                }
                            >
                              {persona.nom}
                              <br/>
                              {persona.data_naixement}
                            </span>
                                </Grid>
                                <Grid item sm={12}>
                                  <button
                                      className="littlebutton"
                                      key={"delete" + persona.id}
                                      onClick={() =>
                                          this.props.onRemoveClick(persona.id)
                                      }
                                  >
                                    <i className="material-icons">delete</i>
                                  </button>
                                </Grid>
                              </li>
                            </Grid>
                          </Grid>
                      ))}

                  {persones.filter((persona: Adult) => esSustentador(persona))
                      .length !== 2 && (
                      <Grid item sm={12} className={"rightButton"}>
                    <span
                        id="AddAdultButton"
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
                  <Grid item xs sm={12}>
                    <span className={"personRoleTitle"}>Altres familiars</span>
                  </Grid>
                  {persones
                      .filter((persona: Adult) => esAltresFamiliars(persona))
                      .map((persona: Adult) => (
                          <Grid key={persona.id} item sm={6}>
                            <Grid container spacing={8}>
                              <li className={"ItemParent"} key={persona.id}>
                                <Grid item sm={12}>
                            <span
                                onClick={() =>
                                    this.props.onUpdateClick(persona.id)
                                }
                            >
                              {persona.nom}
                              <br/>
                              {persona.data_naixement}
                            </span>
                                </Grid>
                                <Grid item sm={12}>
                                  <button
                                      className="littlebutton"
                                      key={"delete" + persona.id}
                                      onClick={() =>
                                          this.props.onRemoveClick(persona.id)
                                      }
                                  >
                                    <i className="material-icons">delete</i>
                                  </button>
                                </Grid>
                              </li>
                            </Grid>
                          </Grid>
                      ))}
                  <Grid item sm={12} className={"rightButton"}>
                  <span
                      id="AddAdultButton"
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
                  <Grid item xs sm={12}>
                    <span className={"personRoleTitle"}>Fills</span>
                  </Grid>
                  {persones
                      .filter((persona: Adult) => esFill(persona))
                      .map((persona: Adult) => (
                          <Grid key={persona.id} item sm={4}>
                            <Grid container spacing={8}>
                              <li className={"ItemParent"} key={persona.id}>
                                <Grid item sm={12}>
                            <span
                                onClick={() =>
                                    this.props.onUpdateClick(persona.id)
                                }
                            >
                              {persona.nom}
                              <br/>
                              {persona.data_naixement}
                            </span>
                                </Grid>
                                <Grid item sm={12}>
                                  <button
                                      className="littlebutton"
                                      key={"delete" + persona.id}
                                      onClick={() =>
                                          this.props.onRemoveClick(persona.id)
                                      }
                                  >
                                    <i className="material-icons">delete</i>
                                  </button>
                                </Grid>
                              </li>
                            </Grid>
                          </Grid>
                      ))}
                  <Grid item sm={12} className={"rightButton"}>
                  <span
                      id="AddAdultButton"
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
              <Grid item xs sm={12}>
              <span className={"personRoleTitle"}>
                Altres adults no familiars
              </span>
              </Grid>
              {persones
                  .filter((persona: Adult) => esAltresNoFamiliars(persona))
                  .map((persona: Adult) => (
                      <Grid key={persona.id} item sm={12}>
                        <Grid container direction={"column"} spacing={8}>
                          <li className={"ItemParent"} key={persona.id}>
                            <Grid item sm={12}>
                        <span
                            onClick={() => this.props.onUpdateClick(persona.id)}
                        >
                          {persona.nom}
                          <br/>
                          {persona.data_naixement}
                        </span>
                            </Grid>
                            <Grid item sm={12}>
                              <button
                                  className="littlebutton"
                                  key={"delete" + persona.id}
                                  onClick={() => this.props.onRemoveClick(persona.id)}
                              >
                                <i className="material-icons">delete</i>
                              </button>
                            </Grid>
                          </li>
                        </Grid>
                      </Grid>
                  ))}
              <Grid item sm={12} className={"rightButton"}>
              <span
                  id="AddAdultButton"
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
        <div className="container-family">
          <div className="bg-family">
            <h1>
              <Trans>Persones de la unitat de convivència</Trans>
            </h1>
            <Grid container className="AdultsViewerPage">
              <Grid item xs={12}>
                {this.renderPersonesQueConviuenList(this.props.adults)}
              </Grid>
            </Grid>
          </div>
          <div className="fixFlex">
          <span>
            <Icon>add_circle</Icon> <span>Afegir un altre família</span>
          </span>
          </div>
        </div>
    );
  }
}

export default translate("translations")(AdultsViewer);
