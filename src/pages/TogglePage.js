import React from "react";
import ToggleButton from "../components/ToggleButton/index";
import Grid from "@material-ui/core/Grid";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {connect} from "react-redux";

let TogglePage = (props) =>
    <Grid container>
      <form onSubmit={props.handleSubmit}>
        <label>toggle value: {props.toggleValue}</label>
        <Field name="test_toggle" checked={false} component={ToggleButton}/>
      </form>
    </Grid>;

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
