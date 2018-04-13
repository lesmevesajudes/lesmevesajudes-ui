//@flow
import React from "react";
import PersonsViewer from "./PersonsViewer";
import type {PersonFormInitialValues} from "./PersonForm";
import PersonForm from "./PersonForm";
import {connect} from "react-redux";
import type {Person, PersonID} from "./PersonTypes";
import {serialize} from "./PersonsReducer";
import * as UUID from "../shared/UUID";
import {addPerson, removePerson, updatePerson} from "./PersonsActions";

type State = {
  editingPerson: boolean,
  initialFormValues: ?PersonFormInitialValues
};

type Props = {
  persons: Array<Person>,
  removePerson: Function,
  addPerson: Function,
  updatePerson: Function,
  jumpToStep: Function,
  PersonRole: String
};

class PersonsPage extends React.Component<Props, State> {
  state = {
    editingPerson: false,
    initialFormValues: undefined
  };
  handleAddPersonClick = (rol: String) => {
    this.setState({
      initialFormValues: { rol },
      editingPerson: true
    });
  };
  handleUpdatePersonClick = (personID: PersonID) => {
    this.setState({
      initialFormValues: this.props.persons.filter(e => e.id === personID)[0],
      editingPerson: true
    });
  };
  handleRemovePersonClick = (personID: PersonID) => {
    this.props.removePerson(personID);
  };
  doneEditingPerson = () => {
    this.setState({
      initialFormValues: undefined,
      editingPerson: false
    });
  };
  handleSubmitForm = (formValues: Person) => {
    this.doneEditingPerson();
    if (formValues.id === undefined) {
      return this.props.addPerson({...formValues, id: UUID.create()});
    } else {
      return this.props.updatePerson(formValues);
    }
  };

  constructor() {
    super();
    this.handleAddPersonClick = this.handleAddPersonClick.bind(this);
    this.doneEditingPerson = this.doneEditingPerson.bind(this);
    this.handleRemovePersonClick = this.handleRemovePersonClick.bind(this);
    this.handleUpdatePersonClick = this.handleUpdatePersonClick.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  render() {
    const addingPerson = this.state.editingPerson;
    let component = undefined;
    if (addingPerson) {
      component = (
          <PersonForm
              initialValues={this.state.initialFormValues}
              onSubmit={this.handleSubmitForm}
              onCancel={this.doneEditingPerson}
              onFinishAdding={() => this.doneEditingPerson()}
        />
      );
    } else {
      component = (
          <PersonsViewer
              persons={this.props.persons}
              onRemoveClick={this.handleRemovePersonClick}
              onUpdateClick={this.handleUpdatePersonClick}
              onAddPersonClick={this.handleAddPersonClick}
        />
      );
    }
    return component;
  }
}

function mapStateToProps(state) {
  return {
    persons: serialize(state.persons)
  };
}

export default connect(mapStateToProps, {addPerson: addPerson, updatePerson: updatePerson, removePerson: removePerson})(
    PersonsPage
);
