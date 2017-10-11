import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AdultsPage from "../adults/AdultsPage";
import ChildrenPage from "../children/ChildrenPage";
import HouseHoldForm from "../household/HouseholdForm";
import FinancialDataAdder from "../financial/FinancialDataAdder";
import RentForm from "../rent/RentForm";
import ResultsPage from "../results/ResultsPage";
import PropertiesForm from "../properties/PropertiesForm";
import YesNoSkipStep from "./YesNoSkipStep";

import './Wizard.css';

const steps =
    [
        {name: 'Adults', component: <AdultsPage />},
        {name: 'Menors', component: <YesNoSkipStep question='Hi ha menors a la família?' nextStep="3"><ChildrenPage/></YesNoSkipStep>},
        {name: 'Família', component: <HouseHoldForm />},
        {name: 'Dades Financeres', component: <FinancialDataAdder />},
        {name: 'Lloguer', component: <RentForm />},
        {name: 'Propietats', component: <PropertiesForm />},
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