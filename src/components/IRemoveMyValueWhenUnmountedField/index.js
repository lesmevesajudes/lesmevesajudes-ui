import React from 'react';
import {clearFields, Field} from 'redux-form';

export class IRemoveMyValueWhenUnmountedField extends Field {
  componentWillUnmount() {
    super.componentWillUnmount();
    const {name} = this.props;
    let action;

    action = clearFields(this.context._reduxForm.form, false, false, name);

    this.context._reduxForm.dispatch(action);
  }

  render() {
    return <Field {...this.props} />;
  }
}
