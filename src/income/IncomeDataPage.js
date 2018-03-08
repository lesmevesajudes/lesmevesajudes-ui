//@flow
import React from 'react';
import IncomeDataViewer from './IncomeDataViewer';
import {connect} from 'react-redux';
import {Adult} from "../adults/AdultsTypes";
import type {AdultId} from "../adults/AdultsTypes";
import {Map} from 'immutable';
import {addIncomeDataAction} from '../adults/AdultsActions'

type Props = {
    personesQuePodenTenirRendes: Map<AdultId, Adult>,
    addIncomeDataAction: Function,
}

class incomeDataPage extends React.Component<Props>{
    render() {
        return (<IncomeDataViewer
            personesQuePodenTenirRendes={this.props.personesQuePodenTenirRendes}
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
        personesQuePodenTenirRendes: state.adults,
    };
}

export default connect(mapStateToProps, {addIncomeDataAction})(incomeDataPage);