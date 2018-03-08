//@flow
import React from 'react';
import {connect} from 'react-redux';
import {Adult} from "../adults/AdultsTypes";
import type {AdultId} from "../adults/AdultsTypes";
import {Map} from 'immutable';
import {addIncomeDataAction} from '../adults/AdultsActions'
import BenefitsViewer from "./BenefitsViewer";

type Props = {
    personesQuePodenTenirAjuts: Map<AdultId, Adult>,
    addIncomeDataAction: Function,
}

class BenefitsPage extends React.Component<Props>{
    render() {
        return (<BenefitsViewer
            personesQuePodenTenirAjuts={this.props.personesQuePodenTenirAjuts}
            onAddIncomeDataClick={this.handleAddIncomeDataClick}
        />);
    }
    handleAddIncomeDataClick = (e) => {
        console.log(e);
        this.props.addIncomeDataAction(e.id, e.ingressos_bruts);
    }
}

function mapStateToProps(state) {
    return {
        personesQuePodenTenirAjuts: state.adults,
        incomeData: state.incomeData
    };
}

export default connect(mapStateToProps, {addIncomeDataAction})(BenefitsPage);