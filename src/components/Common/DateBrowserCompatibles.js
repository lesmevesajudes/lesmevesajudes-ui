import React, { Component } from 'react';
import normalizeDate from "../Common/DateMask"
import {Field} from "redux-form";
import {TextField} from "redux-form-material-ui";
class DateBrowserCompatibles extends Component {
  render() {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    let isIE = /*@cc_on!@*/false || !!document.documentMode;
    return (
      <div>
        {isIE ? ( 
          <Field name={this.props.typeDate} placeholder="dd/mm/aaaa" normalize={normalizeDate} type="date" component={TextField} fullWidth required/>
        ) : isSafari ? (
         <Field name={this.props.typeDate} placeholder="dd/mm/aaaa" normalize={normalizeDate} type="date" component={TextField} fullWidth required/>
        ) : (
         <Field name={this.props.typeDate} type="date" component={TextField} fullWidth required/>
        )}
      </div>
    );
  }
}

export default DateBrowserCompatibles;
