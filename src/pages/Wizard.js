import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AdultsPage from "../adults/AdultsPage";
import ChildrenPage from "../children/ChildrenPage";
import HouseHoldForm from "../household/HouseholdForm";
import RentForm from "../rent/RentForm";
import ResultsPage from "../results/ResultsPage";
import PropertiesForm from "../properties/PropertiesForm";
import YesNoSkipStep from "./YesNoSkipStep";

import './Wizard.css';
import FinancialDataPage from "../financial/FinancialDataPage";

const steps =
    [
        {name: 'Adults', component: <AdultsPage />},
        {name: 'Menors', component: <YesNoSkipStep question='Hi ha menors a la família?' nextStep="3"><ChildrenPage/></YesNoSkipStep>},
        {name: 'Família', component: <HouseHoldForm />},
        {name: 'Dades Financeres', component: <FinancialDataPage />},
        {name: 'Lloguer', component: <YesNoSkipStep question="El domicili actual és en règim de lloguer?" nextStep="7"><RentForm /></YesNoSkipStep>},
        {name: 'Propietats', component: <YesNoSkipStep question="Disposa d'algun inmoble en propietat?" nextStep="7"><PropertiesForm /></YesNoSkipStep>},
        {name: 'Resultats', component: <ResultsPage />}

    ];

class WizardPage extends Component {
    render() {
        return (<div className='step-progress'>
            <StepZilla steps={steps}
                       preventEnterSubmission={true}
                       nextTextOnFinalActionStep={"Veure resultats"}
                       nextButtonText="Següent"
                       backButtonText="Anterior"
            />
        </div>);

    }
}

export default WizardPage;