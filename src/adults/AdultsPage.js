//@flow
import React from 'react';
import AdultsViewer from './AdultsViewer';
import AdultsForm from './AdultsForm';
import {connect} from 'react-redux';
import type { Adult, AdultId } from './AdultsTypes';
import {serialize} from './AdultsReducer';
import * as UUID from '../shared/UUID';
import { addAdult, updateAdult, removeAdult } from './AdultsActions';

type State = {
    editingAdult: boolean,
    initialFormFields: ?Adult
};

type Props = {
    adults: Array<Adult>,
    removeAdult: Function,
    addAdult: Function,
    updateAdult: Function
}

class AdultsPage extends React.Component<Props, State>{
    handleAddAdultClick: Function;
    doneEditingAdult: Function;
    handleRemoveAdultClick: Function;
    handleUpdateAdultClick: Function;
    handleSubmitForm: Function;

    state = {
        editingAdult: false,
        initialFormFields: undefined
    };

    constructor() {
        super();
        this.handleAddAdultClick = this.handleAddAdultClick.bind(this);
        this.doneEditingAdult = this.doneEditingAdult.bind(this);
        this.handleRemoveAdultClick = this.handleRemoveAdultClick.bind(this);
        this.handleUpdateAdultClick = this.handleUpdateAdultClick.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
    handleAddAdultClick() {
        this.setState({editingAdult: true});
    }
    handleUpdateAdultClick(adultId: AdultId) {
        this.setState(
            {
                initialFormFields: this.props.adults.filter((e) => e.id===adultId)[0],
                editingAdult: true
            }
        );
        console.log(adultId);
        console.log(this.props.adults.filter((e)=>e.id===adultId)[0]);
    }
    handleRemoveAdultClick(adultId: AdultId) {
        this.props.removeAdult(adultId);
    }
    doneEditingAdult() {
        this.setState({
            initialFormFields: undefined,
            editingAdult: false});
    }
    handleSubmitForm(formValues: Adult) {
        console.log("Submit ");
        console.log(JSON.stringify(formValues));
        this.doneEditingAdult();

        if (formValues.id === undefined) {
            console.log("crea");
            this.props.addAdult({...formValues, id: UUID.create()});
        } else {
            this.props.updateAdult(formValues);
        }
    }

    render() {
        const addingAdult = this.state.editingAdult;
        let component = undefined;

        if (addingAdult) {
            component=(
                <div>
                    <AdultsForm
                        initialState={this.state.initialFormFields}
                        onSubmit={this.handleSubmitForm}
                        onCancel={this.doneEditingAdult}
                        onFinishAdding={() => this.doneEditingAdult()}
                    />
                </div>
            );
        } else {
            component=(
                <div>
                    <h1>Adults de la unitat de convivència</h1>
                    <AdultsViewer
                        adults={this.props.adults}
                        onRemoveClick={this.handleRemoveAdultClick}
                        onUpdateClick={this.handleUpdateAdultClick}/>
                    <button onClick={this.handleAddAdultClick}>Afegir un adult</button>
                </div>
            );
        }
        return component;

    }
}

function mapStateToProps(state) {
    return {
        adults: serialize(state.adults)
    };
}

export default connect(mapStateToProps, {updateAdult, removeAdult, addAdult})(AdultsPage);