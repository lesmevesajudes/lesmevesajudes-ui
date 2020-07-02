import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import {clearFields, Field} from 'redux-form';

function IRemoveMyValueWhenUnmountedField(props) {

  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      const {name} = props;
      const {formname} = props;
      dispatch(clearFields(formname, false, false, name));
    }
  }, []);

  return <Field {...props} />;
}

export {IRemoveMyValueWhenUnmountedField};
