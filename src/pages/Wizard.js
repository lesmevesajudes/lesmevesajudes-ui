import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import AdultsPage from "../adults/AdultsPage";
import ChildrenPage from "../children/ChildrenPage";
import RentForm from "../rent/RentForm";
import ResultsPage from "../results/ResultsPage";
import YesNoSkipStep from "./YesNoSkipStep";

import './Wizard.css';
import AppHeader from "../components/AppHeader/AppHeader";
import {translate} from "react-i18next";



class WizardPage extends Component {
    render() {
        const { t } = this.props;

        const steps =
            [
                {name: t('Adults'), component: <AdultsPage />},
                {name: t('Menors'), component: <YesNoSkipStep question={t('Hi ha menors a la família?')} nextStep="3"><ChildrenPage/></YesNoSkipStep>},
                {name: t('Domicili habitual'), component: <YesNoSkipStep question={t('El domicili actual és en règim de lloguer?')} nextStep="7"><RentForm /></YesNoSkipStep>},
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