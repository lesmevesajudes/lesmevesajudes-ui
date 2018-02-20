//@flow
import React from 'react';
import IncomeDataViewer from './IncomeDataViewer';
import IncomeDataForm from './IncomeDataForm';
import {connect} from 'react-redux';
import type {IncomeData, IncomeDataId, Renda} from './IncomeDataTypes';
import * as UUID from '../shared/UUID';
import { addIncomeData, updateIncomeData, removeIncomeData } from './IncomeDataActions';
import {Adult} from "../adults/AdultsTypes";
import type {AdultId} from "../adults/AdultsTypes";
import {Map} from 'immutable';

type State = {
    editingIncomeData: boolean,
    initialFormFields: ?IncomeData,
    adultName: string
};

type Props = {
    personesQuePodenTenirRendes: Map<Adult>,
    incomeData: Map<Renda>,
    removeIncomeData: Function,
    addIncomeData: Function,
    updateIncomeData: Function,
    jumpToStep: Function
}

class incomeDataPage extends React.Component<Props, State>{
    state = {
        editingIncomeData: false,
        initialFormFields: undefined
    };

    constructor() {
        super();
        this.handleAddIncomeDataClick = this.handleAddIncomeDataClick.bind(this);
        this.doneEditingIncomeData = this.doneEditingIncomeData.bind(this);
        this.handleUpdateIncomeDataClick = this.handleUpdateIncomeDataClick.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleAddIncomeDataClick() {
        this.setState({editingIncomeData: true});
    }

    handleUpdateIncomeDataClick(adultId: AdultId) {
        this.setState(
            {
                initialFormFields: this.props.incomeData[adultId],
                adultName: this.props.personesQuePodenTenirRendes.get(adultId).nom,
                editingIncomeData: true
            }
        );
    }

    doneEditingIncomeData() {
        this.setState({
            initialFormFields: undefined,
            editingIncomeData: false});
    }

    handleSubmitForm(formValues: IncomeData) {
        this.doneEditingIncomeData();

        if (formValues.id === undefined) {
            this.props.addIncomeData({...formValues, id: UUID.create()});
        } else {
            this.props.updateIncomeData(formValues);
        }
    }

    render() {
        const addingIncomeData = this.state.editingIncomeData;
        let component = undefined;

        if (addingIncomeData) {
            component=(
                <IncomeDataForm
                    initialState={this.state.initialFormFields}
                    adultName={this.state.adultName}
                    onSubmit={this.handleSubmitForm}
                    onCancel={this.doneEditingIncomeData}
                    onFinishAdding={() => this.doneEditingIncomeData()}
                />
            );
        } else {
            component=(
                <IncomeDataViewer
                    personesQuePodenTenirRendes={this.props.personesQuePodenTenirRendes}
                    onUpdateClick={this.handleUpdateIncomeDataClick}
                    onAddIncomeDataClick={this.handleAddIncomeDataClick}
                />
            );
        }
        return component;

    }
}

function mapStateToProps(state) {
    return {
        personesQuePodenTenirRendes: state.adults,
        incomeData: state.incomeData
    };
}

export default connect(mapStateToProps, {updateIncomeData, removeIncomeData, addIncomeData})(incomeDataPage);