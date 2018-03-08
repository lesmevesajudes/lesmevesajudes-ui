import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AdultsPage from "../adults/AdultsPage";
import ChildrenPage from "../children/ChildrenPage";
import RentForm from "../rent/RentForm";
import ResultsPage from "../results/ResultsPage";
import YesNoSkipStep from "./YesNoSkipStep";

import './Wizard.css';
import IncomeDataPage from "../income/IncomeDataPage";
import AppHeader from "../components/AppHeader/AppHeader";
import BenefitsPage from "../benefits/BenefitsPage";
import {Trans, translate} from "react-i18next";

const steps =
    [
        {name: <Trans>Adults</Trans>, component: <AdultsPage />},
        {name: <Trans>Menors</Trans>, component: <YesNoSkipStep question='Hi ha menors a la família?' nextStep="3"><ChildrenPage/></YesNoSkipStep>},
        {name: <Trans>Ingressos</Trans>, component: <IncomeDataPage />},
        {name: <Trans>Ajuts</Trans>, component: <BenefitsPage />},
        {name: <Trans>Domicili habitual</Trans>, component: <YesNoSkipStep question="El domicili actual és en règim de lloguer?" nextStep="7"><RentForm /></YesNoSkipStep>},
        {name: <Trans>Resultats</Trans>, component: <ResultsPage />}

    ];

class WizardPage extends Component {
    render() {
        return (
            <div className='step-progress'>
                <AppHeader/>
                <StepZilla steps={steps}
                           preventEnterSubmission={true}
                           nextTextOnFinalActionStep={'Veure resultats'}
                           nextButtonText='Següent'
                           backButtonText='Anterior'
                           nextButtonCls='btn btn-next btn-primary btn-lg pull-right'
                           backButtonCls='btn btn-prev btn-primary btn-lg pull-left'
                />
        </div>);

    }
}

export default translate('translations')(WizardPage);