//@flow
import React, { Component } from 'react';
import FinancialDataViewer from './FinancialDataViewer';
import FinancialDataForm from './FinancialDataForm';
import type {FinancialData, FinancialDataId} from "./FinancialDataTypes";
import connect from "react-redux/es/connect/connect";
import {addFinancialData, removeFinancialData, updateFinancialData} from "./FinancialDataActions";
import * as UUID from '../shared/UUID';
import {serialize} from "./FinancialDataReducer";
import {serialize as serialize_adults} from '../adults/AdultsReducer';
import {serialize as serialize_children} from '../children/ChildrenReducer';

type State = {
    editing: boolean,
    initialFormFields: any
};

type Props = {
    financialData: Array<FinancialData>,
    persons: Array<any>,
    removeFinancialData: Function,
    addFinancialData: Function,
    updateFinancialData: Function
}

class FinancialDataPage extends Component<Props, State> {
    handleAddFinancialDataClick: Function;
    doneEditing: Function;
    handleRemoveFinancialDataClick: Function;
    handleUpdateFinancialDataClick: Function;
    handleSubmitForm: Function;
    
    state = {
        editing: false,
        initialFormFields: undefined
    };

    constructor() {
        super();
        this.handleAddFinancialDataClick = this.handleAddFinancialDataClick.bind(this);
        this.doneEditing = this.doneEditing.bind(this);
        this.handleRemoveFinancialDataClick = this.handleRemoveFinancialDataClick.bind(this);
        this.handleUpdateFinancialDataClick = this.handleUpdateFinancialDataClick.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
    handleAddFinancialDataClick(type: string) {
        this.setState({editing: true,
            initialFormFields: {type: type}
        });
    }

    doneEditing() {
        this.setState({
            initialFormFields: undefined,
            editing: false});
    }

    handleRemoveFinancialDataClick(financialDataId: FinancialDataId) {
        this.props.removeFinancialData(financialDataId);
    }

    handleUpdateFinancialDataClick(financialDataId: FinancialDataId) {
        this.setState(
            {
                initialFormFields: this.props.financialData.filter((e) => e.id===financialDataId)[0],
                editing: true
            }
        );
    }

    handleSubmitForm(formValues: FinancialData) {
        this.doneEditing();

        if (formValues.id === undefined) {
            this.props.addFinancialData({...formValues, id: UUID.create()});
        } else {
            this.props.updateFinancialData(formValues);
        }
    }

    render() {
        const editing = this.state.editing;
        let component = undefined;
        console.log("Editing: " + this.state.editing.toString());
        if (editing) {
            component=(
                <div>
                    <FinancialDataForm
                        initialState={this.state.initialFormFields}
                        persons={this.props.persons}
                        onSubmit={this.handleSubmitForm}
                        onCancel={this.doneEditing}
                        onFinishAdding={() => this.doneEditing()}
                    />
                </div>
            );
        } else {
            component=(
                <div>
                    <h1>Dades econòmiques</h1>
                    <FinancialDataViewer financialData={this.props.financialData}
                                         onRemoveClick={this.handleRemoveFinancialDataClick}
                                         onUpdateClick={this.handleUpdateFinancialDataClick}/>
                    <div>
                        <div>
                            <h2>Ingressos del treball</h2><br/>
                            <button onClick={()=>this.handleAddFinancialDataClick("SALARI")}>Salari</button>
                        </div>
                        <div>
                            <h2>Pensions</h2><br/>
                            <button onClick={()=>this.handleAddFinancialDataClick("PENSIO_RAI")}>Pensió RAI</button>
                            <button onClick={()=>this.handleAddFinancialDataClick("PENSIO_VIUDETAT")}>Pensió viudetat</button>
                            <button onClick={()=>this.handleAddFinancialDataClick("PENSIO_ALIMENTICIA")}>Pensió alímentícia</button>
                        </div>
                        <div>
                            <h2>Ajudes</h2><br/>
                            <button onClick={()=>this.handleAddFinancialDataClick("AJUDA_MENJADOR")}>Ajuda menjador</button>
                            <button onClick={()=>this.handleAddFinancialDataClick("AJUDA_AL_LLOGUER")}>Ajuda al lloguer</button>
                            <button onClick={()=>this.handleAddFinancialDataClick("RGC")}>Renda Garantida de ciutadania</button>
                        </div>
                        <div>
                            <h2>Rendiments</h2>
                            <button onClick={()=>this.handleAddFinancialDataClick("FACTURACIO_NEGOCI_FAMILIAR")}>Facturació del negoci</button>
                            <button onClick={()=>this.handleAddFinancialDataClick("RENDIMENTS_PATRIMONI_FAMILIAR")}>Rendiments del patrimoni familiar</button>
                        </div>
                    </div>
                </div>
            );
        }
        return component;
    }
}

function listPersons(state) {
    return [
        ...serialize_adults(state.adults),
        ...serialize_children(state.children)];
}

function mapStateToProps(state) {
    return {
        financialData: serialize(state.financialData),
        persons: listPersons(state)
    };
}

export default connect(mapStateToProps, {addFinancialData, removeFinancialData, updateFinancialData})(FinancialDataPage);