import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AdultsPage from "../adults/AdultsPage";
import ChildrenPage from "../children/ChildrenPage";
import HouseHoldForm from "../household/HouseholdForm";
import RentForm from "../rent/RentForm";
import ResultsPage from "../results/ResultsPage";
import YesNoSkipStep from "./YesNoSkipStep";

import './Wizard.css';
import IncomeDataPage from "../income/IncomeDataPage";

const steps =
    [
        {name: 'Adults', component: <AdultsPage />},
        {name: 'Menors', component: <YesNoSkipStep question='Hi ha menors a la família?' nextStep="3"><ChildrenPage/></YesNoSkipStep>},
        {name: 'Família', component: <HouseHoldForm />},
        {name: 'Ingressos', component: <IncomeDataPage />},
        {name: 'Domicili habitual', component: <YesNoSkipStep question="El domicili actual és en règim de lloguer?" nextStep="7"><RentForm /></YesNoSkipStep>},
        {name: 'Resultats', component: <ResultsPage />}

    ];

class WizardPage extends Component {
    render() {
        return (
            <div className='step-progress'>
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

export default WizardPage;