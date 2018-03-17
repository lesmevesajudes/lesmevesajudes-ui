import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AdultsPage from "../adults/AdultsPage";
import RentForm from "../rent/RentForm";
import ResultsPage from "../results/ResultsPage";

import './Wizard.css';
import AppHeader from "../components/AppHeader/AppHeader";
import {translate} from "react-i18next";



class WizardPage extends Component {
    render() {
        const { t } = this.props;

        const steps =
            [
                {name: t('Persones que conviuen'), component: <AdultsPage />},
                {name: t('Domicili habitual'), component: <RentForm />},
                {name: t('Resultats'), component: <ResultsPage />}

            ];

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