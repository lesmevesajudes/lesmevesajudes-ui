// @flow
import axios from "axios/index";
import {REPORT_BUG_URL} from "../config";
import type {BugReport} from "./ReportBugTypes";

export const START_REPORT_BUG = 'START_REPORT_BUG';
export const REPORT_BUG_DONE = 'REPORT_BUG_DONE';
export const REPORT_BUG_ERROR = 'REPORT_BUG_ERROR';

export const submitReport = (values: BugReport) => (dispatch: any) => {
  const valuesToSubmit = {comments: '', expected_result: '', ...values};
  console.log('form submit:', valuesToSubmit);
  localStorage.setItem('reporter_email', valuesToSubmit.reporter_email);
  localStorage.setItem('test_group', valuesToSubmit.test_group);
  dispatch({
    type: START_REPORT_BUG
  });
  return axios.post(REPORT_BUG_URL, valuesToSubmit).then(result => dispatch({
    type: REPORT_BUG_DONE,
    payload: result
  })).catch(error => dispatch({
    type: REPORT_BUG_ERROR,
    payload: error
  }));
};
