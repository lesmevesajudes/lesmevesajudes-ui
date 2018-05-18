//@flow
import React from "react";
import PersonsViewer from "./PersonsViewer";
import type {PersonFormInitialValues} from "./PersonForm";
import PersonForm from "./PersonForm";
import {connect} from "react-redux";
import type {Person, PersonID} from "./PersonTypes";
import {HowManyPersonsLiveTogetherType} from "./PersonTypes";
import {serialize} from "./PersonsReducer";
import * as UUID from "../shared/UUID";
import {addPerson, removePerson, updatePerson} from "./PersonsActions";
import HowManyPersonsLiveTogetherPage from "./HowManyPersonsLiveTogetherPage";

type State = {
  step: string,
  initialFormValues: ?PersonFormInitialValues,
  numberOfPersonsLivingTogether: number,
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
    step: "NumberOfPersonsLivingTogether",
    initialFormValues: undefined,
    numberOfPersonsLivingTogether: 0
  };

  handleAddPersonClick = () => {
    this.setState({
      ...this.state,
      step: "addPerson"
    });
  };
  handleUpdatePersonClick = (personID: PersonID) => {
    this.setState({
      ...this.state,
      initialFormValues: this.props.persons.filter(e => e.id === personID)[0],
      step: "addPerson"
    });
  };
  handleRemovePersonClick = (personID: PersonID) => {
    this.props.removePerson(personID);
  };
  doneEditingPerson = () => {
    this.setState({
      ...this.state,
      initialFormValues: undefined,
      step: "personsList",
    });
  };
  handleSubmitPersonForm = (formValues: Person) => {
    this.doneEditingPerson();
    if (formValues.id === undefined) {
      return this.props.addPerson({...formValues, id: UUID.create()});
    } else {
      return this.props.updatePerson(formValues);
    }
  };
  handleSubmitHowManyPersonsLiveTogether = (formValues: HowManyPersonsLiveTogetherType) => {
    this.setState({
      ...this.state,
      numberOfPersonsLivingTogether: formValues.how_many_persons_live_together,
      step: "addPerson",
      initialFormValues: {is_the_user_in_front_of_the_computer: true}
    });
  };

  constructor() {
    super();
    this.handleAddPersonClick = this.handleAddPersonClick.bind(this);
    this.doneEditingPerson = this.doneEditingPerson.bind(this);
    this.handleRemovePersonClick = this.handleRemovePersonClick.bind(this);
    this.handleUpdatePersonClick = this.handleUpdatePersonClick.bind(this);
    this.handleSubmitPersonForm = this.handleSubmitPersonForm.bind(this);
    this.handleSubmitHowManyPersonsLiveTogether = this.handleSubmitHowManyPersonsLiveTogether.bind(this);
  }

  render() {
    const step = this.state.step;
    const expectedNumberOfPersonsLivingTogether = this.state.numberOfPersonsLivingTogether;
    let component = undefined;
    if (step === "NumberOfPersonsLivingTogether") {
      component = (<HowManyPersonsLiveTogetherPage
          onSubmit={this.handleSubmitHowManyPersonsLiveTogether}
      />);
    } else if (step === "personsList") {
      component = (
          <PersonsViewer
              persons={this.props.persons}
              onRemoveClick={this.handleRemovePersonClick}
              onUpdateClick={this.handleUpdatePersonClick}
              onAddPersonClick={this.handleAddPersonClick}
              expectedNumberOfPersons={expectedNumberOfPersonsLivingTogether}
          />);
    } else if (step === "addPerson") {
      component = (
          <PersonForm
              initialValues={this.state.initialFormValues}
              onSubmit={this.handleSubmitPersonForm}
              onCancel={this.doneEditingPerson}
              onFinishAdding={() => this.doneEditingPerson()}
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
