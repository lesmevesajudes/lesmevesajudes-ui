import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AdultsPage from "../adults/AdultsPage";
import ChildrenPage from "../children/ChildrenPage";
import HouseHold from "../household/HouseholdForm";
import './Wizard.css';
import FinancialDataAdder from "../financial/FinancialDataAdder";
import RentAdder from "../rent/RentAdder";
import ResultsPage from "../results/ResultsPage";
import PropertiesAdder from "../properties/PropertiesAdder";

const steps =
    [
        {name: 'Adults', component: <AdultsPage />},
        {name: 'Menors', component: <ChildrenPage />},
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
                       nextTextOnFinalActionStep={"Veure resultats"}/>
        </div>);

    }
}

export default WizardPage;