//@flow
import React from 'react';
import ChildrenViewer from './ChildrenViewer';
import ChildrenAdder from './ChildrenForm';
import type {Child, ChildId} from "./ChildrenTypes";
import * as UUID from '../shared/UUID';
import {connect} from 'react-redux';
import {serialize} from './ChildrenReducer';
import { addChild, updateChild, removeChild } from './ChildrenActions';
type State = {
    editingChild: boolean,
    initialFormFields: ?Child
};

type Props = {
    children: Array<Child>,
    removeChild: Function,
    addChild: Function,
    updateChild: Function
}

class ChildrenPage extends React.Component<Props, State> {
    handleAddChildClick: Function;
    doneEditingChild: Function;
    handleRemoveChildClick: Function;
    handleUpdateChildClick: Function;
    handleSubmitForm: Function;

    state = {
        editingChild: false,
        initialFormFields: undefined
    };

    constructor() {
        super();
        this.handleAddChildClick = this.handleAddChildClick.bind(this);
        this.doneEditingChild = this.doneEditingChild.bind(this);
        this.handleRemoveChildClick = this.handleRemoveChildClick.bind(this);
        this.handleUpdateChildClick = this.handleUpdateChildClick.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
    handleAddChildClick() {
        this.setState({editingChild: true});
    }
    handleUpdateChildClick(childId: ChildId) {
        this.setState(
            {
                initialFormFields: this.props.children.filter((e) => e.id===childId)[0],
                editingChild: true
            }
        );
    }
    handleRemoveChildClick(childId: ChildId) {
        this.props.removeChild(childId);
    }
    doneEditingChild() {
        this.setState({
            initialFormFields: undefined,
            editingChild: false});
    }
    handleSubmitForm(formValues: Child) {
        this.doneEditingChild();

        if (formValues.id === undefined) {
            this.props.addChild({...formValues, id: UUID.create()});
        } else {
            this.props.updateChild(formValues);
        }
    }
    
    render() {
        const editingChild = this.state.editingChild;
        let component=undefined;

        if (editingChild) {
            component=(
                <div>
                    <ChildrenAdder
                        initialState={this.state.initialFormFields}
                        onSubmit={this.handleSubmitForm}
                        onCancel={this.doneEditingChild}
                        onFinishAdding={() => this.doneEditingChild()}/>
                </div>);
        } else {
            component=(
                <div>
                    <h1>Menors de la unitat de convivència</h1>
                    <ChildrenViewer
                        children={this.props.children}
                        onRemoveClick={this.handleRemoveChildClick}
                        onUpdateClick={this.handleUpdateChildClick}/>
                    <button onClick={this.handleAddChildClick}>Afegir un menor</button>
                </div>);
        }
        return component;
    }
}

function mapStateToProps(state) {
    return {
        children: serialize(state.children)
    };
}

export default connect(mapStateToProps, {updateChild, removeChild, addChild})(ChildrenPage);