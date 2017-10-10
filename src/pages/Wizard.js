import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AdultsPage from "../adults/AdultsPage";
import ChildrenPage from "../children/ChildrenPage";
import HouseHold from "../household/HouseholdForm";
import './Wizard.css';
import FinancialDataAdder from "../financial/FinancialDataAdder";
import RentAdder from "../rent/RentForm";
import ResultsPage from "../results/ResultsPage";
import PropertiesAdder from "../properties/PropertiesForm";
import YesNoSkipStep from "./YesNoSkipStep";

const steps =
    [
        {name: 'Adults', component: <AdultsPage />},
        {name: 'Menors', component: <YesNoSkipStep question='Hi ha menors a la família?' nextStep="3"><ChildrenPage/></YesNoSkipStep>},
        {name: 'Família', component: <HouseHold />},
        {name: 'Dades Financeres', component: <FinancialDataAdder />},
        {name: 'Lloguer', component: <RentAdder />},
        {name: 'Propietats', component: <PropertiesAdder />},
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