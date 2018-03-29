import React from "react";
import { connect } from "react-redux";
import { fetchSimulation } from "./FetchSimulationAction";
import PersonalBenefits from "./PersonalBenefits";
import FamilyBenefits from "./FamilyBenefits";
import type { AdultId, Adult } from "../adults/AdultsTypes";
import ReportBug from "../reportBug/ReportBugPage";
import axios from "axios/index";
import { Grid } from "material-ui";
import { withStyles } from "material-ui/styles/index";




type Props = {
  isError: boolean,
  isRequestDone: boolean,
  simulationData: any,
  resultsData: any,
  persons: Map<AdultId, Adult>,
  classes: Object
};
class ResultsPage extends React.Component<Props> {
  enoughDataForSimulation() {
    return this.props.persons.count() > 0;
  }

  componentDidMount() {
    /*if (this.enoughDataForSimulation()) {
            this.props.fetchSimulation(this.props.simulationData);
        }*/
  }
  submitReport = values => {
    // print the form values to the console
    console.log("form submit:", values);
    axios
      .post("https://lesmevesajudes-ss.herokuapp.com/api/simulations", {
        comments: values.comments || "",
        expected_result: values.resultat_esperat || "",
        application_state: values.application_state,
        valid_result: !values.invalid_result
      })
      .then(function(response) {
        console.log("saved successfully", response);
        //kill em all
        window.location.reload(true);
      })
      .catch(function(error) {
        console.error(error);
        alert(error);
      });
  };

  render() {
    const divStyle = { marginTop: "32px", marginBottom: "32px" };
    const { classes } = this.props;
    if (!this.enoughDataForSimulation()) {
      return (
        <div class="bg-container ">
          <p class="errorText">Falten dades per a executar la </p>
          <div>
            <ReportBug onSubmit={this.submitReport} />
          </div>
        </div>
      );
    }

    if (!this.props.isRequestDone) {
      return <div style={divStyle}>Carregant...</div>;
    }

    if (this.props.isError) {
      return (
        <div>
          <h1>Error fent la petició</h1>
          <p>{this.props.resultsData.message}</p>
          <p>Details:</p>
          <p>
            {JSON.stringify(
              JSON.parse(this.props.resultsData.response.request.responseText),
              null,
              2
            )}
          </p>
        </div>
      );
    }

    return (
      <div>
        <div class="bg-container ">
          <h1>Ajudes a les que podria optar</h1>
          <Grid className={classes.root} container>
            <Grid item xs={12}>
              <PersonalBenefits
                benefitsForPersons={this.props.resultsData.persones}
                persons={this.props.persons}
              />
            </Grid>

            <Grid item xs={12}>
              <div>
                <FamilyBenefits benefits={this.props.resultsData.families} />
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <ReportBug onSubmit={this.submitReport} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isError: state.results.isError,
    isRequestDone: state.results.isRequestDone,
    simulationData: state,
    resultsData: state.results.response,
    persons: state.adults
  };
}

export default connect(mapStateToProps, { fetchSimulation })(
  withStyles(styles)(ResultsPage)
);
