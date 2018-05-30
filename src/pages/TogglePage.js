//@flow
import React, {Component} from "react";
import ToggleButton from "../components/ToggleButton/index";
import Grid from "@material-ui/core/Grid";
import {formValueSelector, reduxForm} from "redux-form";
import {connect} from "react-redux";

const toggleElements = [
  {name: "Si"},
  {name: "No"},
  {name: "Potser"}
];


type State = {
  toggleState: ?string
}
type Props = {
  handleSubmit: Function,
}

class TogglePage extends Component<Props, State> {

  ontoggleClick = (newState: string) => {
    return this.setState({toggleState: newState});
  };

  constructor() {
    super();
    this.ontoggleClick = this.ontoggleClick.bind(this);
    this.state = {toggleState: undefined};
  }

  render() {
    return (
        <Grid container>
          <form onSubmit={this.props.handleSubmit}>
            <ToggleButton currentState={this.state.toggleState} setup={toggleElements}
                          optionSelected={this.ontoggleClick}/>
          </form>
        </Grid>);
  }
}

TogglePage = reduxForm({
  form: "ToggleForm"
})(TogglePage);

const selector = formValueSelector("ToggleForm");

TogglePage = connect(state => {
  return {
    toggleValue: selector(state, "test_toggle")
  };
})(TogglePage);

export default TogglePage;
