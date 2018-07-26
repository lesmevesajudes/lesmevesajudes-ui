// @flow
import {REPORT_BUG_URL} from "../config";
import axios from "axios/index";
import type {BugReport} from "./ReportBugTypes";

export const START_REPORT_BUG = 'START_REPORT_BUG';
export const REPORT_BUG_DONE = 'REPORT_BUG_DONE';
export const REPORT_BUG_ERROR = 'REPORT_BUG_ERROR';

export const submitReport = (values: BugReport) => (dispatch: any) => {
  console.log('form submit:', values);
  dispatch({
    type: START_REPORT_BUG
  });
  return axios.post(REPORT_BUG_URL,
      {
        comments: values.comments || '',
        expected_result: values.resultat_esperat || '',
        application_state: values.application_state || {},
        valid_result: !values.invalid_result
      }).then(result => dispatch({
    type: REPORT_BUG_DONE,
    payload: result
  })).catch(error => dispatch({
    type: REPORT_BUG_ERROR,
    payload: error
  }));
};
