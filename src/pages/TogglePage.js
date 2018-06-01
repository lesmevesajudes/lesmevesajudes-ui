//@flow
import React, {Component} from "react";
import MultipleChoice from "../components/MultipleChoice";
import {Choice} from "../components/Choice";
import Grid from "@material-ui/core/Grid";
import {formValueSelector, reduxForm} from "redux-form";
import {connect} from "react-redux";


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
            <MultipleChoice currentState={this.state.toggleState}
                            optionSelected={this.ontoggleClick}>
              <Choice name="Si" variant="outlined">
                Si
              </Choice>
              <Choice name="No" variant="outlined">
                No
              </Choice>
              <Choice name="Potser" variant="outlined">
                Potser
              </Choice>
            </MultipleChoice>
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
