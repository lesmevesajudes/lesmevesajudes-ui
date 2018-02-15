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
    updateAdult: Function,
    jumpToStep: Function
}

class AdultsPage extends React.Component<Props, State>{
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
        this.doneEditingAdult();

        if (formValues.id === undefined) {
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
                <AdultsForm
                    initialState={this.state.initialFormFields}
                    onSubmit={this.handleSubmitForm}
                    onCancel={this.doneEditingAdult}
                    onFinishAdding={() => this.doneEditingAdult()}
                />
            );
        } else {
            component=(
                <AdultsViewer
                    adults={this.props.adults}
                    onRemoveClick={this.handleRemoveAdultClick}
                    onUpdateClick={this.handleUpdateAdultClick}
                    onAddAdultClick={this.handleAddAdultClick}
                />
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