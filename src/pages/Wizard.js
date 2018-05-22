import React, {Component} from "react";
import "./Wizard.css";
import AppHeader from "../components/AppHeader/AppHeader";
import {translate} from "react-i18next";
import {Grid} from 'material-ui'
import StepsComponent from '../components/Steps/StepsComponent';

class WizardPage extends Component {
  render() {

    return (
      <Grid>
        <AppHeader />
        {/* <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            prevBtnOnLastStep={true}
            nextTextOnFinalActionStep={"Veure resultats"}
            nextButtonText="Següent"
            backButtonText="Anterior"
            nextButtonCls="btn btn-next btn-primary btn-lg nextButton"
            backButtonCls="btn btn-prev btn-primary btn-lg backButton"
        /> */}
        <StepsComponent/>
      </Grid>
    );
  }
}

export default translate("translations")(WizardPage);
