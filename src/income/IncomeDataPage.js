//@flow
import React from 'react';
import IncomeDataViewer from './IncomeDataViewer';
import {connect} from 'react-redux';
import * as UUID from '../shared/UUID';
import {Adult} from "../adults/AdultsTypes";
import type {AdultId} from "../adults/AdultsTypes";
import {Map} from 'immutable';
import {addIncomeDataAction} from '../adults/AdultsActions'

type Props = {
    personesQuePodenTenirRendes: Map<AdultId, Adult>,
    addIncomeDataAction: Function,
}

class incomeDataPage extends React.Component<Props>{

    constructor() {
        super();
    }

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
        incomeData: state.incomeData
    };
}

export default connect(mapStateToProps, {addIncomeDataAction})(incomeDataPage);