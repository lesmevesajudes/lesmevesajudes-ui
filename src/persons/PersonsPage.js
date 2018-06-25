//@flow
import React from 'react';
import PersonsViewer from './PersonsViewer';
import type {PersonFormInitialValues} from './PersonForm';
import PersonForm from './PersonForm';
import {connect} from 'react-redux';
import type {Person, PersonID} from './PersonTypes';
import {HowManyPersonsLiveTogetherType} from './PersonTypes';
import {serialize} from './PersonsReducer';
import * as UUID from '../shared/UUID';
import {addPerson, removePerson, updatePerson} from './PersonsActions';
import HowManyPersonsLiveTogetherPage from './HowManyPersonsLiveTogetherPage';
import {enableButtons, hideButtons, showButtons} from '../components/Steps/StepsActions';

type State = {
  step: string,
  initialFormValues: ?PersonFormInitialValues,
  numberOfPersonsLivingTogether: number,
};

type Props = {
  persons: Array<Person>,
  PersonRole: String,
  dispatch: Function
};

class PersonsPage extends React.Component<Props, State> {

  removeOnePersonLivingTogether = () =>
      this.setState({
        ...this.state,
        numberOfPersonsLivingTogether: this.state.numberOfPersonsLivingTogether - 1
      }, this.enableButtonsIfNeeded);

  handleAddPersonClick = () => {
    this.props.dispatch(hideButtons());
    this.setState({
      ...this.state,
      step: 'addPerson'
    });
  };

  handleUpdatePersonClick = (personID: PersonID) => {
    this.props.dispatch(hideButtons());
    this.setState({
      ...this.state,
      initialFormValues: this.props.persons.filter((e: Person): boolean => e.id === personID)[0],
      step: 'updatePerson'
    });
  };

  handleRemovePersonClick = (personID: PersonID) => {
    this.props.dispatch(removePerson(personID));
    this.removeOnePersonLivingTogether();
  };

  doneEditingPerson = () => {
    this.props.dispatch(showButtons());
    this.setState({
      ...this.state,
      initialFormValues: undefined,
      step: 'personsList',
    });
  };

  handleSubmitPersonForm = (formValues: Person) => {
    this.props.dispatch(
        (formValues.id === undefined)
            ? addPerson({...formValues, id: UUID.create()})
            : updatePerson(formValues)
    );
    window.scrollTo(0, 0);
    this.enableButtonsIfNeeded(this.props.persons.length + 1);
    this.doneEditingPerson();
  };

  enableButtonsIfNeeded = (persons: ?number) => {
    // FIXME terrible hack to fix that I don't know how to execute functions after actions
    const personsToCheck: number = typeof persons === 'number' ? persons : this.props.persons.length;
    if (personsToCheck >= this.state.numberOfPersonsLivingTogether) {
      this.props.dispatch(enableButtons());
    }
  };

  handleSubmitHowManyPersonsLiveTogether = (formValues: HowManyPersonsLiveTogetherType) => {
    this.setState({
      ...this.state,
      numberOfPersonsLivingTogether: formValues.how_many_persons_live_together,
      step: 'addPerson',
      initialFormValues: {is_the_person_in_front_of_the_computer: true}
    });
  };

  constructor(props) {
    super(props);
    this.handleAddPersonClick = this.handleAddPersonClick.bind(this);
    this.doneEditingPerson = this.doneEditingPerson.bind(this);
    this.handleRemovePersonClick = this.handleRemovePersonClick.bind(this);
    this.handleUpdatePersonClick = this.handleUpdatePersonClick.bind(this);
    this.handleSubmitPersonForm = this.handleSubmitPersonForm.bind(this);
    this.handleSubmitHowManyPersonsLiveTogether = this.handleSubmitHowManyPersonsLiveTogether.bind(this);
    this.state = {
      step: (typeof this.props.persons !== 'undefined' && this.props.persons.length > 0) ?
          'personsList' : 'NumberOfPersonsLivingTogether',
      initialFormValues: undefined,
      numberOfPersonsLivingTogether: 0
    };
  }

  render() {
    const expectedNumberOfPersonsLivingTogether = this.state.numberOfPersonsLivingTogether;
    const step = this.state.step;
    let component = undefined;

    if (step === 'NumberOfPersonsLivingTogether') {
      component = (<HowManyPersonsLiveTogetherPage
          onSubmit={this.handleSubmitHowManyPersonsLiveTogether}
      />);
    } else if (step === 'personsList') {
      component = (
          <PersonsViewer
              persons={this.props.persons}
              onRemoveClick={this.handleRemovePersonClick}
              onUpdateClick={this.handleUpdatePersonClick}
              onAddPersonClick={this.handleAddPersonClick}
              onRemoveUnknownClick={this.removeOnePersonLivingTogether}
              expectedNumberOfPersons={expectedNumberOfPersonsLivingTogether}
          />);
    } else if (step === 'addPerson' || step === 'updatePerson') {

      component = (
          <PersonForm
              initialValues={this.state.initialFormValues}
              onSubmit={this.handleSubmitPersonForm}
              onCancel={this.doneEditingPerson}
              updating={step === 'updatePerson'}
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

export default connect(mapStateToProps)(
    PersonsPage
);
